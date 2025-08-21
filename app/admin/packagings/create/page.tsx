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
import Image from "next/image";

export const metadata: Metadata = {
  title: "Tạo Bao Bì Mới",
  robots: {
    index: false,
    follow: false,
  },
};

const CreatePackagingPage = () => {
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
              <BreadcrumbEllipsis className="size-4" />
            </BreadcrumbItem>
            <BreadcrumbSeparator className="hidden md:block" />{" "}
            <BreadcrumbItem className="hidden md:block">
              <BreadcrumbLink href="/admin/warehouses">Bao Bì</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator className="hidden md:block" />
            <BreadcrumbItem>
              <BreadcrumbPage>Tạo Bao Bì Mới</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </header>
      <div className="flex flex-1 flex-col gap-4 p-4 mx-auto max-w-5xl">
        <h3 className="text-2xl font-bold">Tạo Bao Bì Mới</h3>
        <form>
          <div className="grid gap-6 xs:grid-cols-[200px_1fr]">
            <div className="grid gap-3">
              <Label>Hình ảnh</Label>
              <div className="relative aspect-square xs:max-w-[200px] rounded-md overflow-hidden shrink-0">
                <Image
                  alt="product1"
                  src="/products/product-1.jpg"
                  quality={100}
                  fill
                  sizes="100vw"
                  className="object-cover aspect-square"
                />
              </div>
            </div>
            <div className="grid gap-3">
              <div className="space-y-3">
                <Label>Tên Bao Bì</Label>
                <div>
                  <Input />
                  <p className="text-xs text-muted-foreground">
                    Bao bì sẽ tồn tại ở ở tất cả các kho hàng
                  </p>
                </div>
                <p>
                  Làm thêm tính năng chọn kho hàng. phải chọn ít nhất 1 kho hàng
                </p>
              </div>
            </div>

            {/* <div className="grid gap-3">
              <Label>Mô tả kho hàng</Label>
              <Textarea
                className="min-h-[150px]"
                maxLength={500}
                placeholder="Type your message here."
              />
            </div> */}
            <div className="xs:col-span-2 flex gap-3 flex-col xs:flex-row xs:justify-end">
              {/* <Link
                href="/admin/warehouses"
                className={cn(
                  buttonVariants({
                    variant: "outline",
                    className: " cursor-pointer",
                  })
                )}
              >
                Huỷ
              </Link> */}
              <Button variant={"default"} className="flex-1 xs:flex-initial ">
                Tạo
              </Button>
              <Button variant={"default"} className="flex-1 xs:flex-initial">
                Tạo
              </Button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default CreatePackagingPage;
