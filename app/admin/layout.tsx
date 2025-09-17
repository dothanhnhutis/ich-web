import React from "react";
import { redirect } from "next/navigation";

import { currentUser } from "@/data/user";
import { AdminSidebar } from "./admin-sidebar";
import { UserProvider } from "@/components/user-context";
import { ThemeProvider } from "@/components/theme-provider";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

const AdminLayout = async ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const user = await currentUser();
  if (!user) redirect("/login");

  return (
    <UserProvider user={user}>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <SidebarProvider>
          <AdminSidebar />
          <SidebarInset className="block w-[calc(100%_-_var(--sidebar-width))]">
            {children}
          </SidebarInset>
        </SidebarProvider>
      </ThemeProvider>
    </UserProvider>
  );
};

export default AdminLayout;
