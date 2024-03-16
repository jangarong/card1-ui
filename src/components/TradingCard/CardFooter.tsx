import React from "react";

export interface CardFooterProps {
    title?: string;
    icons?: string[];
    menu?: string[];
}


const CardFooter = (props: CardFooterProps) => {
    return <div>{props.title}</div>;
};

export default CardFooter;

