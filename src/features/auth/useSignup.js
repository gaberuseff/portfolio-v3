"use client";

import {signupServerAction} from "@/actions/auth";
import {useMutation} from "@tanstack/react-query";
import {useRouter} from "next/navigation";
import toast from "react-hot-toast";

function useSignup() {
  const router = useRouter();

  const {mutate: signup, isPending: isSigningUp} = useMutation({
    mutationFn: async (formData) => {
      const result = await signupServerAction(formData);
      if (result.error) throw new Error(result.error);
      return result;
    },

    onSuccess: (_, variables) => {
      toast.success(
        "Registration successful! Please check your email for the OTP.",
      );
      router.push(`/verify-email?email=${encodeURIComponent(variables.email)}`);
    },

    onError: (error) => {
      toast.error(
        error.message ||
          "An error occurred during registration. Please try again.",
      );
    },
  });

  return {signup, isSigningUp};
}

export default useSignup;
