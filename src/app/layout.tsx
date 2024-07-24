import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { cn } from "../lib/utils";
import { Footer } from "@/components/pages/footer";
import { Navbar } from "@/components/pages/navbar";

const poppins = Poppins({ subsets: ["latin"], weight: ["300"] });

export const metadata: Metadata = {
  title: {
    template: "Igualitika | %s",
    default: "Igualitika | Página Principal",
  },
  description: "Página Principal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          poppins.className,
          "custom-background bg-repeat-y md:px-12 xl:px-20 2xl:px-28"
        )}
      >
        <Navbar />
        <main className="flex min-h-screen flex-col items-center max-w-screen-2xl mx-auto">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
