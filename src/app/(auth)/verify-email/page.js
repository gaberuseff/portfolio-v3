import {Suspense} from "react";

import OTPForm from "@/features/auth/OTPForm";

function page() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <Suspense fallback={null}>
        <OTPForm />
      </Suspense>
    </div>
  );
}

export default page;
