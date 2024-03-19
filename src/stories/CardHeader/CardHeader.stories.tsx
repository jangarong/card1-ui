import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { CardHeader } from "../../components";
import { CardHeaderProps } from "../../components/CardHeader/CardHeader";
import Next from "../assets/icons/next.png";
import { CardTitle } from "../../components/TradingCard/CardTitle";
import styles from "./CardHeader.module.css";
import { PaletteProvider } from "../../components";
import Image from "next/image";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: "card1-ui/CardHeader",
    component: CardHeader,
    tags: ['autodocs'],
    argTypes: {
        title: { control: { type: null } },
        tip: { control: { type: null } },
      },
} as ComponentMeta<typeof CardHeader>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const CardHeaderTest: ComponentStory<typeof CardHeader> = (props: CardHeaderProps) => (
    <div className={styles.Card}>
        <PaletteProvider>
            <CardHeader {...props} />
        </PaletteProvider>
    </div>
);

export const CardHeaderTest1 = CardHeaderTest.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
CardHeaderTest1.args = {
    title: (<CardTitle title={<div>Jan Garong</div>} subtitle={<div>Software Developer</div>} />),
    tip: (<div className={styles.IconContainer}>
        <Image src={Next} alt={"Next"} width={46} />
    </div>)
};

export const CardHeaderTest2 = CardHeaderTest.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
CardHeaderTest2.args = {
    title: (<CardTitle title={<div>Jan Garong</div>} subtitle={<div>Software Developer</div>} isCentered={true} />)
};
