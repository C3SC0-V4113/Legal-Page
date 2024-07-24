import { Button } from "./button";

export const GradientButton = ({
  className,
  children,
}: Readonly<{
  className?: string;
  children: React.ReactNode;
}>) => {
  return (
    <div
      className={`rounded-3xl p-px bg-gradient-to-r from-accent-foreground to-primary-foreground ${className}`}
    >
      <Button className="rounded-3xl w-full">
        <p className="bg-clip-text text-transparent bg-gradient-to-r from-accent-foreground to-primary-foreground">
          {children}
        </p>
      </Button>
    </div>
  );
};
