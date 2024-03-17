import React from "react";
import styles from "./CardBody.module.css";

export interface CardBodyProps {
    /**
     * If present, this will be placed on the right side of the header.
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

