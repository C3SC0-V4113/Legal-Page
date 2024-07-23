import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between">
      <div className="w-full h-auto relative mt-6 flex align-middle justify-center md:rounded-3xl">
        <Image
          className="z-0 md:rounded-3xl object-cover"
          src={"/spiral-bg.png"}
          alt={"background-spiral"}
          priority
          fill
        />
        <div className="flex flex-col gap-4 z-50 relative py-6 px-2 max-w-prose items-center">
          <h1 className="text-3xl md:text-center">
            Un Proceso simple y humano para brindarte apoyo legal
          </h1>
          <Button className="rounded-3xl min-w-48 md:max-w-60">Hablemos</Button>
          <p>30 minutos gratis</p>
        </div>
      </div>
    </div>
  );
}
