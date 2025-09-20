import "server-only";
import { FetchAPIRequestConfig } from "./api";
import AuthAPI from "./auth-api";
import UserAPI from "./user-api";

class GlobalServices {
  public auth: AuthAPI;
  public user: UserAPI;

  constructor(config: FetchAPIRequestConfig) {
    const host = "http://localhost:4000";
    this.auth = new AuthAPI({
      ...config,
      baseUrl: host + "/api/v1/auth",
    });
    this.user = new UserAPI({
      ...config,
      baseUrl: host + "/api/v1/users",
    });
  }
}

const globalServices = new GlobalServices({
  credentials: "include",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    "Accept-Encoding": "*/*",
  },
});

export default globalServices;
