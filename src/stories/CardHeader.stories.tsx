import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import CardHeader, { CardHeaderProps } from "../components/CardHeader";
import Next from "./assets/icons/next.png";
import CardTitle from "../components/CardTitle";
import Icon from "../components/Icon";
import "./CardHeader.stories.css";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "card1-ui/CardHeader",
  component: CardHeader,
  tags: ['autodocs'],
} as ComponentMeta<typeof CardHeader>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const CardHeaderTest: ComponentStory<typeof CardHeader> = (props: CardHeaderProps) => (
  <div className="Card">
    <CardHeader {...props} />
  </div>
);

export const CardHeaderTest1 = CardHeaderTest.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
CardHeaderTest1.args = {
  children: (<CardTitle title={"Jan Garong"} subtitle={"Software Developer"} />),
  tip: (<div className="IconContainer">
    <Icon src={Next} alt={"Next"} size={"sm"} />
    </div>)
};

export const CardHeaderTest2 = CardHeaderTest.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
CardHeaderTest2.args = {
  children: (<CardTitle subtitle={"Software Developer"}>Jan Garong</CardTitle>)
};

