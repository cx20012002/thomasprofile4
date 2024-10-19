"use client";

import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { gsap } from "gsap";
import { PortableText } from "next-sanity";

export default function Intro({ sectionText: { smallTitle, richText } }: any) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const textRef1 = useRef<HTMLDivElement | null>(null);
  const textRef2 = useRef<HTMLDivElement | null>(null);

  useGSAP(
    (_, contextSafe) => {
      if (!containerRef.current || !textRef1.current || !textRef2.current) return;

      const mm = gsap.matchMedia();

      const createAnimation = () => {
        mm.add(
          {
            isDesktop: "(min-width: 768px)",
            isMobile: "(max-width: 767px)",
          },
          (context) => {
            let { isDesktop } = context.conditions;

            const tl = gsap.timeline({
              scrollTrigger: {
                trigger: containerRef.current,
                start: `top 80%`,
                end: `bottom center`,
                scrub: 1.2,
              },
            });

            tl.to(textRef1.current, {
              x: -containerRef.current.clientWidth,
              duration: 2,
            });
            tl.to(textRef2.current, { x: containerRef.current.clientWidth, duration: 2 }, "-=1.2");
            isDesktop && tl.to(containerRef.current, { rotate: 6, duration: 1 }, "-=1");
          },
        );
      };

      createAnimation();

      const handleResize = contextSafe(() => {
        mm.revert();
        createAnimation();
      });

      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
        mm.revert();
      };
    },
    { scope: containerRef },
  );

  return (
    <div className="content-container overflow-hidden px-0 pb-20">
      {/* Summary */}
      <div className="w-full">
        <section className="flex flex-col gap-2 px-5 py-[80px] xl:py-[120px]">
          <small className="uppercase">{smallTitle}</small>
          <div className="w-full font-instrumentSans text-lg font-medium leading-6 xl:w-1/4">
            <PortableText value={richText} />
          </div>
        </section>

        <section
          ref={containerRef}
          className="flex rotate-0 flex-col text-nowrap font-anton text-[90px] leading-[1em] md:-rotate-6 md:text-[200px] xl:text-[380px]"
        >
          <div ref={textRef1}>
            <p>KIM WONG • BRAND DESIGNER</p>
          </div>
          <div ref={textRef2} className="relative -left-full flex -translate-x-full gap-10">
            <p>SELECTED WORKS • 2024</p>
            <p>SELECTED WORKS • 2024</p>
          </div>
        </section>
      </div>
    </div>
  );
}
