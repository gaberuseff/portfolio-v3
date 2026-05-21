"use client";

import {SignupForm} from "@/features/auth/signup-form";

export default function SignupPage() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
      <div className="flex w-full max-w-lg flex-col gap-6">
        <SignupForm />
      </div>
    </div>
  );
}
