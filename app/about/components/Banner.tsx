"use client";

import { useGSAP } from "@gsap/react";
import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";

export default function Banner() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      if (!containerRef.current) return;

      const animateImages = containerRef.current.querySelectorAll(".animate-image");

      const mm = gsap.matchMedia();

      mm.add(
        {
          isDesktop: "(min-width:1281px)",
          largeDevice: "(min-width: 768px)",
          isMobile: "(max-width: 767px)",
        },
        (context) => {
          const { isDesktop, largeDevice, isMobile } = context.conditions;

          if (isMobile) {
            gsap.set(animateImages, { width: 280, height: 280, rotate: 0 });
            return;
          }

          if (largeDevice) {
            gsap.set(animateImages, { width: 380, height: 380, rotate: 0 });
          }

          if (isDesktop) {
            gsap.set(animateImages, { width: 500, height: 500, rotate: 0 });
          }

          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top top",
              end: "bottom center",
              scrub: 1.2,
            },
          });

          tl.to(animateImages[0], { scale: 0.8, rotate: 10, x: 380, y: 70, duration: 1 });
          tl.to(animateImages[1], { scale: 0.8, rotate: -10, x: -380, y: -70, duration: 1 }, "<");
          tl.to(animateImages[2], { scale: 0.8, duration: 1 }, "<");
        },
      );
    },
    { scope: containerRef },
  );

  return (
    <section
      ref={containerRef}
      className="relative flex flex-col items-center justify-center gap-12 overflow-hidden pt-24 lg:pt-28 xl:pt-32"
    >
      <div className="text-center font-anton text-[120px] uppercase leading-[0.9em] lg:text-[200px] xl:text-[380px]">
        Kim <br /> wong
      </div>
      <div className="relative bottom-5 flex h-[300px] w-[500px] justify-center md:bottom-10 md:h-[450px] xl:bottom-40">
        {[...Array(3)].map((_, index) => (
          <div
            key={index}
            className="animate-image absolute left-1/2 h-[500px] w-[500px] -translate-x-1/2 overflow-hidden"
          >
            <Image
              src={`/about-banner-${index + 1}.avif`}
              alt="Profile Image"
              fill
              className="h-full w-full object-cover"
              sizes="(min-width: 1281px) 500px, (min-width: 768px) 380px, 280px"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
