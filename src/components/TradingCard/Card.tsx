import React from "react";
import CardHeader, { CardHeaderProps } from "../CardHeader/CardHeader";

export interface CardProps {
    header?: CardHeaderProps;
}

const Card = (props: CardProps) => {
    return (<div>
        {!!props.header ? <CardHeader {...props.header} /> : null}
        </div>);
};

export default Card;
