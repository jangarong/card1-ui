import React from "react";
import styles from "./CardBody.module.css";

export interface CardBodyProps {
    /**
     * Body contents of the card
     */
    children: React.JSX.Element;
    // TODO: Add extra settings for CSS customization/card customization
}


const CardBody = (props: CardBodyProps) => {
    return (
        <div className={styles.CardBody + " " + styles.Border}>
            <div>{props.children}</div>
        </div>
    );
};

export default CardBody;

