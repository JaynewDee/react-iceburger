import { CSSProperties, useRef, useState } from "react";

type LineThickness = "thin" | "standard" | "bold"

const burgerStyles = (size: number, color: string, lineThickness: LineThickness) => {
    const lineWidth = `${size * .66}rem`;

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
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
            width: `${size}rem`,
            height: `${size}rem`,
            cursor: "pointer",
            background: "none"
        } as CSSProperties,

        topLineStyles: {
            ...linesGeneral,
            top: `${size / 3}rem`,
        } as CSSProperties,

        midLineStyles: {
            ...linesGeneral,
            top: `${size / 2}rem`,
        } as CSSProperties,

        botLineStyles: {
            ...linesGeneral,
            top: `${size * .66}rem`,
        } as CSSProperties
    }
}

interface IceburgerOptions {
    size?: number,
    color?: string,
    // add new animation kinds here
    kind?: "standard" | "something",
    // in millis
    duration?: number,
    lineThickness?: LineThickness
}

export default function Iceburger({ size = 3, kind = "standard", duration = 200, color = "black", lineThickness = "standard" }: IceburgerOptions) {
    const [state, setState] = useState(false)

    const {
        containerStyles,
        topLineStyles,
        midLineStyles,
        botLineStyles
    } = burgerStyles(size, color, lineThickness);

    const [topRef, midRef, botRef] = [
        useRef<HTMLDivElement | null>(null),
        useRef<HTMLDivElement | null>(null),
        useRef<HTMLDivElement | null>(null)
    ];

    const toggleState = () => {
        if (kind === "standard") {
            animateStandard(state, size, duration, topRef.current, midRef.current, botRef.current);
        }

        setState(prev => !prev)
    };

    return (
        <div style={containerStyles} onClick={toggleState}>
            <div style={topLineStyles} ref={topRef}></div>
            <div style={midLineStyles} ref={midRef}></div>
            <div style={botLineStyles} ref={botRef}></div>
        </div>
    )
}

type LineRefCurrent = HTMLDivElement | null;

function animateStandard(state: boolean, size: number, duration: number, topEl: LineRefCurrent, midEl: LineRefCurrent, botEl: LineRefCurrent) {

    const framesTop = [
        {
            top: `${size / 3}rem`,
            transform: "rotate(0deg)",
        },
        {
            top: `${size / 2}rem`,
            transform: "rotate(0deg)",
        },
        {
            top: `${size / 2}rem`,
            transform: "rotate(45deg)",
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
            top: `${size * .66}rem`,
            transform: "rotate(0deg)",
        },
        {
            top: `${size / 2}rem`,
            transform: "rotate(0deg)",
        },
        {
            transform: "rotate(-45deg)",
            top: `${size / 2}rem`,
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
