import { experience, skills } from "@/utils/contentStore";
import Link from "next/link";

export default function Experience() {
  return (
    <section className="w-full bg-primary px-5 pt-[80px] text-bannerBg md:pt-[120px] xl:pt-[220px]">
      <div className="w-full max-w-[2280px]">
        <p className="mb-[80px] font-instrumentSerif text-[60px] uppercase leading-[0.9em] md:mb-[220px] md:text-[100px] xl:text-[160px]">
          My skills combine strategy, creativity, and technology to develop digital products.
        </p>
        <div className="flex flex-col divide-y divide-[#ffb1a8]">
          <div className="flex flex-col pb-[60px] md:pb-[120px] xl:flex-row">
            <div className="w-full font-instrumentSans text-[26px]">Biography</div>

            <div className="flex w-full flex-col items-start gap-12 md:gap-20">
              <p className="font-instrumentSerif text-[32px] leading-[1.2em] md:text-[48px] xl:text-[60px]">
                Design is not just a profession, it's a way of life. It involves storytelling, problem-solving, and
                creating experiences that resonate.
              </p>
              <p className="w-full font-instrumentSans text-[14px] font-medium leading-[1.2em] md:max-w-[460px] md:text-[20px]">
                Throughout my successful career, I have had the pleasure of working with a diverse range of clients and
                industries. My unwavering objective has always been to design and develop interfaces that are
                unparalleled in their uniqueness, aesthetic appeal, and ease of use.
              </p>
              <Link
                href={"/"}
                className="group relative flex flex-col gap-2 border-b border-[#ffb1a8] py-2 font-instrumentSans text-sm font-semibold uppercase"
              >
                <p>View more</p>
                <div className="absolute -bottom-[1px] right-0 h-[1px] w-full bg-white transition-all duration-300 group-hover:w-0" />
              </Link>
            </div>
          </div>

          <div className="flex flex-col py-[60px] font-instrumentSans md:py-[120px] xl:flex-row">
            <div className="w-full text-[24px]">Skills and Expertise</div>
            <div className="w-full text-[14px] md:text-[20px] font-medium">
              <ul className="flex flex-col divide-y divide-[#ffb1a8]">
                {skills.map((skill, index) => (
                  <li key={index} className="py-5">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex flex-col py-[60px] md:py-[120px] font-instrumentSans text-[24px] xl:flex-row">
            <div className="w-full text-[24px]">Work Expertise</div>
            <div className="w-full text-[14px] md:text-[20px] font-medium">
              <ul className="flex flex-col divide-y divide-[#ffb1a8]">
                {experience.map((item, index) => (
                  <li key={index} className="flex justify-between py-5">
                    <p>{item.position}</p>
                    <p>{item.year}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
