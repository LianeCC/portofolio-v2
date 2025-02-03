"use client";

import Link from "next/link";
import { SectionComponent } from "./Section";

export const Hero = () => {
    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault();
        const targetId = e.currentTarget.getAttribute("href")?.substring(1);
        const targetElement = document.getElementById(targetId!);
        if (targetElement) {
            const offset = 100; // définir la distance avant la section
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
    };

    return (
        <SectionComponent className="flex max-md:flex-col items-start gap-6">
            <div className="relative w-[4px] h-[150px] bg-black rounded-full overflow-hidden hidden md:block">
                <div className="absolute top-0 left-0 w-full h-[20px] bg-primary animate-slide-vertical"></div>
            </div>
            <div className="flex-[3] w-full flex flex-col gap-2">
                <h2 className="font-caption text-4xl text-primary">Liane Coupat Candoulives</h2>
                <h3 className="font-caption text-2xl font-bold">Web Developer</h3>
                <p className="text-justify">Développeuse web passionnée, je conçois des sites modernes et intuitifs, alliant esthétique, performance et innovation.</p>
                <Link href="#moreaboutme" onClick={handleScroll}>
                    <p className="text-primary hover:underline">En savoir plus sur moi</p>
                </Link>
            </div>
        </SectionComponent>
    );
};