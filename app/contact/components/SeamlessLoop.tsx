"use client";
import { useGSAP } from "@gsap/react";
import React, { useRef } from "react";
import gsap from "gsap";

export default function SeamlessLoop() {
  const ref = useRef<HTMLDivElement | null>(null);
  useGSAP(
    () => {
      const works = ref.current?.querySelectorAll("p");
      gsap.timeline({ repeat: -1, paused: false }).to(works, {
        x: -(works[0].offsetWidth + 8) * 2,
        duration: 10,
        ease: "none",
      });
    },
    { scope: ref },
  );

  return (
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
  );
}
