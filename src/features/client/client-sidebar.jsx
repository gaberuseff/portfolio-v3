import { NavMain } from "@/components/nav-main";
import { NavUser } from "@/components/nav-user";
import { NavSecondary } from "@/components/NavSecondary";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { auth } from "@/lib/auth";
import {
  LuFolderClosed,
  LuMessageCircleHeart,
  LuReceipt,
  LuSettings
} from "react-icons/lu";
import Image from "next/image";
import Link from "next/link";

const data = {
  navMain: [
    {
      title: "Projects",
      url: "/projects",
      icon: <LuFolderClosed />,
    },
    {
      title: "Billings",
      url: "/billings",
      icon: <LuReceipt />,
    }
  ],
  navSecondary: [
    {
      title: "Settings",
      url: "/settings",
      icon: <LuSettings />,
    },
    {
      title: "Help",
      url: "/help",
      icon: <LuMessageCircleHeart />,
    },
  ],
};

export async function ClientSidebar({...props}) {
  const session = await auth();
  const user = session?.user;

  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:p-1.5!">
              <Link href="/" className="flex items-center gap-2">
                <Image src='/logo.png' alt="logo" width={30} height={30} />
                <span className="text-base font-semibold">Gaber Usef.</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={user} />
      </SidebarFooter>
    </Sidebar>
  );
}
