"use client";

import {SignupForm} from "@/features/auth/signup-form";

export default function SignupPage() {
  return (
    <div className="flex h-[calc(100vh-4rem)] w-full items-center justify-center p-6 md:p-10">
      <div className="flex w-full max-w-lg flex-col gap-6">
        <SignupForm />
      </div>
    </div>
  );
}
