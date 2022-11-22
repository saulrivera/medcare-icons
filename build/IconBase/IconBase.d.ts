import React from "react";
declare type IconSize = "sm" | "md" | "lg" | number;
declare type IconBaseProps = Omit<React.SVGProps<SVGSVGElement>, "ref" | "height" | "width"> & {
    size?: IconSize;
};
declare const IconBase: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement>, "ref" | "height" | "width"> & {
    size?: IconSize | undefined;
} & React.RefAttributes<SVGSVGElement>>;
export type { IconBaseProps };
export { IconBase };
