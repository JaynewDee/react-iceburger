import { CSSProperties } from "react";

export type Orientation = "left" | "right";

export interface DrawerProps {
  open: boolean;
  orientation: Orientation;
  children?: JSX.Element | JSX.Element[];
  width?: number;
  height?: number;
  duration?: number;
  className?: string;
  style?: CSSProperties;
}

export function Drawer({
  open,
  orientation,
  children,
  width = 250,
  height = 500,
  duration = 1000,
  className = "",
  style = {},
}: DrawerProps) {
  document.documentElement.style.overflow = "hidden";

  const drawerStyles = (open: boolean, orientation: Orientation) => {
    const locationOrigin = "translateX(0)";

    const drawerBaseStyles = {
      width: style.width || width,
      height: style.height || height,
      transform: locationOrigin,
      position: "absolute",
      transition: `all ${duration}ms`,
      zIndex: 25
    };

    const orientationStyles =
      orientation === "left"
        ? { left: 0 }
        : { right: 0 };

    const stateStyles = open
      ? {
        transform: locationOrigin,
      }
      : {
        transform:
          orientation === "left"
            ? `translateX(-${width * 1.01}px)`
            : `translateX(${width * 1.01}px)`,
      };

    return {
      ...drawerBaseStyles,
      ...orientationStyles,
      ...stateStyles,
      ...style,
    } as CSSProperties;
  };

  return (
    <div style={drawerStyles(open, orientation)} className={className}>
      {children}
    </div>
  );
}
