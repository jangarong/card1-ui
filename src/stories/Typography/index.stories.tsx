import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Typography, PaletteProvider } from "../../components";
import React from "react";
// import { TypographyProps } from "../../components/Typography/Typography";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "card1-ui/Typography",
  component: Typography,
  tags: ['autodocs'],
  argTypes: {
    // This will make the control null, which is a workaround to removing the control column
    //  entirely.
    children: { control: { type: null } },
    textType: { control: { type: null } },
    // TODO: A bit hacky, don't know why these parameters are showing up.
    '$$typeof': { table: { disable: true } },
    key: { table: { disable: true } },
    type: { table: { disable: true } },
    ref: { table: { disable: true } },
    props: { table: { disable: true } },
    _owner: { table: { disable: true } },
    _store: { table: { disable: true } },
  },
} as ComponentMeta<typeof Typography>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const TypographyTest: ComponentStory<typeof Typography> = (text: JSX.Element) => (
  <PaletteProvider>
    <Typography textType="h1">
      {text}
    </Typography>
    <Typography textType="h2">
      {text}
    </Typography>
    <Typography textType="p">
      {text}
    </Typography>
  </PaletteProvider>
);

export const TypographyTest1 = TypographyTest.bind({});

TypographyTest1.args = <div>The quick brown fox jumps over the lazy dog.</div>