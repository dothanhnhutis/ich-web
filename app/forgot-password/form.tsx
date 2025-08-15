"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

import { LoaderCircleIcon, SendIcon } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button, buttonVariants } from "@/components/ui/button";
type RecoverFormProps = {
  email?: string;
};

const RecoverForm = ({ email }: RecoverFormProps) => {
  const [formData, setFormData] = React.useState<string>(email || "");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <div
      className="flex flex-col flex-grow sm:flex-grow-0 sm:grid grid-cols-12 transition-all
  "
    >
      <div className="flex flex-col flex-grow sm:flex-grow-0 sm:col-start-3 sm:col-end-11 mx-auto w-full sm:max-w-[570px] p-4">
        <div className="flex flex-col flex-grow space-y-6">
          <div className="mt-10 mb-6 text-center">
            <div className="inline-flex w-[145px] h-[130px] min-w-[145px] min-h-[130px]">
              <Image
                src={"/mail.svg"}
                alt="mail"
                width={100}
                height={100}
                className="shrink-0 size-auto"
              />
            </div>
          </div>
          <h1 className="text-2xl font-semibold tracking-tight text-center mt-4">
            <span>Lấy lại mật khẩu</span>
          </h1>
          <p className="text-center text-muted-foreground text-base">
            Nhập địa chỉ email tài khoản của bạn và chọn{" "}
            <SendIcon className="inline w-5 h-5 shrink-0 sm:hidden" />
            <strong className="hidden sm:inline">Gửi</strong>
          </p>
          <form onSubmit={handleSubmit}>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>

              <div className="flex items-center justify-between gap-2 pl-3 pr-1 py-1 h-9 w-full rounded-md border border-input shadow-xs group focus-within:border-ring focus-within:ring-[3px] focus-within:ring-ring/50 ">
                <input
                  id="email"
                  type="email"
                  className="w-full outline-none focus-visible:ring-0 bg-transparent dark:bg-input/30 selection:bg-primary"
                  required
                  placeholder="example@gmail.com"
                />

                {false ? (
                  <p className="text-muted-foreground w-9 shrink-0 text-center">
                    1s
                  </p>
                ) : (
                  <button className="cursor-pointer p-2 sm:p-0 text-primary outline-primary">
                    <SendIcon className="w-5 h-5 shrink-0 sm:hidden" />
                    <p className="font-bold text-sm py-2 w-9 hidden sm:block">
                      Gửi
                    </p>
                  </button>
                )}
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RecoverForm;
