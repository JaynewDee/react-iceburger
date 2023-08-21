import { CSSProperties, useRef, useState } from "react";

const sizeBasis = 3;
const lineWidth = `${sizeBasis * .66}rem`;
const lineThickness = `${sizeBasis / 15}rem`;

const linesGeneral = {
    position: "absolute",
    width: lineWidth,
    height: lineThickness,
    backgroundColor: "black",
    transition: "all 3s"
}

const burgerStylesClosed = {
    containerStyles: {
        display: "flex",
        flexFlow: "column nowrap",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        width: `${sizeBasis}rem`,
        height: `${sizeBasis}rem`,
        cursor: "pointer"
    } as CSSProperties,

    topLineStyles: {
        ...linesGeneral,
        top: `${sizeBasis / 3}rem`,
        // borderRadius: `${sizeBasis}px ${sizeBasis}px 0 0`
    } as CSSProperties,

    midLineStyles: {
        ...linesGeneral,
        top: `${sizeBasis / 2}rem`,
    } as CSSProperties,

    botLineStyles: {
        ...linesGeneral,
        top: `${sizeBasis * .66}rem`,
        // borderRadius: `0 0 ${sizeBasis}px ${sizeBasis}px`
    } as CSSProperties
}


export default function Iceburger() {
    const [state, setState] = useState(false)

    console.log(state ? "Menu open." : "Menu closed.");

    const { containerStyles, topLineStyles, midLineStyles, botLineStyles } = burgerStylesClosed;

    const topRef = useRef<HTMLDivElement | null>(null);
    const midRef = useRef<HTMLDivElement | null>(null);
    const botRef = useRef<HTMLDivElement | null>(null);

    const toggleState = () => {
        setState(prev => !prev)
        if (state) animateOpen(topRef.current, midRef.current, botRef.current);
        else animateClose(topRef.current, midRef.current, botRef.current);
    };

    return (
        <div style={containerStyles} onClick={toggleState}>
            <div style={topLineStyles} ref={topRef}></div>
            <div style={midLineStyles} ref={midRef}></div>
            <div style={botLineStyles} ref={botRef}></div>
        </div>
    )
}

const openFramesTop = [
    {
        top: `${sizeBasis / 3}rem`,
    },
    {
        top: `${sizeBasis * .66}rem`,
    }
]

const openFramesMid = [
    {
        top: `${sizeBasis / 2}rem`,
    },
    {
        top: `${sizeBasis * .66}rem`,
    }
]

const openFramesBot = [
    {
        top: `${sizeBasis * .66}rem`,
    },
    {
        top: `${sizeBasis * .66}rem`,
    }
]

const openOptions = { duration: 1, iterations: 1, fillMode: "forwards" };

type RefCurrent = HTMLDivElement | null;

function animateOpen(topEl: RefCurrent, midEl: RefCurrent, botEl: RefCurrent) {
    topEl?.animate(openFramesTop, openOptions);
    midEl?.animate(openFramesMid, openOptions);
    botEl?.animate(openFramesBot, openOptions);
    console.log(topEl?.getAnimations())
}

function animateClose(topEl: RefCurrent, midEl: RefCurrent, botEl: RefCurrent) { }