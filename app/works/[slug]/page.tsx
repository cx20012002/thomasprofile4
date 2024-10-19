import React from "react";
import ImageTile from "../components/ImageTile";
import { PortableText } from "next-sanity";
import { urlFor } from "@/sanity/lib/image";
import { getSingleWork } from "@/utils/api";

export default async function SingleWork({ params }: { params: { slug: string } }) {
  const work = await getSingleWork(params.slug.toLowerCase());
  const { title, tagline, summary, workImages } = work;
  return (
    <>
      <section className="flex flex-col justify-center gap-2 pb-12 pt-32 lg:pt-32 xl:pt-40">
        <h1 className="text-[32px]">{title}</h1>
        <div className="w-full font-instrumentSerif text-[24px] leading-[1.2em] md:w-6/12 md:text-[42px] xl:text-[52px]">
          <div>
            <PortableText value={summary} />
          </div>
        </div>
        <small className="flex items-center justify-start gap-2 font-instrumentSans text-[13px] font-semibold">
          <p>{tagline.split(",")[0]}</p>
          <div className="aspect-square w-[5px] rounded-full bg-primary" />
          <p>{tagline.split(",")[1]}</p>
        </small>
      </section>

      <section className="grid grid-cols-2 gap-5">
        {workImages.map((image, index) => (
          <ImageTile
            key={index}
            url={urlFor(image).url()}
            isLarge={index < 2 || index >= 6}
            className="h-[360px] overflow-hidden rounded-[5px] md:h-[920px]"
          />
        ))}
      </section>
    </>
  );
}
