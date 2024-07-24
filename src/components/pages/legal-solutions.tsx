import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Separator } from "../ui/separator";
import { CheckedList, CheckedListItem } from "../ui/checked-list-item";
import { GradientButton } from "../ui/gradient-button";

const solutions = [
  {
    id: "0",
    title: "Consulta Gratis",
    items: [
      {
        title: "30 minutos gratis",
        desc: "Tu primer consulta no tiene costo.",
      },
      {
        title: "Queremos ayudarte",
        desc: "Cuéntanos tus necesidades.",
      },
      {
        title: "Atención inclusiva",
        desc: "Todxs son bienvenidxs.",
      },
    ],
    cta: {
      label: "¡Hablemos gratis!",
    },
  },
  {
    id: "1",
    title: "lorem+",
    items: [
      {
        title: "¿No encuentras lo que necesitas?",
        desc: "Bríndanos más detalles.",
      },
      {
        title: "Planificación y estrategia",
        desc: "Diseñamos un plan  a tu medida.",
      },
      {
        title: "$45 USD",
        desc: "Tarifa transparente. Sin sorpresas.",
      },
    ],
    cta: {
      label: "¡Inicia tu trámite",
    },
  },
];

export const LegalSolutions = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 justify-center gap-10 mt-6">
      {solutions.map(({ id, title, cta, items }) => (
        <Card className="rounded-3xl" key={id}>
          <CardHeader>
            <CardTitle className="bg-clip-text text-transparent mb-4 bg-gradient-to-r from-accent-foreground to-primary-foreground md:text-center">
              {title}
            </CardTitle>
            <Separator className="bg-muted-foreground opacity-25" />
          </CardHeader>
          <CardContent>
            <CheckedList>
              {items.map((item, key) => (
                <CheckedListItem key={key} {...item} />
              ))}
            </CheckedList>
          </CardContent>
          <CardFooter>
            <GradientButton className="w-full">{cta.label}</GradientButton>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};
