import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { TradingCard, PaletteProvider } from "../../components";
import Magichanics from "../assets/magichanics.png";
import styles from "./TradingCard.stories.module.css";
import Image from "next/image";
import Next from "../assets/icons/next.png";
import Github from "../assets/icons/github.png";
import Linkedin from "../assets/icons/linkedin.png";
import Resume from "../assets/icons/resume.png";
import { CardTitle } from "../../components/TradingCard/CardTitle";
import { TradingCardProps } from "../../components/TradingCard/TradingCard";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: "card1-ui/TradingCard",
    component: TradingCard,
    tags: ['autodocs'],
    // TODO: A bit hacky, don't know why these parameters are showing up.
    argTypes: {
        '$$typeof': { table: { disable: true } },
        key: { table: { disable: true } },
        type: { table: { disable: true } },
        ref: { table: { disable: true } },
        props: { table: { disable: true } },
        _owner: { table: { disable: true } },
        _store: { table: { disable: true } }
    }
} as ComponentMeta<typeof TradingCard>;

const TradingCardTemplate: ComponentStory<typeof TradingCard> = (props: TradingCardProps) => {
    return (<div className={styles.Card}>
        <PaletteProvider>
            <TradingCard {...props} />
        </PaletteProvider>
    </div>);
};

export const CompleteCardTest1 = TradingCardTemplate.bind({});

CompleteCardTest1.args = {
    title: "Jan Garong",
    subtitle: "Software Developer",
    tip: (<div className={styles.IconContainer}>
        <Image src={Next} alt={"Next"} width={46} />
    </div>),
    body: (<div style={{ display: 'flex', justifyContent: 'center' }}>
        <Image src={Magichanics} alt="magichanics" className={styles.BodyArt} width={400} />
    </div>),
    footer: (<div style={{ display: 'flex', justifyContent: 'center' }}>
        <div className={styles.BottomIconContainer}>
            <Image src={Resume} alt={"Next"} width={46} />
            <Image src={Linkedin} alt={"Next"} width={46} />
            <Image src={Github} alt={"Next"} width={46} />
        </div>
    </div>)
}

export const CompleteCardTest2 = TradingCardTemplate.bind({});

CompleteCardTest2.args = {
    title: "Jan Garong",
    subtitle: "Software Developer",
    body: (<div style={{ display: 'flex', justifyContent: 'center' }}>
        <Image src={Magichanics} alt="magichanics" className={styles.BodyArt} width={400} />
    </div>),
    footer: (<div style={{ display: 'flex', justifyContent: 'center' }}>
        <div className={styles.BottomIconContainer}>
            <Image src={Resume} alt={"Next"} width={46} />
            <Image src={Linkedin} alt={"Next"} width={46} />
            <Image src={Github} alt={"Next"} width={46} />
        </div>
    </div>)
}
