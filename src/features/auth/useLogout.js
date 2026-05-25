"use client";

import {logoutServerAction} from "@/actions/auth";
import {useMutation, useQueryClient} from "@tanstack/react-query";
import {useRouter} from "next/navigation";
import toast from "react-hot-toast";

function useLogout() {
  const queryClient = useQueryClient();
  const router = useRouter();

  const {mutate: logout, isPending: isLoggingOut} = useMutation({
    mutationFn: async () => {
      const result = await logoutServerAction();
      if (result?.error) {
        throw new Error(result.error);
      }
      return result;
    },
    onSuccess: () => {
      queryClient.clear();
      router.push("/login");
      router.refresh();
      toast.success("Logged out successfully.");
    },
    onError: (error) => {
      toast.error(error.message || "Logout failed. Please try again.");
    },
  });

  return {logout, isLoggingOut};
}

export default useLogout;
