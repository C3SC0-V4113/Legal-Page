import { CapacitationsCards } from "@/components/pages/capacitations-cards";
import { ImageHeader } from "@/components/pages/image-header";
import { Separator } from "@/components/ui/separator";
import { Metadata, NextPage } from "next";

interface Props {}

export const metadata: Metadata = {
  title: "Capacitaciones",
  description: "Capacitaciones",
};

const Page: NextPage<Props> = ({}) => {
  return (
    <>
      <ImageHeader>
        <p className="font-bold">Capacitaciones</p>
        <h1 className="text-4xl md:text-5xl md:text-center">
          Tu espacio de formación inclusiva
        </h1>
      </ImageHeader>
      <div className="grid grid-cols-1 md:grid-cols-2 w-full px-2 gap-4">
        <h2 className="col-span-full mt-8 text-center md:text-left">
          Explora como Igualítika puede ayudarte
        </h2>
        <Separator className="col-span-full mb-6" />
        <CapacitationsCards />
      </div>
    </>
  );
};

export default Page;
