import React from "react";
import styles from "./CardTitle.module.css";

// TODO: Could replace with Typography?
export interface CardTitleProps {
    /**
     * Title string.
     */
    // TODO: Should it be children or string only
    title: string;
    /**
     * This is the subtitle that appears below the title.
     */
    subtitle?: string;
}


const CardTitle = (props: CardTitleProps) => {
    return (
        <div className={styles.TitleContainer + " " + styles.Default}>
            <div className={styles.Title}>{props.title}</div>
            <div className={styles.Subtitle}>{props.subtitle}</div>
        </div>
    );
};

export default CardTitle;

