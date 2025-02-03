import { SectionComponent } from "./Section"
import Link from "next/link";
import { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils"
import { Formations } from "./statuscontent/Education";
import { Experiences } from "./statuscontent/WorkExperience";
import Image from "next/image";

export const Code = ({ className,...props }: ComponentPropsWithoutRef<"span">) => {
    return (
        <span className={cn("bg-accent/20 font-mono border hover:bg-accent/50 transition-colors border-accent p-1 text-primary rounded-sm", className)} {...props} />
    );
};

export const MoreAboutMe = () => {
    return <SectionComponent id="moreaboutme">
        <h2 className="font-caption text-4xl text-primary py-4">À propos de moi</h2>

        <div className="flex max-md:flex-col items-start gap-6">
            <div className="flex-[5] w-full flex flex-col gap-4">
                <p className="text-justify">Développeuse web passionnée, je me spécialise dans la création de sites et d’applications modernes. Curieuse par nature, je suis constamment à la recherche de nouveaux défis à relever et de technologies innovantes à explorer. J’ai à cœur de concevoir des interfaces intuitives, alliant esthétique et performance, tout en plaçant l’utilisateur au centre de chaque projet. </p> 
                <p className="text-justify">Mon expertise est principalement orientée vers le développement Front-end, avec une stack actuelle incluant <Link href="https://fr.react.dev/" target="_blank"><Code>React</Code></Link>, <Link href="https://nodejs.org/en" target="_blank"><Code>Node.js</Code></Link>, <Link href="https://tailwindcss.com/" target="_blank"><Code>Tailwind</Code></Link>, <Link href="https://www.typescriptlang.org/" target="_blank"><Code>Typescript</Code></Link>.</p>
                <p className="text-justify">Toujours désireuse de progresser, j’apprends vite et m’adapte facilement aux nouvelles technologies. Je souhaite également approfondir mes compétences en Back-end afin de mieux appréhender tout type de projet et d’élargir mon champ d’intervention.</p>
                <p className="text-justify">En dehors du développement, je suis passionnée par la biologie, l’art équestre (que je pratique depuis plus de 25 ans) et la cuisine. Ces passions nourrissent ma créativité et enrichissent ma manière d’aborder mes projets avec originalité.</p> 
            </div>
            <div className="flex-[2] max-md:m-auto ml-auto" >
                <Image 
                    src="/images/Liane-HD.jpg" 
                    className="w-full h-auto rounded-full max-w-xs max-md:w-56" 
                    alt="lianecc's picture" 
                    width={300}
                    height={300}
                    />
            </div>
        </div>
        <div className="pt-[50px] flex flex-wrap gap-10 w-full">
                <Formations />
                <Experiences />
            </div>
    </SectionComponent>
}