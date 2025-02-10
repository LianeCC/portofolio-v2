"use client";

import { useEffect, useState } from "react";
import { buttonVariants } from "@/components/ui/button";
import { GithubIcon } from "./icons/GithubIcon";
import { cn } from "@/lib/utils";
import { LinkedinIcon } from "./icons/LinkedinIcon";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@heroui/navbar";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";

export const Header = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    const sections = ["moreaboutme", "skills", "projects", "contact"];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      let foundSection = null;

      for (let i = 0; i < sections.length; i++) {
        const section = document.getElementById(sections[i]);
        if (section) {
          const { offsetTop, offsetHeight } = section;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            foundSection = sections[i];
            break;
          }
        }
      }

      setActiveSection(foundSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleSmoothScroll = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="sticky top-0 z-50 shadow-sm">
      <Navbar>
        <NavbarContent justify="start">
          <NavbarBrand className="mr-4">
            <h1 className="text-4xl text-foreground">LC²</h1>
          </NavbarBrand>
        </NavbarContent>
        
        <NavbarContent className="hidden sm:flex gap-3" justify="center">
  {[
    { id: "moreaboutme", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ].map((item) => (
    <NavbarItem
      key={item.id}
      isActive={activeSection === item.id}
      className={cn(
        "cursor-pointer transition-colors duration-200",
        activeSection === item.id ? "font-bold text-accent" : "text-foreground hover:font-bold hover:text-accent"
      )}
    >
      <span onClick={() => handleSmoothScroll(item.id)}>
        {item.label}
      </span>
    </NavbarItem>
  ))}
</NavbarContent>

        <NavbarContent justify="end">
          <NavbarItem>
            <Button
              as={Link}
              href="https://github.com/lianecc"
              target="_blank"
              className={cn(buttonVariants({ variant: "outline" }), "min-w-10 size-8 p-0")}
            >
              <GithubIcon size={16} className="text-foreground" />
            </Button>
          </NavbarItem>
          <NavbarItem>
            <Button
              as={Link}
              href="https://www.linkedin.com/in/liane-coupat-candoulives-4311a894/"
              target="_blank"
              className={cn(buttonVariants({ variant: "outline" }), "min-w-10 size-8 p-0")}
            >
              <LinkedinIcon size={16} className="text-foreground" />
            </Button>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
    </header>
  );
};
