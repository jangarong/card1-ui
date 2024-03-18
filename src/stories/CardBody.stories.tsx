import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import CardBody, { CardBodyProps } from "../components/CardBody";
import Magichanics from "./assets/magichanics.png";
import "./CardBody.stories.css";
import Image from "next/image";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "card1-ui/CardBody",
  component: CardBody,
  tags: ['autodocs'],
} as ComponentMeta<typeof CardBody>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const CardBodyTest: ComponentStory<typeof CardBody> = (props: CardBodyProps) => (
  <div className="Card">
    <CardBody {...props} />
  </div>
);

export const CardBodyTest1 = CardBodyTest.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
CardBodyTest1.args = {
  children: (<div>
    <Image src={Magichanics} alt="magichanics" className="BodyArt" width={400} />
    </div>),
};

