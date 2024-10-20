"use client";

import { useGSAP } from "@gsap/react";
import Image from "next/image";
import gsap from "gsap";
import { useRef } from "react";

export default function Intro({ aboutText }: any) {
  const [first, second] = aboutText[1].split(",");

  const containerRef = useRef<HTMLDivElement | null>(null);
  useGSAP(
    () => {
      gsap.from(containerRef.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
        autoAlpha: 0,
        y: 200,
        duration: 0.5,
      });
    },
    { scope: containerRef },
  );
  return (
    <section
      ref={containerRef}
      className="flex flex-col items-center gap-[62px] px-5 pb-[60px] text-center lg:pb-[120px] xl:pb-[220px]"
    >
      <p className="font-anton text-[84px] uppercase leading-[0.9em] lg:text-[180px] xl:text-[240px]">
        {first} <br /> {second}
      </p>
      <p className="text-xs">{aboutText[2]}</p>
      <p className="font-instrumentSerif text-[24px] leading-[1.3em] lg:w-full lg:text-[42px] xl:w-[840px] xl:text-[52px]">
        {aboutText[3]}
      </p>
      <div>
        <Image src={"/signature.svg"} alt="Signature" height={140} width={234} className="h-[140px] w-[234px]" />
      </div>
    </section>
  );
}
