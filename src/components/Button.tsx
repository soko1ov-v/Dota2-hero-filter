import { CSSProperties } from "react";

interface ButtonProps {
    className: string;
    text?: string;
    onClick: ()=> void;
    style?: CSSProperties;
}

export function Button({className, text, style, onClick}:ButtonProps) {

    return (
        <button className={className} style={style} onClick={onClick}>{text}</button>
    )
}