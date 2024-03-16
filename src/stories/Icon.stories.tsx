import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Icon, { IconProps } from "../components/Icon/Icon";
import GitHub from "./assets/icons/github.png";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "card1-ui/Icon",
  component: Icon,
} as ComponentMeta<typeof Icon>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const IconTemplate: ComponentStory<typeof Icon> = (props: IconProps) => (
<div>
  <Icon {...{...props, size: "sm"}} />
  <Icon {...{...props, size: "md"}} />
  <Icon {...{...props, size: "lg"}} />
  </div>
  );

export const GithubTest = IconTemplate.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
GithubTest.args = {
  src: GitHub,
  alt: "GitHub"
};

