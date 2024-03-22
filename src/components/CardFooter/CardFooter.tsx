import React from "react";
import styles from "./CardFooter.module.css";
import { usePalette } from "../Palette";

export interface CardFooterProps {
    /**
     * Contents inside of the footer
     */
    children: React.JSX.Element;
}


const CardFooter = (props: CardFooterProps) => {
    const { palette } = usePalette();
    const style = {
        backgroundColor: palette.base.primary,
        borderColor: palette.base.tertiary
    }
    return (
        <div className={styles.CardFooterCenter + " " + styles.BottomBorder} style={style}>
            {props.children}
        </div>
    );
};

export default CardFooter;

