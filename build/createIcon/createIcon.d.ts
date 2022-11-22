import React from "react";
import { IconBaseProps } from "../IconBase";
declare function createIcon(content: React.ReactChildren | React.ReactChild, overrideProps?: IconBaseProps): React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement>, "ref" | "height" | "width"> & {
    size?: (number | "sm" | "md" | "lg") | undefined;
} & React.RefAttributes<Omit<SVGSVGElement, "ref">>>;
export { createIcon };
