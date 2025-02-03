import { ComponentPropsWithoutRef } from "react";

export const VercelIcon = (props: ComponentPropsWithoutRef<"svg"> & { size?: number }) => {
    return (
        <svg
            width={props.size}
            height={props.size}
            viewBox="0 0 512 512"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid"
            {...props}
        >
            <path
                d="M256 48L496 464H16L256 48Z"
                fill="currentColor"
            />
        </svg>
    );
};
