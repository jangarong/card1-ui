import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import CardTitle, { CardTitleProps } from "../components/CardTitle";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "card1-ui/CardTitle",
  component: CardTitle,
  tags: ['autodocs'],
} as ComponentMeta<typeof CardTitle>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const TitleTemplate: ComponentStory<typeof CardTitle> = (props: CardTitleProps) => (<CardTitle {...props} />);


export const Test1 = TitleTemplate.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Test1.args = {
  title: "Jan Garong",
};

export const Test2 = TitleTemplate.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Test2.args = {
  title: "Jan Garong",
  subtitle: "Software Developer"
};
