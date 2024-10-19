import WorkCard from "./WorkCard";
import { PortableText } from "next-sanity";

export default function SelectedWorks({ sectionText: { smallTitle, richText }, selectedWorks }: any) {
  return (
    <div className="content-container xl:pt-[120px]">
      {/* Selected Work Summary */}
      <section className="mb-16 flex flex-col gap-2">
        <p className="uppercase">{smallTitle}</p>
        <div className="w-full font-instrumentSans text-lg font-medium leading-6 xl:w-1/4">
          <PortableText value={richText} />
        </div>
      </section>
      {/* Grid Work Cards */}
      <section className="grid grid-cols-1 gap-3 gap-y-5 xl:grid-cols-2">
        {selectedWorks.slice(0, 3).map((item, index) => (
          <WorkCard key={index} item={item} isLarge={(index + 1) % 3 === 0} />
        ))}
      </section>
      {/* Custom Work Cards */}
      <section className="flex w-full flex-col items-center justify-center gap-5 py-5 xl:gap-0 xl:py-20">
        <WorkCard item={selectedWorks[3]} custom className="w-full xl:max-w-[1120px]" />
        <WorkCard item={selectedWorks[4]} custom className="w-full xl:mr-36 xl:mt-20 xl:max-w-[500px] xl:self-end" />
        <WorkCard item={selectedWorks[5]} custom className="w-full xl:ml-80 xl:mt-10 xl:max-w-[812px] xl:self-start" />
      </section>
    </div>
  );
}
