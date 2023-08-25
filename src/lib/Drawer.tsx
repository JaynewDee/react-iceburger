import { CSSProperties, MutableRefObject, useEffect, useRef, useState } from "react";

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
  document.documentElement.style.overflowX = "hidden";

  const visibilityRef = useRef<HTMLDivElement | null>(null);

  const isVisible = useIsVisible(visibilityRef)

  useEffect(() => {
    if (isVisible) {
      visibilityRef.current?.blur()
      const children = visibilityRef.current?.children;

      if (children instanceof HTMLCollection) {
        for (let i = 0; i < children.length; i++) {
          const child = children[i];
          if (child instanceof HTMLElement) {
            (child as HTMLElement).blur();
            child.tabIndex = -1;
          }
        }
      }
    } else {
      const children = visibilityRef.current?.children;

      if (children instanceof HTMLCollection) {
        for (let i = 0; i < children.length; i++) {
          const child = children[i];
          if (child instanceof HTMLElement) {
            child.tabIndex = 0;
          }
        }
      }
    }
  }, [open]);

  const drawerStyles = (open: boolean, orientation: Orientation) => {
    const locationOrigin = "translateX(0)";

    const drawerBaseStyles = {
      width: style.width || `${width}px`,
      height: style.height || `${height}px`,
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
    <div style={drawerStyles(open, orientation)} className={className} ref={visibilityRef} tabIndex={-1}>
      {children}
    </div>
  );
}

/* 
  Custom hook uses intersection observer
  to determine when menu is open / active / visible
*/
function useIsVisible(ref: MutableRefObject<HTMLDivElement | null>) {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIntersecting(entry.isIntersecting);
      },
      { threshold: .1 },
    );

    ref.current && observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, [ref]);

  return isIntersecting;
}
