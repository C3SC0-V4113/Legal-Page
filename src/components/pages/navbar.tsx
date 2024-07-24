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
    <header className="flex justify-end px-4 h-16 max-w-screen-2xl mx-auto md:px-12 xl:px-20 2xl:px-28">
      {matches ? (
        <DesktopNav navItems={navItems} />
      ) : (
        <MobileNav navItems={navItems} />
      )}
    </header>
  );
};
