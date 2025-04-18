import type { Meta, StoryObj } from "@storybook/react";

import { InputUniversal } from "./InputUniversal";

const meta: Meta<typeof InputUniversal> = {
  component: InputUniversal,
};

export default meta;
type Story = StoryObj<typeof InputUniversal>;

export const Primary: Story = {
  args: {
    title: "SuperInput ",
  },
};
