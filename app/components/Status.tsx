import { SectionComponentBlack } from "./SectionBlack";
import { Projects } from "./statuscontent/Projects";

export const Status = () => {
    return (
        <SectionComponentBlack className="flex flex-col gap-10">
            <Projects />
        </SectionComponentBlack>
    );
};