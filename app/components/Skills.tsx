import Image from "next/image";
import { SectionComponent } from "./Section"
import skills from "@/data/skills.json";


export const Skill = () => {
    return (
        <SectionComponent className="flex flex-col items-center gap-6">
            <h2 className="font-caption font-bold text-4xl text-primary pb-10">Langages & Outils</h2>
            <div className="flex flex-wrap justify-center gap-8">
                {skills.map((skill, index) => (
                    <div key={index} className="flex flex-col items-center text-center w-24">
                        <div className="w-20 h-20 rounded-full border border-secondary flex items-center justify-center mb-2 overflow-hidden">
                            <Image
                                src={skill.icon}
                                alt={skill.name}
                                className="rounded-full w-full h-full object-contain transform transition-transform duration-300 hover:scale-110"
                                width={80}
                                height={80}
                           />
                        </div>
                        <p className="text-lg">{skill.name}</p>
                    </div>
                ))}
            </div>
        </SectionComponent>
    );
};

  /* <SectionComponent className="flex flex-col items-center gap-6">

    <h2 className="font-caption text-4xl text-primary">Skills & Tools</h2>
    
    <div className="relative w-full overflow-hidden">
        <div className="absolute flex animate-scroll-left gap-8">
            {skills.map((skill, index) => (
                <div key={index} className="flex flex-col items-center text-center w-24">
                    <div className="w-20 h-20 rounded-full bg-white-200 flex items-center justify-center mb-2">
                        <img src={skill.icon} alt={skill.name} className="w-16 h-16 object-contain"/>
                    </div>
                    <p className="text-sm">{skill.name}</p>
                </div>
            ))}
        </div>
    </div>

    <div className="relative w-full overflow-hidden mt-6">
        <div className="absolute flex animate-scroll-right gap-8">
            {skills.map((skill, index) => (
                <div key={index} className="flex flex-col items-center text-center w-24">
                    <div className="w-20 h-20 rounded-full bg-gray-200 flex items-center justify-center mb-2">
                        <img src={skill.icon} alt={skill.name} className="w-full h-full object-contain"/>
                    </div>
                    <p className="text-sm">{skill.name}</p>
                </div>
            ))}
        </div>
    </div>
</SectionComponent> */