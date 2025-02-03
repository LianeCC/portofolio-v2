import { cn } from "@/lib/utils";
export type SpacingProps = {
    size?: "sm" | "md" | "lg" ;
};

export const Spacing = ({size = "md"}: SpacingProps) => {
    return <div className={cn({
        "h-10 lg:h-20": size === "sm",
        "h-20 lg:h-40": size === "md",
        "h-30 lg:h-60": size === "lg",
    })} />;
}; 
