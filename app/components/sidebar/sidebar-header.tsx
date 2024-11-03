import { SidebarHeader, useSidebar } from "@/components/ui/sidebar";
import { CustomTrigger } from "./customTrigger";
import { cn } from "@/lib/utils";

export const CustomSidebarHeader = () => {
  const { state } = useSidebar();

  const position = state === "collapsed" ? "justify-center" : "justify-between";

  return (
    <SidebarHeader>
      <div className={cn("flex flex-wrap-reverse gap-2", position)}>
        <p>Fitness App</p>
        <CustomTrigger />
      </div>
    </SidebarHeader>
  );
};
