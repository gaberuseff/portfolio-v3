"use client";

import {Button} from "@/components/ui/button";
import useLogout from "./useLogout";
import {Spinner} from "@/components/ui/spinner";

function LogoutBtn() {
  const {logout, isLoggingOut} = useLogout();

  return (
    <div>
      <Button onClick={logout} disabled={isLoggingOut}>
        Logout
        {isLoggingOut && <Spinner className="ml-2" />}
      </Button>
    </div>
  );
}

export default LogoutBtn;
