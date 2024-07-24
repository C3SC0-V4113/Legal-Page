"use client";
import Link from "next/link";
import { NavigationMenuItem } from "./navigation-menu";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

interface Props {
  label: string;
  href?: string;
}

export const NavItem = ({ label, href = "/" }: Props) => {
  const pathname = usePathname();
  return (
    <NavigationMenuItem
      className={cn(
        "text-primary-foreground hover:border-primary-foreground border-b-2",
        pathname == href ? "border-primary-foreground" : "border-transparent"
      )}
    >
      <Link href={href}>{label}</Link>
    </NavigationMenuItem>
  );
};
