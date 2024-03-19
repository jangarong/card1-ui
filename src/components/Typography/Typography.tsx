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
}

const Typography = ({ children, textType = "p" }: TypographyProps) => {
    const { palette }: { palette: ColorTypes } = usePalette();
    const colorMap = {
        h1: palette.text.primary,
        h2: palette.text.secondary,
        p: palette.text.primary
    }
    const color = colorMap[textType];
    const className = !!textType ? `${styles.Typography} ${styles[textType.toUpperCase()]}` : styles.Typography;
    return (
        <div className={className} style={{color: color}}>
            {children}
        </div>
    );
};

export default Typography;
