import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./sheet";
import { NavButton } from "./nav-button";

interface Props {
  navItems: {
    label: string;
    href: string;
  }[];
}

export const MobileNav = ({ navItems }: Props) => {
  return (
    <div className="flex">
      <Sheet>
        <SheetTrigger>
          <Menu />
        </SheetTrigger>
        <SheetContent>
          <SheetHeader className="sr-only">
            <SheetTitle>Menú de Navegación</SheetTitle>
            <SheetDescription>
              Menú de Navegación especifico para pantallas pequeñas
            </SheetDescription>
          </SheetHeader>
          <div className="mt-8 flex flex-col gap-4">
            {navItems.map((navItem, key) => (
              <NavButton key={key} {...navItem} />
            ))}
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};
