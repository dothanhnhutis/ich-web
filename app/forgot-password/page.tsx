import React from "react";
import { Metadata } from "next";

import RecoverForm from "./form";
import Logo from "@/components/logo";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Quên Mật Khẩu",
  robots: {
    index: false,
    follow: false,
  },
};

const ForgotPasswordPage = () => {
  return (
    <div className="mx-auto max-w-7xl min-h-svh">
      <div className="flex gap-4 items-center justify-between px-3 py-1">
        <Link href={"/"} className="shrink-0">
          <Logo />
        </Link>

        <p className="text-muted-foreground text-sm">
          Đã lấy lại mật khẩu?{" "}
          <Link href="/login" className="underline">
            Đăng nhập
          </Link>
        </p>
      </div>
      <RecoverForm />
    </div>
  );
};

export default ForgotPasswordPage;
