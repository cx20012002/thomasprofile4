import React from "react";
import ImageTile from "../components/ImageTile";
import { works } from "@/utils/contentStore";

export default function SingleWork() {
  return (
    <>
      <section className="flex flex-col justify-center gap-2 pb-12 pt-32 lg:pt-32 xl:pt-40">
        <h1 className="text-[32px]">Monogram</h1>
        <div className="w-full font-instrumentSerif text-[24px] leading-[1.2em] md:w-6/12 md:text-[42px] xl:text-[52px]">
          <p>
            Monogram is a leading firm in architecture and interior design. Their portfolio features sustainable and
            modern spaces that are both functional and elegant.
          </p>
        </div>
        <small className="flex items-center justify-start gap-2 font-instrumentSans text-[13px] font-semibold">
          <p>Branding</p>
          <div className="aspect-square w-[5px] rounded-full bg-primary" />
          <p>2022</p>
        </small>
      </section>

      <section className="grid grid-cols-2 gap-5">
        {works.map((work, index) => (
          <ImageTile
            url={work.src2}
            isLarge={index < 2 || index >= 6}
            className="h-[360px] overflow-hidden rounded-[5px] md:h-[920px]"
          />
        ))}
      </section>
    </>
  );
}
