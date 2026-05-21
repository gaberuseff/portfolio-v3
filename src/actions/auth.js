"use server";

import bcrypt from "bcryptjs";
import db from "@/lib/prisma";
import verificationEmail from "@/components/ui/verification-email";
import {resend} from "@/lib/resend";

export async function signupServerAction(userData) {
  const {name, email, password, phoneNumber, country, confirmPassword} =
    userData;

  if (!name || !email || !password || !phoneNumber) {
    return {error: "Please fill out all required fields"};
  }

  if (confirmPassword && confirmPassword !== password) {
    return {error: "Passwords do not match"};
  }

  try {
    const existingUser = await db.user.findUnique({
      where: {email},
    });

    if (existingUser) {
      return {error: "This email is already registered!"};
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    // 🌟 توليد بيانات الـ OTP مسبقاً قبل دخول الـ Transaction
    const otpCode = Math.floor(100000 + Math.random() * 900000).toString();
    const expires = new Date(Date.now() + 10 * 60 * 1000); // صلاحية 10 دقائق

    // 🚀 بدء الـ Transaction لحماية قاعدة البيانات
    // الـ tx اللي جوه الدالة هي اللي بتنوب عن db لتنفيذ العمليات معاً
    await db.$transaction(async (tx) => {
      // 1. إنشاء المستخدم
      await tx.user.create({
        data: {
          name,
          email,
          password: hashedPassword,
          phone_number: phoneNumber,
          country,
        },
      });

      // 2. إنشاء رمز التحقق في نفس اللحظة
      await tx.verificationToken.create({
        data: {
          email,
          code: otpCode,
          expires,
        },
      });
    });

    // 📬 خطوة إرسال الإيميل (لا تحدث إلا إذا نجحت الـ Transaction بالكامل وتم الحفظ بنجاح)
    const {error: resendError} = await resend.emails.send({
      from: "Gaber <onboarding@resend.dev>",
      to: email,
      subject: "Verify your email",
      html: verificationEmail({name, otpCode}),
    });

    if (resendError) {
      console.error("Resend Sending Error:", resendError);
      return {
        error:
          "Account created, but we couldn't send the verification email. Please request a new code.",
      };
    }

    return {success: true};
  } catch (error) {
    console.error("Prisma Register Transaction Error:", error);
    return {error: "An error occurred during registration. Please try again."};
  }
}
