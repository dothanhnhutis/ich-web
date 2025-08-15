import React from "react";
import Link from "next/link";
import { Metadata } from "next";

import { cn } from "@/lib/utils";
import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Button, buttonVariants } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Tạo Kho Hàng",
  robots: {
    index: false,
    follow: false,
  },
};

const CreateWarehousePage = () => {
  return (
    <>
      <header className="sticky top-0 right-0 bg-background/10 backdrop-blur-lg flex h-16 shrink-0 items-center gap-2 border-b px-4">
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
              <BreadcrumbEllipsis className="size-4" />
            </BreadcrumbItem>
            <BreadcrumbSeparator className="hidden md:block" />{" "}
            <BreadcrumbItem className="hidden md:block">
              <BreadcrumbLink href="/admin/warehouses">Kho Hàng</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator className="hidden md:block" />
            <BreadcrumbItem>
              <BreadcrumbPage>Tạo Kho Hàng Mới</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </header>
      <div className="flex flex-1 flex-col gap-4 p-4 mx-auto max-w-5xl">
        <h3 className="text-2xl font-bold">Tạo Kho Hàng Mới</h3>
        <form>
          <div className="grid gap-6">
            <div className="grid gap-3">
              <Label>Tên kho hàng</Label>
              <Input />
            </div>
            <div className="grid gap-3">
              <Label>Mô tả kho hàng</Label>
              <Textarea
                className="min-h-[150px]"
                maxLength={500}
                placeholder="Type your message here."
              />
            </div>
            <div className="flex flex-col sm:flex-row justify-end items-center gap-3">
              <Link
                href="/admin/warehouses"
                className={cn(
                  buttonVariants({
                    variant: "outline",
                    className: "w-full sm:w-auto cursor-pointer",
                  })
                )}
              >
                Huỷ
              </Link>
              <Button
                variant={"default"}
                className="w-full sm:w-auto cursor-pointer"
              >
                Tạo
              </Button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default CreateWarehousePage;
