"use client";

import {
  ChevronRight,
  LayoutDashboardIcon,
  ShieldUserIcon,
  WarehouseIcon,
  type LucideIcon,
} from "lucide-react";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import Link from "next/link";
import { useUser } from "@/components/user-context";
import { useParams, useRouter, usePathname } from "next/navigation";

type NavItem =
  | {
      title: string;
      url: string;
      icon: LucideIcon;
      activeRegex: RegExp;
      permission: string;
    }
  | {
      title: string;
      icon: LucideIcon;
      activeRegex: RegExp;
      items: {
        title: string;
        url: string;
        activeRegex: RegExp;
        permission: string;
      }[];
    };

const navItems: NavItem[] = [
  {
    title: "Trung tâm kho hàng",
    icon: LayoutDashboardIcon,
    activeRegex: /^\/admin$/,
    url: "/admin",
    permission: "admin",
  },
  {
    title: "Người dùng & Quyền",
    icon: ShieldUserIcon,
    activeRegex: /^\/admin\/(?:users|roles)(?:[0-9a-zA-Z\/\-])*?$/,
    items: [
      {
        title: "Người dùng",
        url: "/admin/users",
        activeRegex: /^\/admin\/users(?:[0-9a-zA-Z\/\-])*?$/,
        permission: "read:user:*",
      },
      {
        title: "Vai Trò",
        url: "/admin/roles",
        activeRegex: /^\/admin\/roles(?:[0-9a-zA-Z\/\-])*?$/,
        permission: "read:role:*",
      },
    ],
  },
  {
    title: "Trung tâm kho hàng",
    icon: WarehouseIcon,
    activeRegex:
      /^\/admin\/(?:warehouses|packagings|note)(?:[0-9a-zA-Z\/\-])*?$/,
    items: [
      {
        title: "Kho Hàng",
        url: "/admin/warehouses",
        activeRegex: /^\/admin\/warehouses(?:[0-9a-zA-Z\/\-])*?$/,
        permission: "read:warehouse:*",
      },
      {
        title: "Bao Bì",
        url: "/admin/packagings",
        activeRegex: /^\/admin\/packagings(?:[0-9a-zA-Z\/\-])*?$/,
        permission: "read:packaging:*",
      },
      {
        title: "Nguyên Liệu",
        url: "/admin/packagings",
        activeRegex: /^\/admin\/packagings(?:[0-9a-zA-Z\/\-])*?$/,
        permission: "read:packaging:*",
      },
      {
        title: "Thành Phẩm",
        url: "/admin/packagings",
        activeRegex: /^\/admin\/packagings(?:[0-9a-zA-Z\/\-])*?$/,
        permission: "read:packaging:*",
      },
      {
        title: "Phiếu",
        url: "/admin/notes",
        activeRegex: /^\/admin\/notes(?:[0-9a-zA-Z\/\-])*?$/,
        permission: "read:note:*",
      },
    ],
  },
];

function filterMenu(menu: NavItem[], permissions: string[]): NavItem[] {
  return menu
    .map((item) => {
      // Nếu có items con → lọc tiếp
      if ("items" in item) {
        const filteredItems = item.items.filter((sub) =>
          permissions.includes(sub.permission)
        );
        return filteredItems.length > 0
          ? { ...item, items: filteredItems }
          : null;
      }
      // Nếu là item trực tiếp → check permission (nếu có)
      if (permissions.includes(item.permission)) {
        return item;
      }
      return null;
    })
    .filter((i) => i !== null);
}

export function NavMain() {
  const pathname = usePathname();
  const { permissions } = useUser();

  return (
    <SidebarGroup>
      <SidebarGroupLabel>Chức năng chính</SidebarGroupLabel>
      <SidebarMenu>
        {filterMenu(navItems, permissions).map((i, index) =>
          "items" in i ? (
            <Collapsible
              key={index}
              asChild
              defaultOpen={i.activeRegex.test(pathname)}
              className="group/collapsible"
            >
              <SidebarMenuItem>
                <CollapsibleTrigger asChild>
                  <SidebarMenuButton
                    isActive={i.activeRegex.test(pathname)}
                    tooltip={i.title}
                  >
                    <i.icon />
                    <span>{i.title}</span>
                    <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                  </SidebarMenuButton>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <SidebarMenuSub>
                    {i.items.map((ii, idx) => (
                      <SidebarMenuSubItem key={idx}>
                        <SidebarMenuSubButton
                          asChild
                          isActive={ii.activeRegex.test(pathname)}
                        >
                          <Link href={ii.url}>
                            <span>{ii.title}</span>
                          </Link>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    ))}
                  </SidebarMenuSub>
                </CollapsibleContent>
              </SidebarMenuItem>
            </Collapsible>
          ) : (
            <SidebarMenuItem key={index}>
              <SidebarMenuButton
                asChild
                isActive={i.activeRegex.test(pathname)}
              >
                <Link href={i.url}>
                  <i.icon />
                  <span>{i.title}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          )
        )}
      </SidebarMenu>
    </SidebarGroup>
  );
}
