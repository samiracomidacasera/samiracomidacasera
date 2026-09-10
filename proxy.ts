import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const LOCALES = ["es", "en", "fr"] as const;
type Locale = (typeof LOCALES)[number];

function getPreferredLocale(req: NextRequest): Locale {
  // Check cookie first (set when user manually switches language)
  const cookieLang = req.cookies.get("samira-lang")?.value as Locale;
  if (cookieLang && LOCALES.includes(cookieLang)) return cookieLang;

  // Check Accept-Language header
  const acceptLang = req.headers.get("accept-language") ?? "";
  const preferred = acceptLang.split(",")[0]?.split("-")[0]?.toLowerCase();
  if (preferred === "fr") return "fr";
  if (preferred === "en") return "en";
  return "es"; // default Spanish
}

export function proxy(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Skip Next.js internals, API routes, and static files
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.includes(".")
  ) {
    return NextResponse.next();
  }

  // Check if pathname already starts with a valid locale
  const firstSegment = pathname.split("/")[1];
  const hasLocale = LOCALES.includes(firstSegment as Locale);

  if (hasLocale) {
    // Valid locale URL — allow through
    return NextResponse.next();
  }

  // No locale in URL — redirect to preferred locale
  const locale = getPreferredLocale(req);
  const url = req.nextUrl.clone();
  url.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|.*\\..*).*)"],
};
