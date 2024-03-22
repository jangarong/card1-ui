import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { CardFooter, CardBody, CardHeader, PaletteProvider } from "../../components";
import { CardFooterProps } from "../../components/CardFooter/CardFooter";
import Magichanics from "../assets/magichanics.png";
import styles from "./CardFooter.stories.module.css";
import Image from "next/image";
import Next from "../assets/icons/next.png";
import Github from "../assets/icons/github.png";
import Linkedin from "../assets/icons/linkedin.png";
import Resume from "../assets/icons/resume.png";
import { CardTitle } from "../../components/TradingCard/CardTitle";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: "card1-ui/CardFooter",
    component: CardFooter,
    tags: ['autodocs'],
} as ComponentMeta<typeof CardFooter>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const CardFooterTestTemplate: ComponentStory<typeof CardFooter> = (props: CardFooterProps) => (
    <div className={styles.Card}>
        <CardFooter {...props} />
    </div>
);

const CardFooterTestTemplate2: ComponentStory<typeof CardFooter> = (props: CardFooterProps) => {
    return (<div className={styles.Card}>
        <PaletteProvider>
            <CardBody>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <Image src={Magichanics} alt="magichanics" className={styles.BodyArt} width={400} />
                </div>
            </CardBody>
            <CardFooter {...props} />
        </PaletteProvider>
    </div>);
};

export const CardFooterTest1 = CardFooterTestTemplate.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
CardFooterTest1.args = {
    children: (<div style={{ display: 'flex', justifyContent: 'center' }}>
        <div className={styles.BottomIconContainer}>
            <Image src={Resume} alt={"Next"} width={46} />
            <Image src={Linkedin} alt={"Next"} width={46} />
            <Image src={Github} alt={"Next"} width={46} />
        </div>
    </div>),
};

export const CardFooterAndBodyTest = CardFooterTestTemplate2.bind({});

CardFooterAndBodyTest.args = {
    children: (<div style={{ display: 'flex', justifyContent: 'center' }}>
        <div className={styles.BottomIconContainer}>
            <Image src={Resume} alt={"Next"} width={46} />
            <Image src={Linkedin} alt={"Next"} width={46} />
            <Image src={Github} alt={"Next"} width={46} />
        </div>
    </div>),
};
