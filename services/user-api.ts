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
    return await this.userInstance.get<UserDetail>("/me", {
      headers: await getHeaders(),
    });
  }
  async logout() {
    await this.userInstance.delete("/logout", {
      headers: await getHeaders(),
    });
    (await cookies()).delete("sid");
  }
}
