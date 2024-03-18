import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import TradingCard, { TradingCardProps } from "../components/TradingCard";
import Next from "./assets/icons/next.png";
import CardTitle from "../components/CardTitle";
import Icon from "../components/Icon";
import Image from "next/image";
import Magichanics from "./assets/magichanics.png";
import "./TradingCard.stories.css";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "card1-ui/TradingCard",
  component: TradingCard,
  tags: ['autodocs'],
} as ComponentMeta<typeof TradingCard>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const TradingCardTest: ComponentStory<typeof TradingCard> = (props: TradingCardProps) => (
  <div className="Card">
    <TradingCard {...props} />
  </div>
);

export const TradingCardTest1 = TradingCardTest.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
TradingCardTest1.args = {
  children: (<Image src={Magichanics} alt="magichanics" className="BodyArt" width={300} />),
  header: {
    title: (<CardTitle title={"Jan Garong"} subtitle={"Software Developer"} />),
  tip: (<div className="IconContainer">
    <Icon src={Next} alt={"Next"} size={"sm"} />
    </div>)
  }
};


