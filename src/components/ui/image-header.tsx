import Image from "next/image";

export const ImageHeader = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="w-full h-auto relative mt-6 flex align-middle justify-center md:rounded-3xl">
      <Image
        className="z-0 md:rounded-3xl object-cover"
        src={"/spiral-bg.png"}
        alt={"background-spiral"}
        priority
        fill
      />
      <div className="flex flex-col gap-4 z-50 relative py-12 px-2 max-w-prose items-center">
        {children}
      </div>
    </div>
  );
};
