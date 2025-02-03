import { ComponentPropsWithoutRef } from "react";

export const LinkedinIcon = (props: ComponentPropsWithoutRef<"svg"> & { size?: number }) => {
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
                d="M100.3 480H9V168h91.3v312zm-45.6-355.6c-29.9 0-54.3-24.4-54.3-54.3 0-29.8 24.4-54.3 54.3-54.3 29.8 0 54.3 24.4 54.3 54.3 0 29.9-24.5 54.3-54.3 54.3zM459.1 480H367.8v-181.6c0-27.4-10.3-46.2-36.2-46.2-19.7 0-31.6 13.2-36.9 25.9-1.9 4.7-2.4 11.3-2.4 17.9v179.9h-91.3v-312h87.2v42.4h1.3c12.2-17.7 34.6-43.1 84.4-43.1 61.8 0 107.7 40.5 107.7 127.7v185.6z"
                fill="currentColor"
            />
        </svg>
    );
};