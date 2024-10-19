import Link from "next/link";
import React from "react";
import SeamlessLoop from "./components/SeamlessLoop";
import { client } from "@/sanity/lib/client";

async function getContactData(){
  const data = await client.fetch(`*[_type == "contact"][0]`);
  return data;
} 

export default async function page() {
  const contactData = await getContactData();
  const {slogan, contactText, contactInfo} = contactData;
  const [first, second, third] = slogan.split(',');

  return (
    <div className="flex h-screen w-full bg-[#160059] px-5 pt-32 text-bannerBg md:items-center md:pt-0">
      <div className="flex w-full flex-col gap-12 xl:flex-row xl:gap-32">
        <div className="flex w-full flex-col font-anton text-[84px] uppercase leading-[0.95em] md:items-start md:text-[180px] xl:text-[240px]">
          <div>{first}</div>
          <div className="relative">
            {second}
            <SeamlessLoop />
          </div>
          <div>{third}</div>
        </div>
        <div className="flex w-full flex-col font-instrumentSerif text-[18px] leading-[1.2em] md:text-[32px]">
          <div className="flex w-full flex-col gap-8 md:w-2/3 xl:w-1/2">
            <div>{contactText}</div>
            {contactInfo.map((item, i) => (
              <div key={i} className="flex flex-col items-start gap-1 text-[20px] uppercase md:text-[24px]">
                <small className="font-francoisOne text-xs text-[#65979e]">{item.title}</small>
                <Link href={item.link} className="group">
                  {item.info}
                  <span className="block h-[1px] w-0 bg-white transition-all duration-500 ease-in-out group-hover:w-full" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}