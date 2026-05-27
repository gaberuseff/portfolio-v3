"use server";

import bcrypt from "bcryptjs";
import db from "@/lib/prisma";
import verificationEmail from "@/components/ui/verification-email";
import {resend} from "@/lib/resend";
import crypto from "crypto";
import {signupSchema} from "@/lib/schema";
import {signIn, signOut} from "@/lib/auth";
import {AuthError} from "next-auth";

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
      from: "Gaber Usef <auth@gaberuseff.info>",
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

export async function loginServerAction(credentials) {
  try {
    await signIn("credentials", {
      email: credentials.email,
      password: credentials.password,
      redirect: false,
    });

    return {success: true};
  } catch (error) {
    if (error instanceof AuthError) {
      if (error.cause?.err?.message === "ACCOUNT_NOT_VERIFIED") {
        return {error: "ACCOUNT_NOT_VERIFIED"};
      }
      return {error: error.cause?.err?.message || "Authentication failed."};
    }

    return {error: "An unexpected error occurred. Please try again."};
  }
}

export async function logoutServerAction() {
  try {
    await signOut({redirect: false});
    return {success: true};
  } catch (error) {
    console.error("Logout Error:", error);
    return {error: "Failed to sign out. Please try again."};
  }
}

export async function resendOtpAction(email) {
  if (!email) {
    return {error: "Email is required"};
  }

  try {
    const user = await db.user.findUnique({
      where: {email},
    });

    if (!user) {
      return {error: "User not found"};
    }

    if (user.status === "ACTIVE" || user.email_verified) {
      return {error: "This account is already verified!"};
    }

    const otpCode = crypto.randomInt(100000, 900000).toString();
    const expires = new Date(Date.now() + 10 * 60 * 1000);

    // Delete existing verification tokens for this email
    await db.verificationToken.deleteMany({where: {email}});

    // Create a new verification token
    await db.verificationToken.create({
      data: {email, code: otpCode, expires},
    });

    // Send the email
    const sendResult = await sendVerificationEmail(user.name, email, otpCode);
    if (sendResult?.error) {
      return {error: sendResult.error};
    }

    return {success: true, message: "A new verification code has been sent."};
  } catch (error) {
    console.error("Resend OTP Error:", error);
    return {error: "Failed to resend verification code. Please try again."};
  }
}
