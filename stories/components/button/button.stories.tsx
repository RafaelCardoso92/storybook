import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Button from "../../../src/components/button/button";
import { within, userEvent } from "@storybook/testing-library";

export default {
  title: "Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const PrimarySmall = Template.bind({});

PrimarySmall.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  await userEvent.click(canvas.getByRole("button"));
};

PrimarySmall.args = {
  variant: "primary",
  size: "small",
  text: "Button Text",
};

export const PrimaryBig = Template.bind({});

PrimaryBig.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  await userEvent.click(canvas.getByRole("button"));
};

PrimaryBig.args = {
  variant: "primary",
  size: "big",
  text: "Button Text",
};

export const SecondarySmall = Template.bind({});

SecondarySmall.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  await userEvent.click(canvas.getByRole("button"));
};

SecondarySmall.args = {
  variant: "secondary",
  size: "small",
  text: "Button Text",
};
export const SecondaryBig = Template.bind({});

SecondaryBig.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  await userEvent.click(canvas.getByRole("button"));
};

SecondaryBig.args = {
  variant: "secondary",
  size: "big",
  text: "Button Text",
};
