import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Button from "../../../src/components/button/button";

export default {
  title: "Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  variant: "secondary",
  size: "small",
  text: "Button Text",
};
