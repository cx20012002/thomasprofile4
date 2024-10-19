import { socialLinks } from "@/utils/contentStore";
import Link from "next/link";
import clsx from "clsx";

export default function Footer({ bgColor = "bg-secondary" }: { bgColor?: string }) {
  return (
    <div
      className={`flex w-full flex-col items-center justify-center px-5 pt-16 lg:pt-32 xl:px-8 xl:pt-52 bg-[${bgColor}]`}
    >
      <div className="flex h-[39px] w-full items-center justify-between gap-[10px] overflow-hidden text-xs uppercase">
        {socialLinks.map((link) => (
          <Link key={link.name} href={link.url} className="group relative h-[18px] w-full">
            <div className="absolute -bottom-[26px] left-0 flex w-full flex-col gap-[10px] text-center transition-transform duration-300 ease-in-out group-hover:-translate-y-[27px]">
              <p className="">{link.name}</p>
              <p className="">{link.name}</p>
            </div>
          </Link>
        ))}
      </div>
      <div className="inset-0 w-full overflow-hidden pt-10 text-center font-anton uppercase md:pt-20 lg:h-[680px] xl:w-[1200px]">
        <div className="relative">
          <p className="text-[120px] leading-[1em] lg:text-[200px] xl:text-[380px]">
            Kim <br /> wong
          </p>
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
      </div>
    </div>
  );
}
