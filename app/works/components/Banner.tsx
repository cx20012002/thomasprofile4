export default function Banner() {
  return (
    <section className="flex flex-col items-center justify-center gap-12 pb-16 pt-32 lg:py-32 xl:py-40">
      <div className="text-center font-anton text-[84px] uppercase leading-[1em] lg:text-[180px] xl:text-[240px]">
        <p>Selected <br/> works</p>
      </div>
      <div className="w-[320px] text-center text-xs uppercase xl:w-1/5">
        <p className="font-normal">关于我自己的故事</p>
        <p>Kim Wong is a visionary designer who bridges cultures through her innovative design philosophy</p>
      </div>
    </section>
  );
}
