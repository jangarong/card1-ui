import React from "react";
import "./CardTitle.css";

export interface CardTitleProps {
    /**
     * Title string.
     */
    children: JSX.Element;
    /**
     * This is the subtitle that appears below the title.
     */
    subtitle?: string;
}


const CardTitle = (props: CardTitleProps) => {
    return (
        <div className="TitleContainer Default">
            <div className="Title">{props.children}</div>
            <div className="Subtitle">{props.subtitle}</div>
        </div>
    );
};

export default CardTitle;

