import { pageLinks, socialLinks } from "@/utils/contentStore";
import { useGSAP } from "@gsap/react";
import Link from "next/link";
import React, { useRef, useState } from "react";
import gsap from "gsap";

export default function HeaderPopupContent({ setIsModalOpen }: { setIsModalOpen: (value: boolean) => void }) {
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add({ isDesktop: "(min-width: 768px)", isMobile: "(max-width: 767px)" }, (context) => {
        const { isMobile, isDesktop } = context.conditions;
        setIsMobile(isMobile);

        if (isDesktop) {
          gsap.fromTo(
            ".text-fading",
            { opacity: 0 },
            {
              opacity: 1,
              stagger: 0.2,
              duration: 1,
              ease: "power4.out",
              delay: 0.2,
            },
          );
        } else {
          gsap.killTweensOf(".text-fading");
        }
      });
    },
    { scope: containerRef },
  );

  return (
    <div ref={containerRef} className="flex w-full select-none flex-col items-center px-5 pt-[180px] md:px-0">
      <div className="flex w-full flex-col gap-5 md:gap-20 xl:w-[823px]">
        <div className="text-fading flex flex-col gap-4 font-instrumentSerif text-[60px] font-thin uppercase leading-none md:items-center md:gap-3 md:text-[120px]">
          {pageLinks.map((link, index) => (
            <Link onClick={() => setIsModalOpen(false)} href={link.url} className="group overflow-hidden" key={index}>
              {link.name}
              {!isMobile && (
                <div className="h-[2px] w-0 bg-white transition-all duration-500 ease-in-out group-hover:w-full" />
              )}
            </Link>
          ))}
        </div>

        {isMobile ? (
          <div className="grid w-full grid-cols-2 gap-2 text-xs uppercase text-secondary">
            {socialLinks.map((link) => (
              <Link key={link.name} href={link.url}>
                {link.name}
              </Link>
            ))}
          </div>
        ) : (
          <>
            <div className="text-fading flex h-[39px] w-full items-center justify-between gap-[10px] self-center overflow-hidden text-xs uppercase lg:w-[731px]">
              {socialLinks.map((link) => (
                <Link key={link.name} href={link.url} className="group relative h-[18px] w-full">
                  <div className="absolute -bottom-[26px] left-0 flex w-full flex-col gap-[10px] transition-transform duration-300 ease-in-out group-hover:-translate-y-[27px] md:text-center">
                    <p className="">{link.name}</p>
                    <p className="">{link.name}</p>
                  </div>
                </Link>
              ))}
            </div>
            <div className="text-fading flex flex-col gap-2 text-center text-[#ffb1a8]">
              <p className="font-inter text-[40px] font-[400]">陈晓黎</p>
              <p className="font-francoisOne text-xs font-thin uppercase">
                2024© Kim Wong • A Premium Framer template by JP
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
