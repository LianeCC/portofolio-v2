import { Card } from "@/components/ui/card";
import { FormationProps } from "./types";
import Image from "next/image";

const FORMATIONS = [
    {
        Image : "/logos/logoOpenclassrooms.png",
        title: "Développeur Web",
        description: "OpenClassrooms",
        date: "février 2025",
        url: "https://openclassrooms.com/fr/paths/899-developpeur-web",
    },
    {
        Image : "/logos/logoOpenclassrooms.png",
        title: "Autodidacte",
        description: "En perpétuel apprentissage",
        date: "depuis 2017",
        url: "https://openclassrooms.com",
    },
    {
        Image : "/logos/logoIAE.png",
        title: "MSc Marketing & Management des services",
        description: "IAE d'Aix en Provence",
        date: "septembre 2016",
        url: "https://iae-aix.univ-amu.fr/fr/programmes/organisation-msc/msc2/msc-2-management-specialisation-management-marketing-services",
    },
    // plus de formations ici
];

export const Formations = () => {
    const Formation = FormationContent;
    return (
        <Card className="p-4 flex-1">
            <p className="text-lg text-muted-foreground">Formations</p>
            <div className="flex flex-col gap-4">
                {FORMATIONS.map((formation, index) => (
                    <Formation key={index} {...formation} />
                ))}
            </div>
        </Card>
    );
};

const FormationContent = (props: FormationProps) => {
    return (
        <a href={props.url} target="_blank" className="inline-flex items-center gap-4 hover:bg-accent/20 transition-colors p-2 rounded">
            <span className="bg-accent text-accent-foreground rounded-sm">
                <Image 
                src={props.Image as string} 
                alt={props.title} 
                width={56}
                height={56}
                className="w-14 h-14" 
                />
            </span>
            <div className="w-full sm:w-[200px] md:w-[250px] lg:w-[300px] xl:w-[350px]">
                <p className="text-lg font-semibold">{props.title}</p>
                <p className="text-sm text-muted-foreground">{props.description}</p>
                <p className="text-sm text-muted-foreground">{props.date}</p>
            </div>
        </a>
    );
};
