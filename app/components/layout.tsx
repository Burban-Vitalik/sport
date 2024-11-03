import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "./sidebar/app-sidebar";
import { cookies } from "next/headers";
import { SIDEBAR_COOKIE_NAME } from "../constants/cookieConstants";

type PropsType = {
  children: React.ReactNode;
};

export default async function Layout({ children }: PropsType) {
  const cookieStore = await cookies();
  const defaultOpen = cookieStore.get(SIDEBAR_COOKIE_NAME)?.value === "true";

  return (
    <SidebarProvider defaultOpen={defaultOpen}>
      <AppSidebar />
      <main>{children}</main>
    </SidebarProvider>
  );
}
