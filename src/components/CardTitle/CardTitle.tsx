import React from "react";

export interface CardTitleProps {
    /**
     * Title string.
     */
    title: string;
    /**
     * This is the subtitle that appears below the title.
     */
    subtitle?: string;
}


const CardTitle = (props: CardTitleProps) => {
    return (
        <div>
            <div>{props.title}</div>
            <div>{props.subtitle}</div>
        </div>
    );
};

export default CardTitle;

