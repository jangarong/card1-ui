import React from "react";
import styles from "./CardBody.module.css";
import { usePalette } from '../Palette/Palette';

export interface CardBodyProps {
    /**
     * Body contents of the card
     */
    children: React.JSX.Element;
    // TODO: Add extra settings for CSS customization/card customization
}


const CardBody = (props: CardBodyProps) => {
    const { palette } = usePalette();
    return (
        <div className={styles.CardBody + " " + styles.Border}>
            <div>{props.children}</div>
        </div>
    );
};

export default CardBody;

