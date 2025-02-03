import { SectionComponent } from "./Section";
import { Projects } from "./statuscontent/Projects";

export const Status = () => {
    return (
        <SectionComponent className="flex flex-col gap-10">
            <Projects />
        </SectionComponent>
    );
};