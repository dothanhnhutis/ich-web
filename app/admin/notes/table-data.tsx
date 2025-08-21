"use client";
import React from "react";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import {
  CheckIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronsLeftIcon,
  ChevronsRightIcon,
  ChevronsUpDown,
  CopyIcon,
  EllipsisVerticalIcon,
  HashIcon,
  MapPinHouseIcon,
  SmartphoneIcon,
  UserIcon,
} from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Command,
  CommandGroup,
  CommandItem,
  CommandList,
} from "@/components/ui/command";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
} from "@/components/ui/pagination";
import { cn } from "@/lib/utils";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import Image from "next/image";
const frameworks = ["10", "20", "30", "40", "50", "All"];
import { format } from "date-fns";
import { vi } from "date-fns/locale";

type Order = {
  id: string;
  recipient: string;
  shippingAddress: string;
  phone: string;
  itemsCount: number;
  status: "PENDING" | "CONFIRMED" | "SHIPPING" | "COMPLETED" | "CANCELED";
  createdAt: string;
  updatedAt: string;
};

const status: Order["status"][] = [
  "PENDING",
  "CONFIRMED",
  "SHIPPING",
  "COMPLETED",
  "CANCELED",
];

const OrderStatus = ({
  status,
  className,
}: {
  status: Order["status"];
  className?: string;
}) => {
  if (status == "PENDING")
    return (
      <p className={cn("font-bold text-amber-500", className)}>{status}</p>
    );

  if (status == "CONFIRMED")
    return <p className={cn("font-bold text-sky-500", className)}>{status}</p>;

  if (status == "SHIPPING")
    return <p className={cn("font-bold text-teal-500", className)}>{status}</p>;

  if (status == "CANCELED")
    return <p className={cn("font-bold text-red-500", className)}>{status}</p>;

  return <p className={cn("font-bold text-green-500", className)}>{status}</p>;
};

const NoteTable = () => {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState<string>("10");
  return (
    <div className="outline-none relative flex flex-col gap-4 overflow-auto @container">
      <div className="overflow-hidden rounded-lg border">
        <div className="relative w-full overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[200px]">Ngày Lập Phiếu</TableHead>
                <TableHead className="text-center w-[130px]">Loại</TableHead>
                <TableHead className="text-center w-[130px]">Bao Bì</TableHead>
                <TableHead className="w-[400px]">Ghi chú</TableHead>
                <TableHead className="text-right w-[50px]"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="w-[200px]">
                  {new Date().toISOString()}
                </TableCell>
                <TableCell className="text-center w-[130px]">Nhập</TableCell>

                <TableCell className="text-center w-[130px]">100</TableCell>
                <TableCell className="truncate w-[400px]">
                  Số 159 Nguyễn Đình Chiểu, Khóm 3, Phường Phú Lợi, TP Cần Thơ
                </TableCell>
                <TableCell className="text-right w-[50px]">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost">
                        <EllipsisVerticalIcon className="w-4 h-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-30" align="start">
                      <DropdownMenuLabel>Hành động</DropdownMenuLabel>
                      <DropdownMenuGroup>
                        <DropdownMenuItem>Sao chép ID</DropdownMenuItem>
                        <DropdownMenuItem>Xem nhanh</DropdownMenuItem>
                        <DropdownMenuItem>Chỉnh sửa</DropdownMenuItem>
                      </DropdownMenuGroup>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem variant="destructive">
                        Xoá
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>

      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline">Open</Button>
        </SheetTrigger>
        {/* <SheetContent>
          <SheetHeader>
            <SheetTitle>Edit profile</SheetTitle>
            <SheetDescription>
              Make changes to your profile here. Click save when you&apos;re
              done.
            </SheetDescription>
          </SheetHeader>
          <div className="grid flex-1 auto-rows-min gap-6 px-4">
            <div className="grid gap-3">
              <Label htmlFor="sheet-demo-name">Name</Label>
              <Input id="sheet-demo-name" defaultValue="Pedro Duarte" />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="sheet-demo-username">Username</Label>
              <Input id="sheet-demo-username" defaultValue="@peduarte" />
            </div>
          </div>
          <SheetFooter>
            <Button type="submit">Save changes</Button>
            <SheetClose asChild>
              <Button variant="outline">Close</Button>
            </SheetClose>
          </SheetFooter>
        </SheetContent> */}

        <SheetContent className="w-full xs:max-w-lg sm:max-w-lg gap-0 h-screen flex flex-col">
          <SheetHeader className="border-b py-1 gap-0">
            <SheetTitle className="flex items-center gap-2 max-w-[calc(100%_-_24px)]">
              <HashIcon className="shrink-0 w-5 h-5" />
              <p className="truncate">
                <span>1s32d132asd1as32d3as21d3s2a13d21as321das31d3as13d1</span>
              </p>
              <CopyIcon className="shrink-0 w-4 h-4" />{" "}
            </SheetTitle>
            <SheetDescription>Chi tiết phiếu bao bì</SheetDescription>
          </SheetHeader>
          <div className="flex flex-col gap-2 p-4 flex-1 overflow-hidden">
            <div className="flex justify-between gap-1">
              <div className="flex flex-col gap-2">
                <Label>Ngày lập phiếu</Label>
                <p>
                  {format(
                    new Date().toISOString(),
                    "EEEE, dd/MM/yy HH:mm:ss 'GMT'XXX",
                    {
                      locale: vi,
                    }
                  )}
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <Label>Loại phiếu</Label>
                <OrderStatus status={"CANCELED"} />
              </div>
            </div>
            <Separator orientation="horizontal" />
            <div className="grid gap-1 w-full">
              <Label>Người lập phiếu</Label>
              <div className="flex gap-2 items-center">
                <UserIcon className="size-4 shrink-0 text-muted-foreground" />
                <p className="text-base lg:text-lg">Nhut</p>
              </div>

              <div className="flex gap-2 items-center">
                <SmartphoneIcon className="size-4 shrink-0 text-muted-foreground" />
                <p className="lg:text-base text-sm ">123456789</p>
              </div>

              <div className="flex gap-2 items-center">
                <MapPinHouseIcon className="size-4 shrink-0 text-muted-foreground" />
                <p className="lg:text-base text-sm"></p>
              </div>
            </div>
            <Separator orientation="horizontal" />
            {false ? (
              <>
                {" "}
                <div>
                  <p className="text-sm">Sản Phẩm</p>
                  <div className="max-h-[calc(100vh_-_421px)] overflow-y-scroll">
                    <table className="min-w-full">
                      <tbody>
                        <tr>
                          <td className="p-2 align-middle">
                            <div className="flex gap-2 ">
                              <Skeleton className="w-16 h-16 rounded-lg shrink-0" />
                              <div className="flex flex-col gap-2 grow">
                                <Skeleton className="h-4 w-40 inline-block" />
                                <Skeleton className="h-3 w-20 inline-block" />
                              </div>
                            </div>
                          </td>
                          <td className="p-2 align-middle whitespace-nowrap text-end">
                            <Skeleton className="h-3 w-10 inline-block" />
                          </td>
                          <td className="p-2 align-middle whitespace-nowrap text-end">
                            <Skeleton className="h-3 w-10 inline-block" />
                          </td>
                        </tr>
                        <tr>
                          <td className="p-2 align-middle">
                            <div className="flex gap-2 ">
                              <Skeleton className="w-16 h-16 rounded-lg shrink-0" />
                              <div className="flex flex-col gap-2 grow">
                                <Skeleton className="h-4 w-40 inline-block" />
                                <Skeleton className="h-3 w-20 inline-block" />
                              </div>
                            </div>
                          </td>
                          <td className="p-2 align-middle whitespace-nowrap text-end">
                            <Skeleton className="h-3 w-10 inline-block" />
                          </td>
                          <td className="p-2 align-middle whitespace-nowrap text-end">
                            <Skeleton className="h-3 w-10 inline-block" />
                          </td>
                        </tr>
                        <tr>
                          <td className="p-2 align-middle">
                            <div className="flex gap-2 ">
                              <Skeleton className="w-16 h-16 rounded-lg shrink-0" />
                              <div className="flex flex-col gap-2 grow">
                                <Skeleton className="h-4 w-40 inline-block" />
                                <Skeleton className="h-3 w-20 inline-block" />
                              </div>
                            </div>
                          </td>
                          <td className="p-2 align-middle whitespace-nowrap text-end">
                            <Skeleton className="h-3 w-10 inline-block" />
                          </td>
                          <td className="p-2 align-middle whitespace-nowrap text-end">
                            <Skeleton className="h-3 w-10 inline-block" />
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <Separator orientation="horizontal" />
                <div className="flex items-center justify-between gap-2">
                  <p>Tổng</p>
                  <Skeleton className="h-3 w-10 inline-block" />
                </div>
              </>
            ) : (
              <>
                <div>
                  <p className="text-sm">Sản Phẩm (2)</p>
                  <div className="max-h-[calc(100vh_-_421px)] overflow-auto">
                    <table className="min-w-full">
                      <tbody>
                        <tr>
                          <td className="p-2 align-middle">
                            <div className="flex gap-2">
                              <div className="w-16 h-16 bg-accent rounded-lg overflow-hidden shrink-0">
                                <Image
                                  src={`/products/product-1.jpg`}
                                  alt={"product.image.filename"}
                                  width={1280}
                                  height={1280}
                                  priority={false}
                                  className="object-contain aspect-square"
                                />
                              </div>
                              <div className="text-start">
                                <p className="text-base font-medium line-clamp-2">
                                  Tên sản phâm
                                </p>
                                <p className="text-xs text-muted-foreground">
                                  Kho hàng A
                                </p>
                              </div>
                            </div>
                          </td>
                          <td className="p-2 align-middle whitespace-nowrap text-end">
                            <p>
                              {new Intl.NumberFormat("de-DE").format(10000)}
                            </p>
                          </td>
                          <td className="p-2 align-middle whitespace-nowrap text-end">
                            <p>
                              {new Intl.NumberFormat("de-DE").format(100000)}
                            </p>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <Separator orientation="horizontal" />
                <div className="flex items-center justify-between gap-2">
                  <p>Tổng</p>
                  <p>{new Intl.NumberFormat("de-DE").format(1000000)}</p>
                </div>
              </>
            )}
          </div>

          <SheetFooter className="flex-row border-t">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="w-1/2">
                  Trạng thái
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="start">
                <DropdownMenuLabel>Trạng thái</DropdownMenuLabel>
                <DropdownMenuGroup>
                  {status.map((status) => (
                    <DropdownMenuItem key={status} className="justify-between">
                      <OrderStatus status={status} />
                      <CheckIcon className="shrink-0 w-4 h-4" />
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>

            <Button type="submit" className="w-1/2">
              Cập nhật
            </Button>
          </SheetFooter>
        </SheetContent>
      </Sheet>
      <div className="flex items-center text-sm">
        <p className="shrink-0 hidden @2xl:block">1 - 10 / 100 Kết quả</p>

        <div className="flex gap-8 items-center justify-between w-full @2xl:ml-auto @2xl:w-auto @2xl:justify-normal">
          <div className="@2xl:flex gap-2 items-center hidden">
            <p className="shrink-0">Hàng trên mỗi trang</p>
            <Popover open={open} onOpenChange={setOpen}>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  role="combobox"
                  aria-expanded={open}
                  className="w-[70px] justify-between"
                >
                  {value
                    ? frameworks.find((framework) => framework === value)
                    : "Select framework..."}
                  <ChevronsUpDown className="opacity-50" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-[70px] p-0">
                <Command>
                  <CommandList>
                    <CommandGroup>
                      {frameworks.map((framework) => (
                        <CommandItem
                          key={framework}
                          value={framework}
                          onSelect={(currentValue) => {
                            setValue(currentValue);
                            setOpen(false);
                          }}
                        >
                          {framework}
                          <CheckIcon
                            className={cn(
                              "ml-auto",
                              value === framework ? "opacity-100" : "opacity-0"
                            )}
                          />
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </CommandList>
                </Command>
              </PopoverContent>
            </Popover>
          </div>

          <p className="@2xl:hidden">Trang 1 / 10</p>

          <div className="flex items-center gap-2 @2xl:hidden">
            <Button disabled variant={"outline"} size={"icon"}>
              <ChevronsLeftIcon className="w-4 h-4" />
            </Button>
            <Button disabled variant={"outline"} size={"icon"}>
              <ChevronLeftIcon className="w-4 h-4" />
            </Button>
            <Button variant={"outline"} size={"icon"}>
              <ChevronRightIcon className="w-4 h-4" />
            </Button>
            <Button variant={"outline"} size={"icon"}>
              <ChevronsRightIcon className="w-4 h-4" />
            </Button>
          </div>
          <Pagination className="w-auto mx-0 hidden @2xl:flex">
            <PaginationContent>
              <PaginationItem>
                <Button disabled variant={"outline"} size={"icon"}>
                  <ChevronLeftIcon className="w-4 h-4" />
                </Button>
              </PaginationItem>
              <PaginationItem>
                <Button variant={"outline"} size={"icon"}>
                  1
                </Button>
              </PaginationItem>
              <PaginationItem>
                <Button variant={"outline"} size={"icon"}>
                  2
                </Button>
              </PaginationItem>
              <PaginationItem>
                <Button variant={"outline"} size={"icon"}>
                  3
                </Button>
              </PaginationItem>
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
              <PaginationItem>
                <Button variant={"outline"} size={"icon"}>
                  7
                </Button>
              </PaginationItem>
              <PaginationItem>
                <Button variant={"outline"} size={"icon"}>
                  <ChevronRightIcon className="w-4 h-4" />
                </Button>
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </div>
    </div>
  );
};

export default NoteTable;
