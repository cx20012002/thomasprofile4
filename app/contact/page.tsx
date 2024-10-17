"use client";

import { contact } from "@/utils/contentStore";
import { horizontalLoop } from "@/utils/seamlessLoop";
import { useGSAP } from "@gsap/react";
import Link from "next/link";
import React, { useRef } from "react";

export default function page() {
  const ref = useRef<HTMLDivElement | null>(null);
  useGSAP(
    () => {
      const works = ref.current?.querySelectorAll("p");
      horizontalLoop(works, { repeat: -1, speed: 0.5 });
    },
    { scope: ref },
  );
  return (
    <div className="flex h-screen w-full bg-[#160059] px-5 pt-32 text-bannerBg md:items-center md:pt-0">
      <div className="flex w-full flex-col gap-12 xl:flex-row xl:gap-32">
        <div className="flex w-full flex-col font-anton text-[84px] uppercase leading-[0.95em] md:items-start md:text-[180px] xl:text-[240px]">
          <div>Let's</div>
          <div className="relative">
            WORK
            <div
              ref={ref}
              className="absolute top-1/2 flex h-8 w-full -translate-y-1/2 items-center overflow-hidden text-nowrap bg-[#c5cc62] font-francoisOne text-[24px] text-black md:w-[140%] xl:h-16 xl:w-[105%]"
            >
              {[...Array(4)].map((_, i) => (
                <p key={i} className="px-4">
                  Available for work
                </p>
              ))}
            </div>
          </div>
          <div>Together</div>
        </div>
        <div className="flex w-full flex-col font-instrumentSerif text-[18px] leading-[1.2em] md:text-[32px]">
          <div className="flex w-full flex-col gap-8 md:w-2/3 xl:w-1/2">
            <div>If you're interested in working together, feel free to send me an email.</div>
            {contact.map((item, i) => (
              <div key={i} className="flex flex-col items-start gap-1 text-[20px] uppercase md:text-[24px]">
                <small className="font-francoisOne text-xs text-[#65979e]">{item.title}</small>
                <Link href={item.link} className="group">
                  {item.content}
                  <span className="block h-[1px] w-0 bg-white transition-all duration-500 ease-in-out group-hover:w-full" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
