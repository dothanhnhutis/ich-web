import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";

import { LoginForm } from "./login-form";
import Logo from "@/components/logo";

export const metadata: Metadata = {
  title: "Đăng Nhập",
  robots: {
    index: false,
    follow: false,
  },
};

const LoginPage = () => {
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-4 ">
        <div className="hidden lg:flex justify-center gap-2 md:justify-start">
          <Link
            href="#"
            className="flex items-center gap-2 font-medium px-3 py-1"
          >
            <Logo
              type="rectangle"
              width={200}
              height={60}
              className="aspect-[10/3] shrink-0"
            />
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-center lg:p-0 py-10 px-2">
          <div className="flex flex-col gap-4 w-full max-w-xs">
            <Link
              href="#"
              className="flex lg:hidden items-center justify-center gap-2 font-medium px-3 py-1"
            >
              <Logo
                type="rectangle"
                width={250}
                height={75}
                className="aspect-[10/3] shrink-0"
              />
            </Link>
            <LoginForm />
            <div className="text-muted-foreground *:[a]:hover:text-primary text-center text-xs text-balance *:[a]:underline *:[a]:underline-offset-4">
              By clicking continue, you agree to our{" "}
              <a href="#">Terms of Service</a> and{" "}
              <a href="#">Privacy Policy</a>.
            </div>
          </div>
        </div>
      </div>
      <div className="bg-muted relative hidden lg:block">
        <img
          src="/images/landscape.webp"
          alt="Image"
          className="absolute inset-0 h-full w-full object-cover object-right dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </div>
  );
};

export default LoginPage;
