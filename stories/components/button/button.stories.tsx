import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Button from "../../../src/components/button/button";
import { within, userEvent } from "@storybook/testing-library";
import { expect } from "@storybook/jest";
export default {
  title: "Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});

Primary.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  await userEvent.click(canvas.getByRole("button"));
};

Primary.args = {
  variant: "secondary",
  size: "small",
  text: "Button Text",
};
