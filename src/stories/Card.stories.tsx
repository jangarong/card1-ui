import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Card, { CardProps } from "../components/TradingCard/Card";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "card1-ui/TradingCard",
  component: Card,
} as ComponentMeta<typeof Card>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Card> = (props: CardProps) => <Card {...props} />;

export const HelloWorld = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
HelloWorld.args = {
  header: {title: "Hello world!"}
};
