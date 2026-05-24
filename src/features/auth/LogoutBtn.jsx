"use client";

import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { Spinner } from "@/components/ui/spinner";
import { LogOutIcon } from "lucide-react";
import useLogout from "./useLogout";

function LogoutBtn() {
  const {logout, isLoggingOut} = useLogout();

  return (
    <div>
      <DropdownMenuItem onClick={logout}>
              <LogOutIcon />
              Log out
              {isLoggingOut && <Spinner className="ml-2" />}
            </DropdownMenuItem>
    </div>
  );
}

export default LogoutBtn;
