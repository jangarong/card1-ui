import React from "react";
import styles from "./Typography.module.css";
import { ColorTypes, usePalette } from "../Palette/Palette";

/**
 * Typography component used for writing any text.
 */
export interface TypographyProps {
    /**
     * Text content.
     */
    children: JSX.Element;
    /**
     * CSS text class name as a string. Can be one of the following values:
     * "h1", "h2", p".
     */
    textType?: "h1" | "h2" | "p";
    /**
     * 
     */
    align?: "center" | "inherit" | "left" | "right" | "justify";
}

const Typography = ({ children, textType = "p", align = "inherit" }: TypographyProps) => {
    const { palette }: { palette: ColorTypes } = usePalette();
    const colorMap = {
        h1: palette.text.primary,
        h2: palette.text.secondary,
        p: palette.text.primary
    }
    const color = colorMap[textType];
    const className = !!textType ? `${styles.Typography} ${styles[textType.toUpperCase()]}` : styles.Typography;
    const style = {color: color, textAlign: align}
    return (
        <div className={className} style={style}>
            {children}
        </div>
    );
};

export default Typography;
