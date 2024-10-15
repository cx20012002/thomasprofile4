"use client";

import { useGSAP } from "@gsap/react";
import { useRef, useState } from "react";
import MouseCursorComponent from "./MouseCursorComponent";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";

export default function Banner() {
  gsap.registerPlugin(ScrollTrigger);

  const bannerContainer = useRef<HTMLDivElement | null>(null);
  const imgRef = useRef<HTMLDivElement | null>(null);

  // List of images
  const images = [
    { src: "/hb_0.avif", alt: "Home Banner 0" },
    { src: "/hb_1.avif", alt: "Home Banner 1" },
    { src: "/hb_2.avif", alt: "Home Banner 2" },
  ];

  const [visibleImages, setVisibleImages] = useState(images);

  function imgClick(index: number) {
    if (visibleImages.length === 1) {
      setVisibleImages(images);
    } else {
      setVisibleImages((prev) => prev.filter((_, i) => i !== index));
    }
  }

  useGSAP(
    () => {
      if (!bannerContainer.current) return;

      const elements = bannerContainer.current.querySelectorAll(".animated-item");
      const mm = gsap.matchMedia();

      mm.add(
        {
          isDesktop: "(min-width: 768px)",
          isMobile: "(max-width: 767px)",
        },
        () => {
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: bannerContainer.current,
              start: "top top",
              end: "bottom bottom",
              scrub: 1.5,
            },
          });

          elements.forEach((el, index) => {
            tl.to(el, { y: index === 0 ? -el.clientHeight + 40 : el.clientHeight - 40 }, 0);
          });

          tl.fromTo(imgRef.current, { scale: 1.2 }, { scale: 1 }, 0);
        },
      );
      // clean up
      return () => mm.revert();
    },
    { scope: bannerContainer },
  );

  return (
    <div ref={bannerContainer} className="relative flex h-[500vh] flex-col items-center justify-between">
      <div className="sticky top-0 flex h-screen w-full flex-col overflow-hidden">
        {/* Banner Top */}
        <div className="animated-item bg-bannerBg relative z-10 h-1/2 w-full overflow-hidden">
          <Image
            src={"/home_banner_bgword.svg"}
            alt="Home Banner Background Word"
            width={700}
            height={410}
            className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 scale-75 md:scale-100"
          />
        </div>
        {/* Banner Bottom */}
        <div className="animated-item bg-bannerBg relative z-10 flex h-1/2 w-full items-end overflow-auto">
          <Image
            src={"/home_banner_bgword.svg"}
            alt="Home Banner Background Word"
            width={700}
            height={410}
            className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 scale-75 md:scale-100"
          />
          {/* Banner Footer */}
          <div className="flex w-full justify-between gap-20 px-5 py-12 text-xs font-medium uppercase xl:px-8">
            <div>Instagram</div>
            <div className="text-center">
              <p className="font-normal">陈晓黎</p>
              <p>Kim Wong is a visionary designer who bridges </p>
              <p>cultures through her innovative design philosophy</p>
            </div>
            <div>Email</div>
          </div>
        </div>
        <MouseCursorComponent className="font-instrumentSans absolute h-full w-full text-black">
          <div ref={imgRef} className="absolute h-full w-full overflow-hidden">
            {visibleImages.map((image, index) => (
              <Image
                key={index}
                src={image.src}
                alt={image.alt}
                fill
                className="h-full w-full object-cover transition-opacity duration-300"
                style={{ zIndex: visibleImages.length - index }}
                onClick={() => imgClick(index)}
              />
            ))}
          </div>
        </MouseCursorComponent>
      </div>
    </div>
  );
}
