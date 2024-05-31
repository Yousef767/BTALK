"use client";

import { usePathname } from "next/navigation";
import { redirect } from "next/navigation";

export default function NotFound() {
  const pathname = usePathname();

  if (pathname.includes("en") || pathname.includes("ar")) {
    return (
      <html>
        <body>
          <h1 className="text-center font-semibold mt-10">
            Something went wrong!
          </h1>
        </body>
      </html>
    );
  } else {
    redirect(`/ar/${pathname}`);
  }
}
