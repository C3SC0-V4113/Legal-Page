import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between">
      <div className="w-full h-auto relative mt-6 flex align-middle justify-center md:rounded-3xl">
        <Image
          className="z-0 md:rounded-3xl"
          src={"/spiral-bg.png"}
          alt={"background-spiral"}
          style={{ objectFit: "cover" }}
          priority
          fill
        />
        <div className="flex flex-col z-50 relative py-6 px-2 max-w-prose">
          <h1 className="text-3xl md:text-center">
            Un Proceso simple y humano para brindarte apoyo legal
          </h1>
          <p>Hablemos</p>
          <p>30 minutos gratis</p>
        </div>
      </div>
    </div>
  );
}
