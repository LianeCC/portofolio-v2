import { cn } from "@/lib/utils";
import { PropsWithChildren } from "react";

interface SectionComponentBlackProps {
    className?: string;
    id?: string;
}

export const SectionComponentBlack = (props: PropsWithChildren<SectionComponentBlackProps>) => {
    return (
        <section id={props.id} className={cn("px-4 m-auto bg-black", props.className)}>
            {props.children}
        </section>
    );
};