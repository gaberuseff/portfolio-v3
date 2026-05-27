"use client";

import { Button } from "@/components/ui/button";
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { LuCirclePlus } from "react-icons/lu";
import Link from "next/link";
import { FaChartLine } from "react-icons/fa6";
import { usePathname } from "next/navigation";

export function NavMain({items}) {
  const pathname = usePathname();

  return (
    <SidebarGroup>
      <SidebarGroupContent className="flex flex-col gap-2">
        <SidebarMenu>
          <SidebarMenuItem className="flex items-center gap-2">
            <SidebarMenuButton
              tooltip="Track Progress"
              className="min-w-8 bg-primary text-primary-foreground duration-200 ease-linear hover:bg-primary/90 hover:text-primary-foreground active:bg-primary/90 active:text-primary-foreground">
              <LuCirclePlus />
              <span>Track Progress</span>
            </SidebarMenuButton>
            <Button
              size="icon"
              className="size-8 group-data-[collapsible=icon]:opacity-0"
              variant="outline">
              <FaChartLine />
              <span className="sr-only">Track Progress</span>
            </Button>
          </SidebarMenuItem>
        </SidebarMenu>
        <SidebarMenu className='space-y-1'>
          {items.map((item) => {
            const isActive = pathname === item.url || (item.url !== "/" && pathname.startsWith(item.url));
            return (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton 
                  asChild 
                  tooltip={item.title}
                  isActive={isActive}
                  className={isActive ? "bg-primary/10! text-primary! font-semibold border-l-3 border-primary rounded-l-none pl-2.5! transition-all duration-200" : "hover:text-primary/90 transition-all duration-200"}
                >
                  <Link href={item.url}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            );
          })}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}
