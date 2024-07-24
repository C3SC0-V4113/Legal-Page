"use client";
import Link from "next/link";
import { Button } from "./button";
import { usePathname } from "next/navigation";
import { cn } from "../../lib/utils";

interface Props {
  label: string;
  href?: string;
}

export const NavButton = ({ label, href = "/" }: Props) => {
  const pathname = usePathname();
  return (
    <Link className="w-full" href={href}>
      <Button
        variant={"ghost"}
        className={cn(
          "w-full",
          pathname == href ? "border border-primary bg-secondary" : ""
        )}
      >
        <p className="bg-clip-text text-transparent bg-gradient-to-r from-accent-foreground to-primary-foreground">
          {label}
        </p>
      </Button>
    </Link>
  );
};
