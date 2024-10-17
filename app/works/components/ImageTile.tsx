import Image from "next/image";

export default function ImageTile({
  url,
  isLarge = false,
  className,
}: {
  url: string;
  isLarge?: boolean;
  className?: string;
}) {
  return (
    <div className={`${isLarge ? "col-span-2" : "col-span-2 md:col-span-1"} ${className}`}>
      <Image src={url} alt="Picture of the author" width={613} height={720} className="h-full w-full object-cover" />
    </div>
  );
}
