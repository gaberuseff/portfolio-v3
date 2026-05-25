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
  CommandIcon,
  FolderClosed,
  ListIcon,
  MessageCircleHeart,
  Receipt,
  Settings
} from "lucide-react";

const data = {
  navMain: [
    {
      title: "Projects",
      url: "/projects",
      icon: <FolderClosed />,
    },
    {
      title: "Billings",
      url: "/billings",
      icon: <Receipt />,
    },
    {
      title: "login",
      url: "/login",
      icon: <ListIcon />,
    },
  ],
  navSecondary: [
    {
      title: "Settings",
      url: "/settings",
      icon: <Settings />,
    },
    {
      title: "Get Contact",
      url: "/contact",
      icon: <MessageCircleHeart />,
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
              <div>
                <CommandIcon className="size-5!" />
                <span className="text-base font-semibold">Gaber Usef.</span>
              </div>
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
