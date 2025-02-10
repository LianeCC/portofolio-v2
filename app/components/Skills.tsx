import Image from "next/image";
import { SectionComponent } from "./Section";
import skills from "@/data/skills.json";

export const Skill = () => {
    return (
        <SectionComponent id="skills" className="flex flex-col items-center gap-6 pt-20 pb-20">
            <h2 className="font-caption font-bold text-4xl text-primary pb-10">Langages & Outils</h2>

            {/* desktop */}
            <div className="relative w-full overflow-hidden group hidden sm:block">
                <div className="flex w-max animate-[marquee_20s_linear_infinite] pause-on-hover">
                    {[...skills, ...skills].map((skill, index) => (
                        <div key={index} className="flex flex-col items-center text-center w-18 mx-4">
                            <div className="w-16 h-16 rounded-full border border-secondary flex items-center justify-center mb-2 overflow-hidden relative">
                                <Image
                                    src={skill.icon}
                                    alt={skill.name}
                                    className="rounded-full w-full h-full object-contain transform transition-transform duration-300 hover:scale-110"
                                    fill
                                />
                            </div>
                            <p className="text-lg">{skill.name}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* mobile */}
            <div className="grid grid-cols-3 gap-6 sm:hidden">
                {skills.map((skill, index) => (
                    <div key={index} className="flex flex-col items-center text-center">
                        <div className="w-12 h-12 rounded-full border border-secondary flex items-center justify-center mb-2 overflow-hidden relative">
                            <Image
                                src={skill.icon}
                                alt={skill.name}
                                className="rounded-full w-full h-full object-contain transform transition-transform duration-300 hover:scale-110"
                                fill
                            />
                        </div>
                        <p className="font-bold text-lg">{skill.name}</p>
                    </div>
                ))}
            </div>
        </SectionComponent>
    );
};
