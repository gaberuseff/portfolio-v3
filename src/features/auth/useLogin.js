"use client";

import {loginServerAction} from "@/actions/auth";
import {useMutation} from "@tanstack/react-query";
import {useRouter} from "next/navigation";
import toast from "react-hot-toast";

function useLogin() {
  const router = useRouter();

  const {mutate: login, isPending: isLoggingIn} = useMutation({
    mutationFn: async (formData) => {
      const result = await loginServerAction(formData);
      if (result.error) {
        throw new Error(result.error);
      }
      return result;
    },

    onSuccess: () => {
      router.push("/redirect");
      router.refresh();
      toast.success("Login successful!");
    },

    onError: (error, variables) => {
      if (error.message === "ACCOUNT_NOT_VERIFIED") {
        toast.error("Please verify your email before logging in.");
        router.push(
          `/verify-email?email=${encodeURIComponent(variables.email)}`,
        );
      } else {
        toast.error(error.message || "Login failed. Please try again.");
      }
    },
  });

  return {login, isLoggingIn};
}

export default useLogin;
