'use client';

import { horizontalLoop } from "@/utils/seamlessLoop";
import { useGSAP } from "@gsap/react";
import React, { useRef } from "react";

export default function SeamlessLoop() {
  const ref = useRef<HTMLDivElement | null>(null);
  useGSAP(
    () => {
      const works = ref.current?.querySelectorAll("p");
      horizontalLoop(works, { repeat: -1, speed: 0.5 });
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
