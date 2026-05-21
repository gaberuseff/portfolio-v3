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

  return {verify, isVerifying, email};
}

export default useVerify;
