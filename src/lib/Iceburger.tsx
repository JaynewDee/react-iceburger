import { CSSProperties, useRef, useState } from "react";

const burgerStyles = (basis: number) => {
    const lineWidth = `${basis * .66}rem`;
    const lineThickness = `${basis / 15}rem`;

    const linesGeneral = {
        position: "absolute",
        width: lineWidth,
        height: lineThickness,
        backgroundColor: "black",
        borderRadius: `${basis}px`
    }

    return {
        containerStyles: {
            display: "flex",
            flexFlow: "column nowrap",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
            width: `${basis}rem`,
            height: `${basis}rem`,
            cursor: "pointer"
        } as CSSProperties,

        topLineStyles: {
            ...linesGeneral,
            top: `${basis / 3}rem`,
        } as CSSProperties,

        midLineStyles: {
            ...linesGeneral,
            top: `${basis / 2}rem`,
        } as CSSProperties,

        botLineStyles: {
            ...linesGeneral,
            top: `${basis * .66}rem`,
        } as CSSProperties
    }
}
interface IceburgerProps {
    sizeBasis: number,
    animationKind?: "standard" | "something"
}

export default function Iceburger({ sizeBasis, animationKind = "standard" }: IceburgerProps) {
    const [state, setState] = useState(false)

    const {
        containerStyles,
        topLineStyles,
        midLineStyles,
        botLineStyles
    } = burgerStyles(sizeBasis);

    const [topRef, midRef, botRef] = [
        useRef<HTMLDivElement | null>(null),
        useRef<HTMLDivElement | null>(null),
        useRef<HTMLDivElement | null>(null)
    ];

    const toggleState = () => {
        if (animationKind === "standard") {
            animateStandard(state, sizeBasis, topRef.current, midRef.current, botRef.current);
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

function animateStandard(state: boolean, basis: number, topEl: LineRefCurrent, midEl: LineRefCurrent, botEl: LineRefCurrent) {

    const framesTop = [
        {
            top: `${basis / 3}rem`,
            transform: "rotate(0deg)",
        },
        {
            top: `${basis / 2}rem`,
            transform: "rotate(0deg)",
        },
        {
            top: `${basis / 2}rem`,
            transform: "rotate(45deg)",
        }
    ]

    const framesMid = [
        {
            width: `${basis * .66}rem`
        },
        {
            width: 0
        },
    ]

    const framesBot = [
        {
            top: `${basis * .66}rem`,
            transform: "rotate(0deg)",
        },
        {
            top: `${basis / 2}rem`,
            transform: "rotate(0deg)",
        },
        {
            transform: "rotate(-45deg)",
            top: `${basis / 2}rem`,
        }
    ]

    const animationOptions = (state: boolean) => ({
        duration: 200,
        iterations: 1,
        fill: state ? "backwards" : "forwards" as FillMode,
    });

    if (state) {
        topEl?.animate(framesTop, animationOptions(state)).reverse();
        midEl?.animate(framesMid, animationOptions(state)).reverse();
        botEl?.animate(framesBot, animationOptions(state)).reverse();
    } else {
        topEl?.animate(framesTop, animationOptions(state));
        midEl?.animate(framesMid, animationOptions(state));
        botEl?.animate(framesBot, animationOptions(state));
    }
}
