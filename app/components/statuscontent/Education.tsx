import { Card } from "@/components/ui/card";
import { FormationProps } from "./types";
import Image from "next/image";
import FORMATIONS from "@/data/education.json";

export const Formations = () => {
    const Formation = FormationContent;
    return (
        <Card className="p-4 flex-1">
            <h3 className="font-bold text-primary pb-4">Formations</h3>
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
        <a href={props.url} target="_blank" className="inline-flex items-center gap-4 hover:bg-secondary/20 transition-colors p-2 rounded">
            <span className="bg-accent text-accent-foreground rounded-sm">
                <Image 
                src={props.image as string} 
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
