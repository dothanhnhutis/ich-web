"use server";
import globalServices from "@/services/global-services";
import { FetchAPIError, FetchAPIResponse } from "@/services/api";

export default async function logoutAction(): Promise<void> {
  try {
    await globalServices.user.logout();
  } catch (error: unknown) {
    if (error instanceof FetchAPIError) {
      const res = error.response as FetchAPIResponse<LoginAPIRes>;
    }
  }
}
