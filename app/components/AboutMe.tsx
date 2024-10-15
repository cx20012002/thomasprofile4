"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

export default function AboutMe() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      if (!containerRef.current) return;

      gsap.fromTo(
        "p",
        { autoAlpha: 0 },
        {
          autoAlpha: 1,
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
        <p className="font-normal">关于我自己的故事</p>
        <p>Kim Wong is a visionary designer who bridges cultures through her innovative design philosophy</p>
      </div>
      <div className="font-anton text-center text-[84px] uppercase leading-[1em] lg:text-[180px] xl:text-[240px]">
        <p>Kim Wong</p>
      </div>
      <div className="font-instrumentSerif w-full text-center text-[24px] leading-[1.2em] lg:w-3/5 lg:text-[42px] xl:text-[52px]">
        <p>
          Kim Wong is a visionary designer with a passion for exploring the intersections of art and technology. Outside
          the studio, she finds joy in hiking, experimenting with digital art, and diving into the world of sci-fi
          literature
        </p>
      </div>
      <div className="font-anton text-[84px] uppercase leading-[1em] lg:text-[180px] xl:text-[240px]">
        <p>你好</p>
      </div>
    </div>
  );
}
