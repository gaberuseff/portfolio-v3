"use client";

import * as React from "react";

import {NavMain} from "@/components/nav-main";
import {NavUser} from "@/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import {
  LuLayoutDashboard,
  LuList,
  LuChartBar,
  LuFolder,
  LuUsers,
  LuCamera,
  LuFileText,
  LuCommand,
} from "react-icons/lu";

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Dashboard",
      url: "#",
      icon: <LuLayoutDashboard />,
    },
    {
      title: "Lifecycle",
      url: "#",
      icon: <LuList />,
    },
    {
      title: "Analytics",
      url: "#",
      icon: <LuChartBar />,
    },
    {
      title: "Projects",
      url: "#",
      icon: <LuFolder />,
    },
    {
      title: "Team",
      url: "#",
      icon: <LuUsers />,
    },
  ],
};

export function AdminSidebar({...props}) {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:p-1.5!">
              <a href="#">
                <LuCommand className="size-5!" />
                <span className="text-base font-semibold">Acme Inc.</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
}
