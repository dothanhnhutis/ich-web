import "server-only";
import { FetchAPI, FetchAPIRequestConfig } from "./api";
import { getHeaders } from "./utils";
import { cookies } from "next/headers";

export default class UserAPI {
  private userInstance: FetchAPI;

  constructor(config: FetchAPIRequestConfig) {
    this.userInstance = FetchAPI.create(config);
  }

  async currentUser() {
    const res = await this.userInstance.get<UserDetailAPIRes>("/me", {
      headers: await getHeaders(),
    });
    return res;
  }
  async logout() {
    await this.userInstance.delete("/logout", {
      headers: await getHeaders(),
    });
    (await cookies()).delete("sid");
  }
}
