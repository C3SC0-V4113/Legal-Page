import { ImageHeader } from "@/components/pages/image-header";
import { GradientButton } from "@/components/ui/gradient-button";
import { LegalSolutions } from "@/components/pages/legal-solutions";

export default function Home() {
  return (
    <>
      <ImageHeader>
        <h1 className="text-4xl md:text-5xl md:text-center">
          Un Proceso simple y humano para brindarte apoyo legal
        </h1>
        <GradientButton className="min-w-48 md:max-w-60">
          Hablemos
        </GradientButton>
        <p className="font-bold">30 minutos gratis</p>
      </ImageHeader>
      <div className="flex flex-col my-12 px-2 gap-4 w-full max-w-screen-xl">
        <h2 className="font-bold text-4xl text-center">
          Soluciones Legales Inclusivas
        </h2>
        <p className="text-center">
          Cada situación es diferente. Ofrecemos un proceso legal directo y
          práctico
        </p>
        <LegalSolutions />
      </div>
    </>
  );
}
