"use client";

import { useSidebar } from "@/components/ui/sidebar";
import { ChevronLeft, MenuIcon } from "lucide-react";

export function CustomTrigger() {
  const { toggleSidebar, state } = useSidebar();

  return (
    <button onClick={toggleSidebar}>
      {state === "collapsed" ? <MenuIcon /> : <ChevronLeft />}
    </button>
  );
}
