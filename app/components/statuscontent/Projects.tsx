import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import PROJECTS from "@/data/projects.json";
import { ProjectProps } from "./types";

export const Projects = () => {
  const Project = ProjectContent;
  return (
    <div className="pt-5 pb-10">
      <Card className="w-full flex flex-col gap-4 border-none bg-card-white">
        <h2 className="font-caption font-bold text-4xl text-white py-5 lg:py-12">Projets</h2>
        <p className="italic text-white">Deux projets sont en cours de développement (application et site vitrine)</p>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-5">
          {PROJECTS.map((project, index) => (
            <Project key={index} {...project} />
          ))}
        </div>
      </Card>
    </div>
  );
};

const ProjectContent = (props: ProjectProps) => {
  return (
    <div className="flex flex-col gap-3">
      <Link href={props.url} target="_blank" className="group relative w-full max-h-[300px] overflow-hidden rounded-lg">
        <Image
          src={props.image}
          alt={props.title}
          className="w-full h-full object-cover object-top transition-transform duration-500 ease-in-out group-hover:scale-110"
          width={800}
          height={600}
        />
      </Link>

      <div className="mt-3 lg:min-h-[180px]">
        <h3 className="text-lg text-accent text-font-bold">{props.title}</h3>
        <p className="text-muted">{props.description}</p>
      </div>

      <Button className="text-secondary hover:text-white w-fit">
        <a href={props.urlGithub} target="_blank">Voir le repo sur GitHub</a>
      </Button>

      <div className="mt-3">
        <Accordion type="single" collapsible>
          <AccordionItem value="1">
            <AccordionTrigger>
              <h4 className="text-lg text-accent">Difficulté & Solution</h4>
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-muted">{props.difficulte}</p>
              <p className="text-muted">{props.solution}</p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};
