import React from "react";
import styles from "./CardHeader.module.css";

export interface CardHeaderProps {
    /**
     * If present, this will be placed on the right side of the header.
     */
    children: JSX.Element;
    /**
     * If present, this will be placed on the right side of the header.
     */
    tip?: JSX.Element;
    // TODO: Add extra settings for CSS customization/card customization
}


const CardHeader = (props: CardHeaderProps) => {
    if (!!props.tip){
        return (
            <div className={styles.CardHeader + " " + styles.TopBorder}>
                <div>{props.children}</div>
                <div>{props.tip}</div>
            </div>
        );
    }
    return (
        <div className={styles.CardHeader + " " + styles.TopBorder}>
            <div>{props.children}</div>
        </div>
    );
};

export default CardHeader;

