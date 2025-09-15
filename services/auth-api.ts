import "server-only";
import { FetchAPI, FetchAPIRequestConfig } from "./api";
import { getHeaders } from "./utils";

export default class AuthAPI {
  private authInstance: FetchAPI;

  constructor(config: FetchAPIRequestConfig) {
    this.authInstance = FetchAPI.create(config);
  }

  async login(input: Login) {
    return await this.authInstance.post<LoginAPIRes>("/signin", input, {
      headers: await getHeaders(),
    });
  }
}
