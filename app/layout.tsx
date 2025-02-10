import { cn } from "@/lib/utils";
import "./globals.css";
import Seo from "./components/Seo";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <Seo />
      </head>
      <body className={cn("font-sans h-full bg-background text-foreground")}>
        {children}
      </body>
    </html>
  );
}
