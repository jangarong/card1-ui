import React from "react";

export interface CardBodyProps {
    title?: JSX.Element;
    icons?: string[];
    menu?: JSX.Element[];
}


const CardBody = (props: CardBodyProps) => {
    return <div>{props.title}</div>;
};

export default CardBody;

