import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { GradientButton } from "../ui/gradient-button";

const capacitations = [
  {
    id: "1",
    title: "Como integrar la propiedad LGBTQI+ en el ambiente de trabajo",
    desc: "Potencia tu éxito laboral con nuestro curso LGBTQI+. Aprende sobre derechos, enfrenta la discriminación",
    instructor: "Pedro Bogo López",
    price: 45,
  },
  {
    id: "2",
    title: "Como integrar la propiedad LGBTQI+ en el ambiente de trabajo",
    desc: "Potencia tu éxito laboral con nuestro curso LGBTQI+. Aprende sobre derechos, enfrenta la discriminación",
    instructor: "Pedro Bogo López",
    price: 45,
  },
  {
    id: "3",
    title: "Como integrar la propiedad LGBTQI+ en el ambiente de trabajo",
    desc: "Potencia tu éxito laboral con nuestro curso LGBTQI+. Aprende sobre derechos, enfrenta la discriminación",
    instructor: "Pedro Bogo López",
    price: 45,
  },
  {
    id: "4",
    title: "Como integrar la propiedad LGBTQI+ en el ambiente de trabajo",
    desc: "Potencia tu éxito laboral con nuestro curso LGBTQI+. Aprende sobre derechos, enfrenta la discriminación",
    instructor: "Pedro Bogo López",
    price: 45,
  },
];

export const CapacitationsCards = () => {
  return (
    <>
      {capacitations.map(({ id, title, desc, instructor, price }) => (
        <Card key={id} className="rounded-3xl col-span-1">
          <CardHeader>
            <div className="relative w-full h-52 md:h-72 mb-2">
              <Image
                className="object-cover rounded-2xl"
                src={`/images/img-${id}.jpeg`}
                alt={`img ${id}`}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <CardTitle className="bg-clip-text text-transparent mb-4 bg-gradient-to-r from-primary-foreground to-accent-foreground font-semibold text-xl">
              Como integrar la propiedad LGBTQI+ en el ambiente de trabajo
            </CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-sm text-card-foreground text-ellipsis overflow-hidden ...">
              Potencia tu éxito laboral con nuestro curso LGBTQI+. Aprende sobre
              derechos, enfrenta la discriminación
            </CardDescription>
            <div className="flex mt-6">
              <div className="flex flex-col basis-2/3 text-left gap-2">
                <p className="font-semibold text-sm">Instructor</p>
                <p>Pedro Bogo López</p>
              </div>
              <div className="flex flex-col basis-1/3 text-right gap-2">
                <p className="font-semibold text-sm">Precio</p>
                <p className="font-medium text-xl bg-clip-text text-transparent mb-4 bg-gradient-to-r from-accent-foreground to-primary-foreground">
                  $45
                </p>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <GradientButton className="w-full">{"Conocer más"}</GradientButton>
          </CardFooter>
        </Card>
      ))}
    </>
  );
};
