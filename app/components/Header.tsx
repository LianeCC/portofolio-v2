"use client";

import { useState, useEffect } from "react";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { SectionComponent } from "./Section";
import { GithubIcon } from "./icons/GithubIcon";
import { cn } from "@/lib/utils";
import { LinkedinIcon } from "./icons/LinkedinIcon";

export const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header className={cn("sticky top-0 py-5 backdrop-blur-lg z-10 transition-colors duration-100", isScrolled ? "bg-primary/40" : "bg-primary/10")}>
            <SectionComponent className="flex items-baseline">
                <h1 className="text-4xl text-foreground">
                    LC²
                </h1>
                <div className="flex-1" />
                <ul className="flex items-center gap-5">
                    <Link href="https://github.com/lianecc" target="_blank" className={cn(buttonVariants({variant: "outline"}), "size-8 p-0")}>
                        <GithubIcon size={16} className="text-foreground" />
                    </Link>
                    <Link href="https://www.linkedin.com/in/liane-coupat-candoulives-4311a894/" target="_blank" className={cn(buttonVariants({variant: "outline"}), "size-8 p-0")}>
                        <LinkedinIcon size={16} className="text-foreground" />
                    </Link>
                </ul>
            </SectionComponent>
        </header>
    );
};