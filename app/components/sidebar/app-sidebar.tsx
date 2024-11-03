"use client";

import { Sidebar, SidebarSeparator } from "@/components/ui/sidebar";
import {
  CustomSidebarFooter,
  CustomSidebarHeader,
  CustomSidebarMenu,
} from "./index";

export function AppSidebar() {
  return (
    <Sidebar side="left" variant="floating" collapsible="icon">
      <CustomSidebarHeader />
      <SidebarSeparator />
      <CustomSidebarMenu />
      <SidebarSeparator />
      <CustomSidebarFooter />
    </Sidebar>
  );
}
