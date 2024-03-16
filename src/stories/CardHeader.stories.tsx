import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import CardHeader, { CardHeaderProps } from "../components/CardHeader";
import Next from "./assets/icons/next.png";
import CardTitle from "../components/CardTitle";
import Icon from "../components/Icon";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "card1-ui/CardHeader",
  component: CardHeader,
  tags: ['autodocs'],
} as ComponentMeta<typeof CardHeader>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const CardHeaderTest: ComponentStory<typeof CardHeader> = (props: CardHeaderProps) => (
  <div>
    <CardHeader {...props} />
  </div>
);

export const CardHeaderTest1 = CardHeaderTest.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
CardHeaderTest1.args = {
  children: (<CardTitle title={"Jan Garong"} subtitle={"Software Developer"} />),
  tip: (<div>
    <Icon src={Next} alt={"Next"} />
    </div>)
};

