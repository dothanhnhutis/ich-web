import "server-only";
import { FetchAPIRequestConfig } from "./api";
import AuthAPI from "./auth-api";

class GlobalServices {
  public auth: AuthAPI;

  constructor(config: FetchAPIRequestConfig) {
    const host = "http://localhost:4000";
    this.auth = new AuthAPI({
      ...config,
      baseUrl: host + "/api/v1/auth",
    });
  }
}

export default new GlobalServices({
  credentials: "include",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});
