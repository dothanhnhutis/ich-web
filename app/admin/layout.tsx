import React from "react";
import { ThemeProvider } from "@/components/theme-provider";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { AdminSidebar } from "./admin-sidebar";

const AdminLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <SidebarProvider>
        <AdminSidebar />
        <SidebarInset className="block overflow-x-hidden">
          {children}
        </SidebarInset>
      </SidebarProvider>
    </ThemeProvider>
  );
};

export default AdminLayout;
