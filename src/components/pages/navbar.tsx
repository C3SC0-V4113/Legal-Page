"use client";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { DesktopNav } from "../ui/desktop-nav";
import { MobileNav } from "../ui/mobile-nav";

const navItems = [
  {
    label: "Inicio",
    href: "/",
  },
  {
    label: "Capacitaciones",
    href: "/capacitations",
  },
];

export const Navbar = () => {
  const matches = useMediaQuery("(min-width: 1024px)");
  return (
    <header className="flex justify-end px-4 md:px-0 h-16">
      {matches ? (
        <DesktopNav navItems={navItems} />
      ) : (
        <MobileNav navItems={navItems} />
      )}
    </header>
  );
};
