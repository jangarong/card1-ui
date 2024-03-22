import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { CardBody, CardHeader, PaletteProvider } from "../../components";
import { CardBodyProps } from "../../components/CardBody/CardBody";
import Magichanics from "../assets/magichanics.png";
import styles from "./CardBody.stories.module.css";
import Image from "next/image";
import Next from "../assets/icons/next.png";
import { CardTitle } from "../../components/TradingCard/CardTitle";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: "card1-ui/CardBody",
    component: CardBody,
    tags: ['autodocs'],
} as ComponentMeta<typeof CardBody>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const CardBodyTestTemplate: ComponentStory<typeof CardBody> = (props: CardBodyProps) => (
    <div className={styles.Card}>
        <CardBody {...props} />
    </div>
);

const CardBodyTestTemplate2: ComponentStory<typeof CardBody> = (props: CardBodyProps) => {
    const title = <CardTitle title={<div>Jan Garong</div>} subtitle={<div>Software Developer</div>} />;
    const tip = (<div className={styles.IconContainer}>
        <Image src={Next} alt={"Next"} width={46} />
    </div>);
    return (<div className={styles.Card}>
        <PaletteProvider>
            {/* <CardHeader title={title} tip={tip} /> */}
            <CardBody {...props} />
        </PaletteProvider>
    </div>);
};

export const CardBodyTest1 = CardBodyTestTemplate.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
CardBodyTest1.args = {
    children: (<div style={{ display: 'flex', justifyContent: 'center' }}>
        <Image src={Magichanics} alt="magichanics" className={styles.BodyArt} width={400} />
    </div>),
};

export const CardBodyAndHeaderTest = CardBodyTestTemplate2.bind({});

CardBodyAndHeaderTest.args = {
    children: (<div style={{ display: 'flex', justifyContent: 'center' }}>
        <Image src={Magichanics} alt="magichanics" className={styles.BodyArt} width={400} />
    </div>),
};
