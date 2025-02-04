import { cn } from "@/lib/utils";
import { PropsWithChildren } from "react";

interface SectionComponentProps {
    className?: string;
    id?: string;
}

export const SectionComponent = (props: PropsWithChildren<SectionComponentProps>) => {
    return (
        <section id={props.id} className={cn("max-w-6xl px-4 m-auto", props.className)}>
            {props.children}
        </section>
    );
};