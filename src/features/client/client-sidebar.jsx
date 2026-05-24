"use client";

import {NavMain} from "@/components/nav-main";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import {CommandIcon, LayoutDashboardIcon, ListIcon} from "lucide-react";

const data = {
  navMain: [
    {
      title: "Projects",
      url: "/projects",
      icon: <LayoutDashboardIcon />,
    },
    {
      title: "Billings",
      url: "/billings",
      icon: <ListIcon />,
    },
  ],
};

export function ClientSidebar({...props}) {
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
      </SidebarContent>
      <SidebarFooter>{/* <NavUser user={data.user} /> */}</SidebarFooter>
    </Sidebar>
  );
}
