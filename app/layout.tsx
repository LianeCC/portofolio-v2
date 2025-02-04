import { Metadata } from "next";
import { cn } from "@/lib/utils";
import "./globals.css";

export const metadata: Metadata = {
  title: "Liane COUPAT CANDOULIVES - Web Developer",
  description: "Mon portfolio",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("font-sans h-full bg-background text-foreground")}>
        {children}
      </body>
    </html>
  );
}
