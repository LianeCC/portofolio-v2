import { Card } from "@/components/ui/card";
import dynamic from "next/dynamic";
import { ExperienceProps } from "./types";
import Image from "next/image";
import EXPERIENCES from "@/data/workexperience.json";

export const Experiences = () => {
    const Experience = dynamic(() => Promise.resolve(ExperienceContent), { ssr: false });

    return (
        <Card className="p-4 flex-1 bg-white">
            <h3 className="font-bold text-primary pb-4">Expériences</h3>
            <div className="flex flex-col gap-4">
                {EXPERIENCES.map((experience, index) => (
                    <Experience key={index} {...experience} />
                ))}
            </div>
        </Card>
    );
};

const ExperienceContent = (props: ExperienceProps) => {
    return (
        <div className="flex items-center gap-4">
            <div className="bg-white text-accent-foreground rounded-sm w-16 h-16 flex justify-center items-center overflow-hidden">
                <Image 
                src={props.logo} 
                alt={props.title} 
                className="object-contain w-full h-full" 
                width={64}
                height={64}
                />
            </div>
            <div className="w-full sm:w-[200px] md:w-[250px] lg:w-[300px] xl:w-[350px]">
                <p className="text-lg font-semibold">{props.title}</p>
                <p className="text-sm text-muted-foreground">{props.description}</p>
                <p className="text-sm text-muted-foreground">{props.date}</p>
            </div>
        </div>
    );
};

{/* <a href={props.url} target="_blank" className="inline-flex items-center gap-4 hover:bg-accent/20 transition-colors p-2 rounded">
            <span className="bg-accent text-accent-foreground rounded-sm">
                <img src={props.Logo} alt={props.title} className="w-14 h-14" />
            </span>
            <div>
                <p className="text-lg font-semibold">{props.title}</p>
                <p className="text-sm text-muted-foreground">{props.description}</p>
                <p className="text-sm text-muted-foreground">{props.date}</p>
            </div>
        </a> */}