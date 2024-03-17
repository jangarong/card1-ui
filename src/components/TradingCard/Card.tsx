import React from "react";
import CardHeader, { CardHeaderProps } from "../CardHeader";
import CardBody from "../CardBody";

export interface CardProps {
    header: CardHeaderProps;
    children: JSX.Element;
}

const Card = (props: CardProps) => {
    return (<div>
        <CardHeader {...props.header} />
        <CardBody>
            {props.children}
        </CardBody>
    </div>);
};

export default Card;
