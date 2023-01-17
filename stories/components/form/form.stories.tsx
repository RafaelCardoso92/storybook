import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Form from "../../../src/components/form/form";
import { within, userEvent } from "@storybook/testing-library";
import { expect } from "@storybook/jest";

export default {
  title: "Form",
  component: Form,
} as ComponentMeta<typeof Form>;

const Template: ComponentStory<typeof Form> = (args) => <Form {...args} />;

export const Primary = Template.bind({});

Primary.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  // 👇 Simulate interactions with the component
  await userEvent.type(canvas.getByTestId("name"), "john doe");

  await userEvent.type(canvas.getByTestId("email"), "john@doe.com");

  await userEvent.type(canvas.getByTestId("message"), "email message");

  await userEvent.click(canvas.getByRole("button"));

  // 👇 Assert DOM structure
  await expect(canvas.getByText("Email sent")).toBeInTheDocument();

  //this will make my error message
  //await expect(canvas.getByText("Something")).toBeInTheDocument();
};

Primary.args = {
  variant: "secondary",
  borderColor: "black",
  color: "black",
};
