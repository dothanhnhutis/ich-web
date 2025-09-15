"use server";
import { loadCookie } from "@/services/utils";
import globalServices from "@/services/global-services";
import { FetchAPIResponse } from "@/services/api";

export default async function loginAction(input: Login): Promise<LoginAPIRes> {
  const { data, headers } = await globalServices.auth.login(input);
  const rawCookie = headers.get("set-cookie") ?? "";
  await loadCookie(rawCookie);
  return data;
}
