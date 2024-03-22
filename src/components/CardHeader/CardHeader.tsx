import React from "react";
import styles from "./CardHeader.module.css";
import { usePalette } from "../Palette";

export interface CardHeaderProps {
    /**
     * If present, this will be placed on the right side of the header.
     */
    title: JSX.Element;
    /**
     * If present, this will be placed on the right side of the header.
     */
    tip?: JSX.Element;
}


const CardHeader = (props: CardHeaderProps) => {
    const { palette } = usePalette();
    const style = {
        backgroundColor: palette.base.primary,
        borderColor: palette.base.tertiary
    }
    if (!!props.tip){
        return (
            <div className={styles.CardHeader + " " + styles.TopBorder} style={style}>
                <div>{props.title}</div>
                <div>{props.tip}</div>
            </div>
        );
    }
    return (
        <div className={styles.CardHeaderCenter + " " + styles.TopBorder} style={style}>
            <div>{props.title}</div>
        </div>
    );
};

export default CardHeader;

