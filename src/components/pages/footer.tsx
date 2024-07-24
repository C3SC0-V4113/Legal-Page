import { Facebook, Instagram } from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";

export const Footer = () => {
  return (
    <>
      <svg width="0" height="0">
        <linearGradient id="blue-gradient" x1="100%" y1="100%" x2="0%" y2="0%">
          <stop stopColor="#ceb4e9" offset="0%" />
          <stop stopColor="#7134b2" offset="100%" />
        </linearGradient>
      </svg>
      <footer className="grid grid-cols-1 md:grid-cols-3 gap-16 mt-6 md:mt-12 px-2 max-w-screen-2xl mx-auto">
        <div className="flex gap-4">
          <p className="text-muted-foreground basis-1/2 text-xs text-right mt-1">
            Más sobre nosotros
          </p>
          <div className="flex flex-col basis-1/2 gap-8 bg-gradient-to-r from-accent-foreground to-primary-foreground bg-clip-text text-transparent">
            <p>¿Quiénes somos?</p>
            <p>Roadmap del proyecto</p>
            <p>Relaciones con inversionistas</p>
            <p>Conoce a nuestro equipo</p>
          </div>
        </div>
        <div className="flex gap-4">
          <p className="text-muted-foreground basis-1/2 text-xs text-right mt-1">
            Legal
          </p>
          <div className="flex flex-col basis-1/2 gap-8 bg-gradient-to-r from-accent-foreground to-primary-foreground bg-clip-text text-transparent">
            <p>Términos y condiciones de uso</p>
            <p>Uso ético de datos</p>
            <p>Política de uso aceptable</p>
            <p>Configuración de cookies</p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row">
          <p className="text-center md:text-muted-foreground md:text-xs md:my-2 md:basis-1/2 md:text-right">
            Síguenos en:
          </p>
          <div className="flex justify-center align-middle gap-4 md:gap-2 py-4 md:py-0 md:basis-1/2">
            <Button variant={"ghost"}>
              <Facebook size={24} style={{ stroke: "url(#blue-gradient)" }} />
            </Button>
            <Button variant={"ghost"}>
              <Instagram size={24} style={{ stroke: "url(#blue-gradient)" }} />
            </Button>
            <Button variant={"ghost"}>
              <FaXTwitter size={24} style={{ fill: "url(#blue-gradient)" }} />
            </Button>
          </div>
        </div>
      </footer>
      <Separator className="mb-28 mt-10 opacity-25" />
    </>
  );
};
