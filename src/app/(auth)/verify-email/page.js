import {Suspense} from "react";

import OTPForm from "@/features/auth/OTPForm";

function page() {
  return (
    <div className="flex h-[calc(100vh-4rem)] w-full items-center justify-center p-6 md:p-10">
      <Suspense fallback={null}>
        <OTPForm />
      </Suspense>
    </div>
  );
}

export default page;
