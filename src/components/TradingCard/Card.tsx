import React from "react";
import CardHeader, { CardHeaderProps } from "../CardHeader";
import CardBody from "../CardBody";

export interface CardProps {
    /**
     * Contents of the header prop. See CardHeader.
     */
    header: CardHeaderProps;
    /**
     * What will be displayed in the card body.
     */
    children: JSX.Element;
}

const Card = (props: CardProps) => {
    return (<div>
        <CardHeader {...props.header}></CardHeader>
        <CardBody>
            {props.children}
        </CardBody>
    </div>);
};

export default Card;
