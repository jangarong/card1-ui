import React from "react";
import styles from "./TradingCard.module.css";
import { usePalette } from '../Palette/Palette';
import { CardHeader, CardBody, CardFooter } from '../index';
import { CardTitle } from './CardTitle';

export interface TradingCardProps {
    /**
     * Title of the card
     */
    title: string;
    /**
     * Subtitle of the card
     */
    subtitle: string;
    /**
     * Item that will be displayed on the top right of the card.
     */
    tip?: React.JSX.Element;
    /**
     * Body contents of the card
     */
    body: React.JSX.Element;
    /**
     * Footer contents of the card
     */
    footer: React.JSX.Element;
}


const TradingCard = (props: TradingCardProps) => {
    const title = (<CardTitle {...{ title: (<div>{props.title}</div>), subtitle: (<div>{props.subtitle}</div>), isCentered: !props.tip }} />);
    return (
        <div>
            <CardHeader title={title} tip={props.tip} />
            <CardBody>
                {props.body}
            </CardBody>
            <CardFooter>
                {props.footer}
            </CardFooter>
        </div>
    );
};

export default TradingCard;
