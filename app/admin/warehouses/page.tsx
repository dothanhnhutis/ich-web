import React from "react";
import { Metadata } from "next";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";

import WarehouseTable from "./table-data";
import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Kho Hàng",
  robots: {
    index: false,
    follow: false,
  },
};

const WarehousePage = () => {
  return (
    <>
      <header className="sticky top-0 right-0 z-50 bg-background/10 backdrop-blur-lg flex h-16 shrink-0 items-center gap-2 border-b px-4">
        <SidebarTrigger className="-ml-1" />
        <Separator
          orientation="vertical"
          className="mr-2 data-[orientation=vertical]:h-4"
        />
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem className="hidden md:block">
              <BreadcrumbLink href="/admin">Chức Năng Chính</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator className="hidden md:block" />
            <BreadcrumbItem className="hidden md:block">
              <BreadcrumbPage className="text-muted-foreground">
                Trung Tâm Kho Hàng
              </BreadcrumbPage>
            </BreadcrumbItem>
            <BreadcrumbSeparator className="hidden md:block" />
            <BreadcrumbItem>
              <BreadcrumbPage>Kho Hàng</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </header>
      <div className="w-full overflow-hidden">
        <div className="flex flex-col gap-4 p-4 mx-auto max-w-5xl ">
          <div className="flex items-center gap-2 justify-between">
            <h3 className="text-2xl font-bold shrink-0">Quản Lý Kho Hàng </h3>
            <Link
              href="/admin/warehouses/create"
              className={cn(buttonVariants({ variant: "default" }))}
            >
              Tạo kho hàng mới
            </Link>
          </div>

          <WarehouseTable />
        </div>
      </div>
    </>
  );
};

export default WarehousePage;
