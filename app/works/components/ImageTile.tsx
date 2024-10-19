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
    <div className={`relative ${isLarge ? "col-span-2" : "col-span-2 md:col-span-1"} ${className}`}>
      <Image
        src={url}
        alt="Picture of the author"
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="object-cover"
      />
    </div>
  );
}
