import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Typography } from "../../components";
import React from "react";
// import { TypographyProps } from "../../components/Typography/Typography";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "card1-ui/Typography",
  component: Typography,
  tags: ['autodocs'],
} as ComponentMeta<typeof Typography>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const TypographyTest: ComponentStory<typeof Typography> = (text: JSX.Element) => (
  <div>
    <Typography textType="h1">
      {text}
    </Typography>
    <Typography textType="h2">
      {text}
    </Typography>
    <Typography textType="p">
      {text}
    </Typography>
  </div>
);

export const TypographyTest1 = TypographyTest.bind({});

TypographyTest1.args = <div>The quick brown fox jumps over the lazy dog.</div>