"use server";
import { loadCookie } from "@/services/utils";
import globalServices from "@/services/global-services";
import { FetchAPIError, FetchAPIResponse } from "@/services/api";

export default async function loginAction(input: Login): Promise<LoginAPIRes> {
  try {
    const { data, headers } = await globalServices.auth.login(input);
    const rawCookie = headers.get("set-cookie") ?? "";
    await loadCookie(rawCookie);
    return data;
  } catch (error: unknown) {
    if (error instanceof FetchAPIError) {
      const res = error.response as FetchAPIResponse<LoginAPIRes>;
      return res.data;
    }
    return {
      statusCode: 400,
      statusText: "BAD_REQUEST",
      data: {
        message: "Email và mật khẩu không hợp lệ.",
      },
    };
  }
}
