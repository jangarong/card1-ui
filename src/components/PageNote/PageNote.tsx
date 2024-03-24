import styles from "./PageNote.module.css";
import { usePalette } from "../index";
import React from "react";
export interface PageNoteProps {
    children: JSX.Element;
}

const PageNote = ({ children } : PageNoteProps) => {
    const { palette } = usePalette();
    const style = {
        backgroundColor: palette.base.primary,
        borderColor: palette.base.tertiary
    }
    return (<div style={style} className={styles.CardHeaderCenter + " " + styles.TopBorder}>
        {children}
    </div>);
}

export default PageNote;