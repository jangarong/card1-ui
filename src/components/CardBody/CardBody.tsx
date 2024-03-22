import React from "react";
import styles from "./CardBody.module.css";
import { usePalette } from '../Palette/Palette';

export interface CardBodyProps {
    /**
     * Body contents of the card
     */
    children: React.JSX.Element;
}


const CardBody = (props: CardBodyProps) => {
    const { palette } = usePalette();
    const style = { backgroundColor: palette.base.primary, borderColor: palette.base.tertiary };
    return (
        <div className={styles.CardBody + " " + styles.Border} style={style}>
            <div>{props.children}</div>
        </div>
    );
};

export default CardBody;
