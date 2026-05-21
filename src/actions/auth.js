"use server";

import {db} from "@/lib/prisma";

export async function signupServerAction(userData) {
  const {name, email, password, phoneNumber, country} = userData;

  if (!name || !email || !password) {
    return {error: "Please fill out all fields"};
  }

  try {
    const existingUser = await db.user.findUnique({
      where: {email},
    });

    if (existingUser) {
      return {error: "This email is already registered!"};
    }

    // 2. إنشاء المستخدم (emailVerified بيكون null)
    // ملحوظة: يفضل تشفير الباسورد بـ bcryptjs قبل الحفظ لحماية البيانات
    await db.user.create({
      data: {
        name,
        email,
        password,
        phoneNumber,
        country,
        companyName,
      },
    });

    // 3. توليد رمز OTP عشوائي (6 أرقام)
    const otpCode = Math.floor(100000 + Math.random() * 900000).toString();
    const expires = new Date(Date.now() + 10 * 60 * 1000); // صلاحية 10 دقائق

    // 4. حفظ الرمز في جدول VerificationToken
    await db.verificationToken.create({
      data: {
        email,
        code: otpCode,
        expires,
      },
    });

    // 5. هنا بيتم إرسال الإيميل (مثلاً بـ Resend)
    console.log(`[Resend OTP] Code for ${email} is: ${otpCode}`);

    return {success: true};
  } catch (error) {
    console.error("Prisma Register Error:", error);
    return {error: "An error occurred during registration. Please try again."};
  }
}
