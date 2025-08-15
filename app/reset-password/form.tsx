"use client";
import z from "zod";
import React from "react";
import Link from "next/link";
import { CheckIcon, LoaderCircleIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import PasswordInput from "@/components/password-input";

const passwordSchema = z
  .string({
    error: (iss) =>
      iss.input == undefined
        ? "Mật khẩu mới là bắt buộc"
        : "Mật khẩu mới phải là chuỗi",
  })
  .min(8, "Mật khẩu mới quá ngắn")
  .max(60, "Mật khẩu mới quá dài")
  .regex(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&_+])[A-Za-z0-9!@#$%^&_+]*$/,
    "Mật khẩu mới phải có ký tự hoa, thường, sô và ký tự đặc biệt"
  );

const ResetPasswordForm = () => {
  const [passwordType, setPasswordType] = React.useState<"text" | "password">(
    "password"
  );
  return (
    <div className="flex flex-col flex-grow mx-auto w-full sm:max-w-[570px] p-4 transition-all">
      <div className="flex flex-col flex-grow space-y-6">
        <h1 className="text-4xl font-semibold tracking-tight text-center mt-4">
          Đặt lại mật khẩu
        </h1>
        {/* <div className="flex flex-col justify-center gap-2">
          <p className="text-green-400 text-center">
            Khôi phục tài khoản thành công.{" "}
          </p>
          <Button asChild className="inline-flex">
            <Link href="/login">Về trang đăng nhập</Link>
          </Button>
        </div> */}

        <>
          <p className="text-muted-foreground text-center text-base">
            Nhập mật khẩu mới và xác nhận mật khẩu để khôi phục lại tài khoản
            của bạn
          </p>
          <form className="flex flex-col gap-y-4 w-full">
            <div className="flex flex-col gap-y-1.5">
              <Label htmlFor="password">Mật khẩu mới</Label>
              <PasswordInput
                id="password"
                name="password"
                autoComplete="off"
                placeholder="********"
                required
                type={passwordType}
                onTypeChange={setPasswordType}
              />

              <div className="flex flex-col gap-y-1 text-xs">
                <p className="font-normal text-muted-foreground">
                  Mật khẩu của bạn phải bao gồm:
                </p>
                <p
                  className={cn(
                    "inline-flex gap-x-2 items-center text-muted-foreground",
                    true ? "" : "text-green-400"
                  )}
                >
                  <CheckIcon size={16} />
                  <span>8 đến 60 ký tự</span>
                </p>
                <p
                  className={cn(
                    "inline-flex gap-x-2 items-center text-muted-foreground",
                    false ? "" : "text-green-400"
                  )}
                >
                  <CheckIcon size={16} />
                  <span>
                    Chữ Hoa, chữ thường, số và ký tự đặc biệt !@#$%^&_+
                  </span>
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-y-1.5">
              <Label htmlFor="confirmPassword">Xác nhận mật khẩu</Label>

              <PasswordInput
                id="confirmPassword"
                name="confirmPassword"
                autoComplete="off"
                placeholder="********"
                required
                type={passwordType}
                onTypeChange={setPasswordType}
              />

              {true ? (
                <p className="text-red-500 text-xs">
                  Xác nhận mật khẩu không đúng.
                </p>
              ) : null}
            </div>
            <Button>
              <LoaderCircleIcon className="h-4 w-4 animate-spin flex-shrink-0 mr-2" />
              Khôi phục
            </Button>
          </form>
        </>
      </div>
    </div>
  );
};

export default ResetPasswordForm;
