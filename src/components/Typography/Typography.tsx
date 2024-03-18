import React from "react";
import styles from "./Typography.module.css";

export interface TypographyProps {
    /**
     * Text content
     */
    children: JSX.Element;
    /**
     * Class name string.
     */
    type?: "h1" | "h2";
}


const Typography = (props: TypographyProps) => {
    const className = !!props.type ? `${styles.Typography} ${styles[props.type.toUpperCase()]}` : styles.Typography;
    return (
        <div className={className}>
            {props.children}
        </div>
    );
};

export default Typography;
