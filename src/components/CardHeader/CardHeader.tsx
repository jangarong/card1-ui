import React from "react";

export interface CardHeaderProps {
    /**
     * Title of the card. This will be centered if this is the only element.
     * Otherwise, it will be put on the left.
     */
    children: JSX.Element;
    /**
     * If present, this will be placed on the right side of the header.
     */
    tip?: JSX.Element;
}


const CardHeader = (props: CardHeaderProps) => {
    return (
        <div>
            <div>{props.children}</div>
            {!!props.tip ? <div>{props.tip}</div> : null}
        </div>
    );
};

export default CardHeader;

