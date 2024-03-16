import React from "react";

export interface CardHeaderProps {
    title?: string;
    icons?: string[];
    // menu?: JSX.Element[];
}


const CardHeader = (props: CardHeaderProps) => {
    return <div><div>{props.title}</div></div>;
};

export default CardHeader;

