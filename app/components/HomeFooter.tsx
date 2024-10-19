import { socialLinks } from "@/utils/contentStore";
import clsx from "clsx";
import { PortableText } from "next-sanity";
import Link from "next/link";

export default function HomeFooter({ footer:{smallTitle, title} }: any) {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-12 bg-primary px-5 py-16 text-bannerBg lg:py-32 xl:px-8 xl:py-52">
      <div className="w-full text-center text-xs uppercase xl:w-[1085px]">
        <p className="font-normal">{smallTitle}</p>
        <PortableText value={title} />
      </div>
      <div className="relative inset-0 w-full text-center font-anton uppercase xl:w-[1200px]">
        <p className="text-[84px] leading-[1em] lg:text-[180px] xl:text-[240px]">let's work together</p>
        <Link
          href="/contact"
          className={clsx(
            "absolute inset-0 left-1/2 top-1/2 bg-secondary font-francoisOne text-primary after:bg-primary hover:border-primary",
            "flex aspect-square w-[100px] -translate-x-1/2 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-[#ffa3a3]",
            "text-[12px] uppercase transition-colors duration-500 after:absolute after:inset-0 after:-z-10 after:h-full after:w-full after:scale-0",
            "after:rounded-full after:opacity-0 after:transition-all after:duration-500 after:content-[''] hover:text-white hover:after:scale-100",
            "hover:after:opacity-100 lg:w-[224px] lg:text-[16px]",
          )}
        >
          Hire Me Now
        </Link>
      </div>
      <div className="flex h-[39px] w-full items-center justify-between gap-[10px] overflow-hidden text-xs uppercase lg:w-[731px]">
        {socialLinks.map((link) => (
          <Link key={link.name} href={link.url} className="group relative h-[18px] w-full">
            <div className="absolute -bottom-[26px] left-0 flex w-full flex-col gap-[10px] text-center transition-transform duration-300 ease-in-out group-hover:-translate-y-[27px]">
              <p className="">{link.name}</p>
              <p className="">{link.name}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
