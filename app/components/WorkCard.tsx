"use client";

import { useGSAP } from "@gsap/react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { gsap } from "gsap";

export default function WorkCard({
  item,
  isLarge = false,
  className,
  custom = false,
}: {
  item: any;
  isLarge?: boolean;
  className?: string;
  custom?: boolean;
}) {
  const containerRef = useRef<HTMLAnchorElement | null>(null);
  useGSAP(
    () => {
      if (!containerRef.current) return;
      const imgs = containerRef.current.querySelectorAll("img");

      imgs.forEach((img) => {
        gsap.to(img, {
          scale: 1.2,
          scrollTrigger: {
            trigger: img,
            start: "top center",
            end: "bottom center",
            scrub: 1,
          },
        });
      });
    },
    { scope: containerRef },
  );

  return (
    <Link
      ref={containerRef}
      href="#"
      className={`flex flex-col gap-2 text-[12px] font-thin uppercase ${isLarge && !custom && "xl:col-span-2"} ${className}`}
    >
      <div className="group relative h-[260px] overflow-hidden md:h-[720px]">
        <Image
          src={item.src}
          alt="Picture of the author"
          width={613}
          height={720}
          className="absolute z-20 h-full w-full object-cover transition-opacity duration-300 group-hover:opacity-0"
        />
        <Image
          src={item.src2}
          alt="Picture of the author"
          width={613}
          height={720}
          className="absolute z-10 h-full w-full object-cover"
        />
      </div>
      <div className="flex items-center justify-start gap-2">
        <p>{item.title1}</p>
        <div className="bg-primary aspect-square w-[5px] rounded-full" />
        <p>{item.title2}</p>
      </div>
    </Link>
  );
}
