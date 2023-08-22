declare module "react-iceburger" {
    import React from "react";
    export interface IceburgerOptions {
        size?: number;
        color?: string;
        kind?: "standard" | "something";
        duration?: number;
        lineThickness?: LineThickness;
    }
    export type LineThickness = "thin" | "standard" | "bold";
    export function Iceburger({ size, kind, duration, color, lineThickness }: IceburgerOptions): React.JSX.Element;
}
