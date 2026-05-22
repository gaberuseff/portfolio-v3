"use server";

import bcrypt from "bcryptjs";
import db from "@/lib/prisma";
import verificationEmail from "@/components/ui/verification-email";
import {resend} from "@/lib/resend";
import crypto from "crypto";
import {signupSchema} from "@/lib/schema";

export async function signupServerAction(userData) {
  const validation = signupSchema.safeParse(userData);

  if (!validation.success) {
    const firstMessage =
      validation.error?.issues?.[0]?.message ?? "Invalid input";
    return {error: firstMessage};
  }

  const {name, email, password, phoneNumber, country = ""} = validation.data;

  try {
    const existingUser = await db.user.findUnique({
      where: {email},
    });
    const otpCode = crypto.randomInt(100000, 900000).toString();
    const expires = new Date(Date.now() + 10 * 60 * 1000);

    // 💡 السيناريو الأول والثاني: الحساب موجود بالفعل في قاعدة البيانات
    if (existingUser) {
      if (existingUser.status === "ACTIVE" || existingUser.email_verified) {
        return {error: "This email is already registered and verified!"};
      }

      const hashedPassword = await bcrypt.hash(password, 10);

      await db.$transaction(async (tx) => {
        await tx.user.update({
          where: {email},
          data: {
            name,
            password: hashedPassword,
            phone_number: phoneNumber,
            country,
          },
        });

        // هنا الحذف إلزامي لأن المستخدم موجود بالفعل وقد يمتلك توكن قديم منتهي الصلاحية
        await tx.verificationToken.deleteMany({where: {email}});

        await tx.verificationToken.create({
          data: {email, code: otpCode, expires},
        });
      });

      const sendResult = await sendVerificationEmail(name, email, otpCode);
      if (sendResult?.error) return {error: sendResult.error};

      return {
        success: true,
        message: "A new verification code has been sent to your email.",
      };
    }

    // 💡 السيناريو الثالث: مستخدم جديد تماماً لأول مرة (تم إصلاح الخطأ هنا)
    const hashedPassword = await bcrypt.hash(password, 10);

    await db.$transaction(async (tx) => {
      await tx.user.create({
        data: {
          name,
          email,
          password: hashedPassword,
          phone_number: phoneNumber,
          country,
        },
      });

      await tx.verificationToken.deleteMany({where: {email}});

      await tx.verificationToken.create({
        data: {email, code: otpCode, expires},
      });
    });

    const sendResult = await sendVerificationEmail(name, email, otpCode);
    if (sendResult?.error) {
      console.error("Send verification (new user) failed:", sendResult.error);
      return {error: sendResult.error};
    }

    return {success: true};
  } catch (error) {
    console.error("Critical Register Error:", {
      name: error?.name,
      code: error?.code,
      message: error?.message,
      meta: error?.meta,
    });
    return {
      error: "An error occurred during registration. Please try again.",
    };
  }
}

async function sendVerificationEmail(name, email, otpCode) {
  try {
    const resp = await resend.emails.send({
      from: "Gaber <onboarding@resend.dev>",
      to: email,
      subject: "Verify your email",
      html: verificationEmail({name, otpCode}),
    });
    if (resp?.error) {
      return {
        error: resp.error?.message || "Failed to send verification email.",
      };
    }
    return {success: true};
  } catch (err) {
    console.error("Resend API error:", err);
    return {error: "Failed to send verification email. Check server logs."};
  }
}
