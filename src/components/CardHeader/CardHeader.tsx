import React from "react";
import "./CardHeader.css";

export interface CardHeaderProps {
    /**
     * If present, this will be placed on the right side of the header.
     */
    children: JSX.Element;
    /**
     * If present, this will be placed on the right side of the header.
     */
    tip?: JSX.Element;
}


const CardHeader = (props: CardHeaderProps) => {
    return (
        <div className="CardHeader TopBorder">
            <div>{props.children}</div>
            {!!props.tip ? <div>{props.tip}</div> : null}
        </div>
    );
};

export default CardHeader;

