import React from "react";
import { Metadata } from "next";

import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Tạo Người Dùng",
  robots: {
    index: false,
    follow: false,
  },
};

const CreateNewUserPage = () => {
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
              <BreadcrumbLink href="/admin/warehouses">
                Người dùng & Quyền
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator className="hidden md:block" />
            <BreadcrumbItem>
              <BreadcrumbPage>Tạo Người Dùng Mới</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </header>
      <div className="flex flex-1 flex-col gap-4 p-4 mx-auto max-w-3xl">
        <h3 className="text-2xl font-bold">Tạo Người Dùng Mới</h3>
        <form>
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="grid gap-3">
              <Label htmlFor="email">Email</Label>
              <Input type="email" id="email" name="email" />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="username">Họ và tên</Label>
              <Input type="username" id="username" name="username" />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="username">Mật khẩu</Label>
              <Input type="username" id="username" name="username" />

              <div>
                <p>Mật khẩu phải bao gồm:</p>
                <ul className="list-inside list-disc text-sm">
                  <li>Check your card details</li>
                  <li>Ensure sufficient funds</li>
                  <li>Verify billing address</li>
                </ul>
              </div>
            </div>
            <div className="grid gap-3">
              <Label>Vai trò</Label>
              <p>
                làm tính năng thêm bao bì khi tạo kho. có thể chọn hoặc không
              </p>
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

export default CreateNewUserPage;
