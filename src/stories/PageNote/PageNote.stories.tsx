import { ComponentStory, ComponentMeta } from "@storybook/react";
import { PageNote, PaletteProvider } from "../../components";
import React from "react";
// import { PageNoteProps } from "../../components/PageNote/PageNote";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "card1-ui/PageNote",
  component: PageNote,
  tags: ['autodocs'],
} as ComponentMeta<typeof PageNote>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const PageNoteTest: ComponentStory<typeof PageNote> = (text: JSX.Element) => (
  <PaletteProvider>
    <PageNote>
      {text}
    </PageNote>
  </PaletteProvider>
);

export const PageNoteTest1 = PageNoteTest.bind({});

PageNoteTest1.args = <div>The quick brown fox jumps over the lazy dog.</div>
