"use server";

import db from "@/lib/prisma";

export async function verifyOtpAction({email, code}) {
  if (!email || !code) {
    return {error: "Please provide both email and OTP code"};
  }

  try {
    // 1. البحث عن الرمز في جدول VerificationToken للتأكد من صحته
    const existingToken = await db.verificationToken.findFirst({
      where: {
        email: email,
        code: code,
      },
    });

    if (!existingToken) {
      return {error: "OTP code is incorrect or has already been used."};
    }

    // 2. التأكد من أن الرمز لم تنتهِ صلاحيته بعد
    const hasExpired = new Date(existingToken.expires) < new Date();
    if (hasExpired) {
      // ميزة إضافية: يفضل مسح الرمز المنتهي لتنظيف الداتا بيز
      await db.verificationToken.delete({where: {id: existingToken.id}});
      return {error: "OTP code has expired, please request a new one."};
    }

    // 3. تحديث حالة المستخدم في جدول User وتثبيت وقت التفعيل
    await db.user.update({
      where: {email: email},
      data: {
        email_verified: new Date(),
      },
    });

    // 4. مسح الرمز من قاعدة البيانات لأنه تم استخدامه بنجاح بنظام (One-Time Password)
    await db.verificationToken.delete({
      where: {id: existingToken.id},
    });

    return {success: true};
  } catch (error) {
    console.error("OTP Verification Error:", error);
    return {error: "An error occurred during verification, please try again."};
  }
}
