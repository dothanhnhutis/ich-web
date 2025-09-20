import { NextRequest, NextResponse } from "next/server";
// import { ROUTES } from "./constants/routes";
// import { getCurrentUserAction } from "./libs/actions/UserActions";
import globalServices from "./services/global-services";
import { FetchAPIError, FetchAPIResponse } from "./services/api";
import { currentUser } from "./data/user";

export async function middleware(request: NextRequest) {
  const { nextUrl, url } = request;

  const sid = request.cookies.get("sid");
  let user: UserDetail | null = null;
  if (sid) {
    try {
      user = await currentUser();
    } catch (error: unknown) {
      request.cookies.delete("sid");
    }
  }

  console.log(user);

  if (user) {
    if (nextUrl.pathname == "/login") {
      return NextResponse.redirect(new URL("/admin", url));
    }
  } else {
    if (nextUrl.pathname.startsWith("/admin")) {
      const response = NextResponse.redirect(new URL("/login", request.url));
      response.cookies.set("sid", "", { maxAge: 0, path: "/" });
      return response;
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
