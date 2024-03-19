import Typography from "../Typography";
import styles from "./CardTitle.module.css";
import React from "react";

export interface CardTitleProps {
    /**
     * Title string.
     */
    title: JSX.Element;
    /**
     * This is the subtitle that appears below the title.
     */
    subtitle: JSX.Element;
    isCentered?: boolean;
}



export const CardTitle = (props: CardTitleProps) => {
    if (!props.isCentered) {
        return (
            <div className={styles.TitleContainer}>
                <Typography textType="h1">{props.title}</Typography>
                <Typography textType="h2">{props.subtitle}</Typography>
            </div>
        );
    }
    return (
        <div className={styles.TitleContainer + " " + styles.Center}>
            <Typography textType="h1">{props.title}</Typography>
            <Typography textType="h2">{props.subtitle}</Typography>
        </div>
    );
};

