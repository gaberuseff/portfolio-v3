"use client";

import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {Toaster} from "react-hot-toast";

export default function Providers({children}) {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <Toaster
        position="bottom-right"
        toastOptions={{
          className: "bg-white text-black dark:bg-gray-800 dark:text-white",
          duration: 5000,
          removeDelay: 1000,
        }}
      />
    </QueryClientProvider>
  );
}
