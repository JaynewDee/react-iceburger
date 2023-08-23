
declare module "react-iceburger" {
    import React, { CSSProperties } from "react";

    export interface IceburgerOptions {
        size?: number;
        color?: string;
        kind?: "standard" | "honeycomb" | "arrow";
        duration?: number;
        lineThickness?: LineThickness;
        className?: string;
    }

    export interface DrawerProps {
        open: boolean
        orientation: Orientation
        children?: JSX.Element | JSX.Element[],
        width?: number;
        duration?: number;
        className?: string;
        style?: CSSProperties
    }

    export type Orientation = "left" | "right"

    export type LineThickness = "thin" | "standard" | "bold";
    export function Iceburger({ size, kind, duration, color, lineThickness, className }: IceburgerOptions): React.JSX.Element;
    export function Drawer({ open, orientation, children, width, duration, className, style }: DrawerProps): React.JSX.Element;
}
