import { cn } from "@/lib/utils";
import { PropsWithChildren } from "react";

interface SectionComponentBlackProps {
    className?: string;
    id?: string;
}

export const SectionComponentBlack = (props: PropsWithChildren<SectionComponentBlackProps>) => {
    return (
        <section id={props.id} className="w-full bg-black">
            <div className={cn("max-w-6xl px-8 m-auto", props.className)}>
                {props.children}
            </div>
        </section>
    );
};