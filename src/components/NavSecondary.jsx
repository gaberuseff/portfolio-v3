"use client";

import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Link from "next/link";

import { usePathname } from "next/navigation";

export function NavSecondary({items, ...props}) {
  const pathname = usePathname();

  return (
    <SidebarGroup {...props}>
      <SidebarGroupContent>
        <SidebarMenu>
          {items.map((item) => {
            const isActive = pathname === item.url || (item.url !== "/" && pathname.startsWith(item.url));
            return (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton 
                  asChild
                  isActive={isActive}
                  className={isActive ? "bg-primary/10! text-primary! font-semibold border-l-3 border-primary rounded-l-none pl-2.5! transition-all duration-200" : "hover:text-primary/90 transition-all duration-200"}
                >
                  <Link href={item.url}>
                    {item.icon ? (
                      typeof item.icon === "function" ? (
                        <item.icon />
                      ) : (
                        item.icon
                      )
                    ) : null}
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
