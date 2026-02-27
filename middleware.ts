import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const LOCALE_COOKIE = "NEXT_LOCALE";
const VALID_LOCALES = ["en", "ar"] as const;

export function middleware(request: NextRequest) {
  const localeCookie = request.cookies.get(LOCALE_COOKIE)?.value;
  const locale =
    localeCookie && VALID_LOCALES.includes(localeCookie as (typeof VALID_LOCALES)[number])
      ? localeCookie
      : "en";

  const response = NextResponse.next();
  response.headers.set("x-next-locale", locale);
  return response;
}
