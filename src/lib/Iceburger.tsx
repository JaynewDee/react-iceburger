/* @ts-ignore */
import React, { CSSProperties, Dispatch, SetStateAction, useRef, useState } from "react";

export interface IceburgerOptions {
    size?: number,
    color?: string,
    kind?: "standard" | "honeycomb" | "arrow",
    // in millis
    duration?: number,
    lineThickness?: LineThickness,
    onClick?: any;
    className?: string;
}

export type LineThickness = "thin" | "standard" | "bold";

const burgerStyles = (size: number, color: string, kind: string, lineThickness: LineThickness) => {
    const lineWidth = `${size * (kind === "honeycomb" ? .5 : .66)}rem`;

    const lineHeight = lineThickness === "thin" ? `${size / 25}rem` : lineThickness === "standard" ? `${size / 20}rem` : `${size / 15}rem`

    const linesGeneral = {
        position: "absolute",
        width: lineWidth,
        height: lineHeight,
        backgroundColor: `${color}`,
        borderRadius: `${size}px`
    }

    return {
        containerStyles: {
            display: "flex",
            flexFlow: "column nowrap",
            justifyContent: "flex-start",
            alignItems: kind === "arrow" ? "flex-end" : "center",
            cursor: "pointer",
            background: "none",
            position: "relative",
            zIndex: 30,
            width: lineWidth,
            height: `${size / 1.5}rem`,
        } as CSSProperties,

        topLineStyles: {
            ...linesGeneral,
            top: `${(size / 3) / 2}rem`,
        } as CSSProperties,

        midLineStyles: {
            ...linesGeneral,
            width: kind === "honeycomb" ? `${size * .66}rem` : lineWidth,
            top: `${(size / 2) / 1.5}rem`,
        } as CSSProperties,

        botLineStyles: {
            ...linesGeneral,
            top: `${(size * .66) / 1.33}rem`,
        } as CSSProperties
    }
}

export function Iceburger({ size = 3, kind = "standard", duration = 200, color = "black", lineThickness = "standard", onClick, className = "" }: IceburgerOptions) {
    const validKind = kind === "standard" || kind === "honeycomb" || kind === "arrow";
    const validThickness = lineThickness === "thin" || lineThickness === "standard" || lineThickness === "bold";

    if (!validKind) console.error("Iceburger received invalid 'kind' prop.")
    if (!validThickness) console.error("Iceburger received invalid 'lineThickness' prop")

    const [state, setState] = useState(false)

    const {
        containerStyles,
        topLineStyles,
        midLineStyles,
        botLineStyles
    } = burgerStyles(size, color, kind, lineThickness);

    type LineRef = HTMLDivElement | null;

    const [topRef, midRef, botRef] = [
        useRef<LineRef>(null),
        useRef<LineRef>(null),
        useRef<LineRef>(null)
    ];

    const standardAnimation = kind === "standard" || kind === "honeycomb";
    const arrowAnimation = kind === "arrow";

    const toggleState = () => {
        if (standardAnimation) {
            animateStandard(state, kind, size, duration, topRef.current, midRef.current, botRef.current);
        } else if (arrowAnimation) {
            animateArrow(state, kind, size, color, duration, topRef.current, midRef.current, botRef.current)
        }
        onClick()
        setState(prev => !prev)
    };

    return (
        <div style={containerStyles} onClick={toggleState} className={className}>
            <div style={topLineStyles} ref={topRef}></div>
            <div style={midLineStyles} ref={midRef}></div>
            <div style={botLineStyles} ref={botRef}></div>
        </div>
    )
}

type LineRefCurrent = HTMLDivElement | null;

function animateStandard(state: boolean, kind: string, size: number, duration: number, topEl: LineRefCurrent, midEl: LineRefCurrent, botEl: LineRefCurrent) {

    const framesTop = [
        {
            top: `${(size / 3) / 2}rem`,
            transform: "rotate(0deg)",
            width: kind === "honeycomb" ? `${size * .5}rem` : `${size * .66}rem`
        },
        {
            top: `${(size / 2) / 1.5}rem`,
            transform: "rotate(0deg)",
            width: kind === "honeycomb" ? `${size * .5}rem` : `${size * .66}rem`
        },
        {
            top: `${(size / 2) / 1.5}rem`,
            transform: "rotate(45deg)",
            width: `${size * .5}rem`
        }
    ]

    const framesMid = [
        {
            width: `${size * .66}rem`
        },
        {
            width: 0
        },
    ]

    const framesBot = [
        {
            top: `${(size * .66) / 1.33}rem`,
            transform: "rotate(0deg)",
            width: kind === "honeycomb" ? `${size * .5}rem` : `${size * .66}rem`
        },
        {
            top: `${(size / 2) / 1.5}rem`,
            transform: "rotate(0deg)",
            width: kind === "honeycomb" ? `${size * .5}rem` : `${size * .66}rem`
        },
        {
            top: `${(size / 2) / 1.5}rem`,
            transform: "rotate(-45deg)",
            width: `${size * .5}rem`
        }
    ]

    const animationOptions = {
        duration,
        iterations: 1,
        fill: state ? "backwards" : "forwards" as FillMode,
    };

    if (state) {
        topEl?.animate(framesTop, animationOptions).reverse();
        midEl?.animate(framesMid, animationOptions).reverse();
        botEl?.animate(framesBot, animationOptions).reverse();
    } else {
        topEl?.animate(framesTop, animationOptions);
        midEl?.animate(framesMid, animationOptions);
        botEl?.animate(framesBot, animationOptions);
    }
}

function animateArrow(state: boolean, kind: string, size: number, color: string, duration: number, topEl: LineRefCurrent, midEl: LineRefCurrent, botEl: LineRefCurrent) {

    const framesTop = [
        {
            transform: "rotate(0deg)",
            width: kind === "honeycomb" ? `${size * .5}rem` : `${size * .66}rem`
        },
        {
            transform: "rotate(30deg)",
            width: kind === "honeycomb" ? `${size * .5}rem` : `${size * .66}rem`
        },
        {
            transform: "rotate(30deg)",
            width: `${size * .5}rem`
        }
    ]

    const framesMid = [
        {
            width: `${size * .66}rem`,
            outline: "none"
        },
        {
            width: `${size * .66}rem`,
            outline: "none"
        },
        {
            width: `${size * .05}rem`,
            outline: `${size * .03}rem solid ${color}`
        },
    ]

    const framesBot = [
        {
            transform: "rotate(0deg)",
            width: kind === "honeycomb" ? `${size * .5}rem` : `${size * .66}rem`
        },
        {
            transform: "rotate(-30deg)",
            width: kind === "honeycomb" ? `${size * .5}rem` : `${size * .66}rem`
        },
        {
            transform: "rotate(-30deg)",
            width: `${size * .5}rem`
        }
    ]

    const animationOptions = {
        duration,
        iterations: 1,
        fill: state ? "backwards" : "forwards" as FillMode,
    };

    if (state) {
        topEl?.animate(framesTop, animationOptions).reverse();
        midEl?.animate(framesMid, animationOptions).reverse();
        botEl?.animate(framesBot, animationOptions).reverse();
    } else {
        topEl?.animate(framesTop, animationOptions);
        midEl?.animate(framesMid, animationOptions);
        botEl?.animate(framesBot, animationOptions);
    }
}

