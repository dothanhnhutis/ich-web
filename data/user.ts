import "server-only";
import { cache } from "react";
import globalServices from "@/services/global-services";

export const currentUser = cache(async (): Promise<UserDetail | null> => {
  try {
    const { data: resData } = await globalServices.user.currentUser();
    console.log("console.log(resData);", resData);
    return resData.data.currentUser;
  } catch (error: unknown) {
    return null;
  }
});
