"use client";

import {signupServerAction} from "@/actions/auth";
import {useMutation} from "@tanstack/react-query";
import toast from "react-hot-toast";

function useSignup() {
  const {mutate: signup, isPending: isSigningUp} = useMutation({
    mutationFn: async (formData) => {
      const result = await signupServerAction(formData);
      if (result.error) throw new Error(result.error);
      return result;
    },

    onSuccess: () => {
        
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
