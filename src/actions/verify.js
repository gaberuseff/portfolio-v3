"use server";

import db from "@/lib/prisma";

export async function verifyOtpAction({email, code}) {
  if (!email || !code) {
    return {error: "Please provide both email and OTP code"};
  }

  try {
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
      await db.verificationToken.deleteMany({where: {id: existingToken.id}});
      return {error: "OTP code has expired, please request a new one."};
    }

    const result = await db.$transaction(async (tx) => {
      const updatedRows = await tx.$executeRaw`
        UPDATE "User"
        SET "email_verified" = ${new Date()}, "status" = ${"ACTIVE"}
        WHERE "email" = ${email}
      `;

      if (updatedRows === 0) {
        return {error: "Account was not found. Please sign up again."};
      }

      await tx.verificationToken.deleteMany({
        where: {id: existingToken.id},
      });

      return {success: true};
    });

    if (result?.error) {
      return result;
    }

    return {success: true};
  } catch (error) {
    console.error("OTP Verification Error:", error);
    return {error: "An error occurred during verification, please try again."};
  }
}
