'use client';

import { usePathname } from "next/navigation";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Header from "./Header";

export default function GlobalHeaderWrapper() {
  gsap.registerPlugin(ScrollTrigger);
  const pathname = usePathname();
  return (
    <>
      {pathname.startsWith("/admin") ? null : pathname === "/contact" ? <Header logoLight /> : <Header />}
    </>
  );
}
