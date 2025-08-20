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
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronsLeftIcon,
  ChevronsRightIcon,
  ChevronsUpDown,
  ChevronUpIcon,
  EllipsisVerticalIcon,
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
import Image from "next/image";

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";

const frameworks = ["10", "20", "30", "40", "50", "All"];

const PackagingTable = () => {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState<string>("10");

  return (
    <div className="outline-none relative flex flex-col gap-4 overflow-auto @container">
      <div className="overflow-hidden rounded-lg border">
        <div className="relative w-full overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[70px]"></TableHead>
                <TableHead>Tên Bao Bì</TableHead>
                <TableHead className="text-center w-[130px]">
                  Số lượng
                </TableHead>
                <TableHead className="text-right w-[130px]"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>
                  {/* <Image
                    alt="product1"
                    src="/products/product-2.jpg"
                    width={48}
                    height={48}
                    priority
                    className="w-auto h-auto object-cover aspect-square object-center"
                  /> */}
                  <div className="relative w-[48px] h-[48px]">
                    <Image
                      alt="product1"
                      src="/products/product-1.jpg"
                      quality={100}
                      fill
                      sizes="100vw"
                      className="object-cover aspect-square"
                    />
                  </div>
                </TableCell>
                <TableCell className="font-medium">Hộp Body One Top</TableCell>

                <TableCell className="text-center">
                  <HoverCard openDelay={300}>
                    <HoverCardTrigger>100</HoverCardTrigger>
                    <HoverCardContent
                      className="w-80"
                      align="center"
                      side="right"
                    >
                      <div className="flex justify-between gap-4">
                        <Avatar>
                          <AvatarImage src="https://github.com/vercel.png" />
                          <AvatarFallback>VC</AvatarFallback>
                        </Avatar>
                        <div className="space-y-1">
                          <h4 className="text-sm font-semibold">@nextjs</h4>
                          <p className="text-sm">
                            The React Framework – created and maintained by
                            @vercel.
                          </p>
                          <div className="text-muted-foreground text-xs">
                            Joined December 2021
                          </div>
                        </div>
                      </div>
                    </HoverCardContent>
                  </HoverCard>
                </TableCell>
                <TableCell className="text-right">
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

              <TableRow>
                <TableCell>
                  {/* <Image
                    alt="product1"
                    src="/products/product-2.jpg"
                    width={48}
                    height={48}
                    priority
                    className="w-auto h-auto object-cover aspect-square object-center"
                  /> */}
                  <div className="relative w-[48px] h-[48px]">
                    <Image
                      alt="product1"
                      src="/products/product-1.jpg"
                      quality={100}
                      fill
                      sizes="100vw"
                      className="object-cover aspect-square"
                    />
                  </div>
                </TableCell>
                <TableCell className="font-medium">Hộp Body One Top</TableCell>

                <TableCell className="text-center">100</TableCell>
                <TableCell className="text-right">
                  <Button variant="ghost">
                    <ChevronRightIcon className="w-4 h-4" />
                  </Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium" colSpan={2}>
                  Kho A
                </TableCell>

                <TableCell className="text-center">50</TableCell>
                <TableCell className="text-right">
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
              <TableRow>
                <TableCell className="font-medium" colSpan={2}>
                  Kho A
                </TableCell>

                <TableCell className="text-center">50</TableCell>
                <TableCell className="text-right">
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
      <div className="overflow-hidden">
        <div className="grid relative w-full overflow-x-auto pb-1">
          <div className="grid grid-cols-[70px_minmax(400px,_1fr)_130px_130px] h-10 border-b hover:bg-muted/50">
            <div className="flex flex-1 items-center col-start-2 col-span-1 px-2 h-10 text-sm text-foreground font-medium whitespace-nowrap">
              <p className="align-middle">Tên Bao Bì</p>
            </div>
            <div className="flex items-center justify-center col-span-2 w-[130px] px-2 h-10 text-sm text-foreground font-medium whitespace-nowrap align-middle">
              <p>Số Lượng</p>
            </div>
          </div>

          <div className="grid grid-cols-[70px_minmax(400px,_1fr)_130px_130px] border-b hover:bg-muted/50">
            <div className="p-2">
              <div className="relative w-[48px] h-[48px]">
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
            <div className="text-center text-sm p-2 flex items-center font-bold">
              Hộp Body One Top
            </div>
            <div className="text-center text-sm p-2 flex items-center justify-center">
              100
            </div>
            <div className="text-end p-2 flex items-center justify-end">
              <Button variant="ghost">
                <ChevronUpIcon className="w-4 h-4" />
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-[70px_minmax(400px,_1fr)_130px_130px] border-b hover:bg-muted/50">
            <div className="p-2">
              <div className="relative w-[48px] h-[48px]">
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
            <div className="text-center text-sm p-2 flex items-center font-bold">
              Hộp Body One Top
            </div>
            <div className="text-center text-sm p-2 flex items-center justify-center">
              100
            </div>
            <div className="text-end p-2 flex items-center justify-end">
              <Button variant="ghost">
                <ChevronUpIcon className="w-4 h-4" />
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-[70px_minmax(400px,_1fr)_130px_130px] border-b hover:bg-muted/50 rounded-md border">
            <div className="p-2">
              <div className="relative w-[48px] h-[48px] rounded-md overflow-hidden">
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
            <div className="text-center text-sm p-2 flex items-center font-bold">
              Hộp Body One Top
            </div>
            <div className="text-center text-sm p-2 flex items-center justify-center">
              100
            </div>
            <div className="text-end p-2 flex items-center justify-end">
              <Button variant="ghost">
                <ChevronDownIcon className="w-4 h-4" />
              </Button>
            </div>

            <div className="col-span-full px-2 pb-2 w-full">
              <Separator />
              <div className="flex pt-2 gap-2">
                <div className="relative w-[100px] h-[100px] rounded-md overflow-hidden shrink-0">
                  <Image
                    alt="product1"
                    src="/products/product-1.jpg"
                    quality={100}
                    fill
                    sizes="100vw"
                    className="object-cover aspect-square"
                  />
                </div>
                <div className="flex-1">
                  <p className="font-medium text-sm">Thông tin kho hàng:</p>
                  <div className="grid grid-cols-[minmax(300px,_1fr)_130px_122px]">
                    <div className="flex items-center pl-2">
                      <p>Kho Hàng A</p>
                    </div>
                    <div className="flex items-center justify-center">
                      <p>50</p>
                    </div>
                    <div className="flex items-center justify-end">
                      <Button variant="ghost">
                        <EllipsisVerticalIcon className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                  <div className="grid grid-cols-[minmax(300px,_1fr)_130px_122px]">
                    <div className="flex items-center pl-2">
                      <p>Kho Hàng A</p>
                    </div>
                    <div className="flex items-center justify-center">
                      <p>50</p>
                    </div>
                    <div className="flex items-center justify-end">
                      <Button variant="ghost">
                        <EllipsisVerticalIcon className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>

                  <div className="grid grid-cols-[minmax(300px,_1fr)_130px_122px]">
                    <div className="flex items-center pl-2">
                      <p>Kho Hàng A</p>
                    </div>
                    <div className="flex items-center justify-center">
                      <p>50</p>
                    </div>
                    <div className="flex items-center justify-end">
                      <Button variant="ghost">
                        <EllipsisVerticalIcon className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>

                  <div className="grid grid-cols-[minmax(300px,_1fr)_130px_122px]">
                    <div className="flex items-center pl-2">
                      <p>Kho Hàng A</p>
                    </div>
                    <div className="flex items-center justify-center">
                      <p>50</p>
                    </div>
                    <div className="flex items-center justify-end">
                      <Button variant="ghost">
                        <EllipsisVerticalIcon className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

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

          <p className="@2xl:hidden">Trang 1 trong 10</p>

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

export default PackagingTable;
