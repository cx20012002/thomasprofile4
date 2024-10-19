"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { PortableText } from "next-sanity";
import { useRef } from "react";

export default function AboutMe({ aboutMe: { smallTitle, richText, lgEnglishTitle, lgText, chineseTitle } }: any) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      if (!containerRef.current) return;

      gsap.fromTo(
        "p",
        { autoAlpha: 0 },
        {
          autoAlpha: 1,
          duration: 1.5,
          stagger: 0.2,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            toggleActions: "play none none reset",
          },
        },
      );
    },
    { scope: containerRef },
  );

  return (
    <div
      ref={containerRef}
      className="content-container flex flex-col items-center justify-center gap-12 py-16 lg:py-32 xl:py-52"
    >
      <div className="w-[320px] text-center text-xs uppercase xl:w-1/5">
        <p className="font-normal">{smallTitle}</p>
        <div>
          <PortableText value={richText} />
        </div>
      </div>
      <div className="text-center font-anton text-[84px] uppercase leading-[1em] lg:text-[180px] xl:text-[240px]">
        <p>{lgEnglishTitle}</p>
      </div>
      <div className="w-full text-center font-instrumentSerif text-[24px] leading-[1.2em] lg:w-3/5 lg:text-[42px] xl:text-[52px]">
        <div>
          <PortableText value={lgText} />
        </div>
      </div>
      <div className="font-anton text-[84px] uppercase leading-[1em] lg:text-[180px] xl:text-[240px]">
        <p>{chineseTitle}</p>
      </div>
    </div>
  );
}
