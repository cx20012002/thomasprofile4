import Link from "next/link";

export default function Header() {
  return (
    <div className="text-primary fixed z-50 flex w-full justify-between p-5 text-[16px] font-bold">
      <Link href={"/"}>
        <h2>K — W</h2>
      </Link>
      <div className="group relative flex aspect-square w-8 cursor-pointer">
        <div className="bg-primary absolute left-1/2 top-1/2 aspect-square w-4 -translate-x-1/2 -translate-y-1/2 rounded-full transition-all duration-300 group-hover:w-8" />
        <div className="bg-primary transition-color absolute left-1/2 top-1/2 aspect-square w-4 -translate-x-1/2 -translate-y-1/2 rounded-full duration-300 group-hover:bg-white" />
        <div className="transition-color absolute left-1/2 top-1/2 aspect-square w-[22px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white opacity-0 duration-300 group-hover:opacity-100" />
      </div>
    </div>
  );
}
