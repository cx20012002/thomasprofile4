"use client";

import { useGSAP } from "@gsap/react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { gsap } from "gsap";
import { urlFor } from "@/sanity/lib/image";

export default function WorkCard({
  item: { title, tagline, workImages, slug },
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
      href={`/works/${slug.current}`}
      className={`flex flex-col gap-2 text-[12px] font-thin uppercase ${isLarge && !custom && "xl:col-span-2"} ${className}`}
    >
      <div className="group relative h-[260px] overflow-hidden md:h-[720px]">
        <Image
          src={urlFor(workImages[0]).url() || ""}
          alt="Picture of the author"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="absolute z-20 object-cover transition-opacity duration-300 group-hover:opacity-0"
        />
        <Image
          src={urlFor(workImages[1]).url() || ""}
          alt="Picture of the author"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="absolute z-10 object-cover"
        />
      </div>
      <div className="flex items-center justify-start gap-2">
        <p>{tagline && (tagline as string).split(",")[0]}</p>
        <div className="aspect-square w-[5px] rounded-full bg-primary" />
        <p>{tagline && (tagline as string).split(",")[1]}</p>
      </div>
    </Link>
  );
}
