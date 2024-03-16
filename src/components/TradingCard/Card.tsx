import React from "react";
import CardHeader, { CardHeaderProps } from "./CardHeader";
import CardBody, { CardBodyProps } from "./CardBody";
import CardFooter, { CardFooterProps } from "./CardFooter";

export interface CardProps {
    header?: CardHeaderProps;
    body?: CardBodyProps;
    footer?: CardFooterProps;
}


const Card = (props: CardProps) => {
    return (<div>
        {!!props.header ? <CardHeader {...props.header} /> : null}
        {!!props.body ? <CardBody {...props.body} /> : null}
        {!!props.footer ? <CardFooter {...props.footer} /> : null}
        </div>);
};

export default Card;
