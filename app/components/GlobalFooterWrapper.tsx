"use client";

import { usePathname } from "next/navigation";
import Footer from "./Footer";

export default function GlobalFooterWrapper() {
  const pathname = usePathname();

  return (
    <>
      {pathname === "/" || pathname === "/contact" ? null : pathname.startsWith("/works") ? (
        <Footer bgColor="#f2f2f2" />
      ) : (
        <Footer />
      )}
    </>
  );
}
