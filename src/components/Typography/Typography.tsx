import React from "react";
import styles from "./Typography.module.css";

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
    const className = !!textType ? `${styles.Typography} ${styles[textType.toUpperCase()]}` : styles.Typography;
    return (
        <div className={className}>
            {children}
        </div>
    );
};

export default Typography;
