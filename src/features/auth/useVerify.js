import {resendOtpAction} from "@/actions/auth";
import {verifyOtpAction} from "@/actions/verify";
import {useMutation} from "@tanstack/react-query";
import {useRouter, useSearchParams} from "next/navigation";
import toast from "react-hot-toast";

function useVerify() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const email = searchParams.get("email");

  const {mutate: verify, isPending: isVerifying} = useMutation({
    mutationFn: async (code) => {
      const result = await verifyOtpAction({email, code});
      if (result.error) throw new Error(result.error);
      return result;
    },

    onSuccess: () => {
      toast.success("Verification successful! You can now log in.");
      router.push("/login");
    },

    onError: (error) => {
      toast.error(
        error.message ||
          "An error occurred during verification. Please try again.",
      );
    },
  });

  const {mutate: resendCode, isPending: isResending} = useMutation({
    mutationFn: async () => {
      const result = await resendOtpAction(email);
      if (result.error) throw new Error(result.error);
      return result;
    },

    onSuccess: (data) => {
      toast.success(data.message || "A new verification code has been sent!");
    },

    onError: (error) => {
      toast.error(
        error.message || "Failed to resend verification code. Please try again.",
      );
    },
  });

  return {verify, isVerifying, email, resendCode, isResending};
}

export default useVerify;
