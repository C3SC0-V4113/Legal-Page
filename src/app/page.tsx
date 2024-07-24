import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  CheckedList,
  CheckedListItem,
} from "@/components/ui/checked-list-item";
import { GradientButton } from "@/components/ui/gradient-button";
import { ImageHeader } from "@/components/ui/image-header";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center">
      <ImageHeader>
        <h1 className="text-3xl md:text-center">
          Un Proceso simple y humano para brindarte apoyo legal
        </h1>
        <GradientButton className="min-w-48 md:max-w-60">
          Hablemos
        </GradientButton>
        <p className="font-bold">30 minutos gratis</p>
      </ImageHeader>
      <div className="flex flex-col my-12 px-2 gap-4">
        <h2 className="font-bold text-4xl text-center">
          Soluciones Legales Inclusivas
        </h2>
        <p className="text-center">
          Cada situación es diferente. Ofrecemos un proceso legal directo y
          práctico
        </p>
        <div className="flex flex-col mt-6">
          <Card>
            <CardHeader>
              <CardTitle className="bg-clip-text text-transparent bg-gradient-to-r from-accent-foreground to-primary-foreground md:text-center">
                Consulta Gratis
              </CardTitle>
              <Separator className="bg-muted-foreground opacity-25" />
            </CardHeader>
            <CardContent>
              <CheckedList>
                <CheckedListItem
                  title="30 minutos gratis"
                  desc="Tu primer consulta no tiene costo"
                />
                <CheckedListItem
                  title="30 minutos gratis"
                  desc="Tu primer consulta no tiene costo"
                />
                <CheckedListItem
                  title="30 minutos gratis"
                  desc="Tu primer consulta no tiene costo"
                />
              </CheckedList>
            </CardContent>
            <CardFooter>
              <GradientButton className="w-full">
                ¡Hablemos gratis!
              </GradientButton>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}
