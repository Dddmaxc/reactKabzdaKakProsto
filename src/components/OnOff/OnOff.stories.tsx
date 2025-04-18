import type { Meta, StoryObj } from '@storybook/react';
 
import { OnOff } from './OnOff';
 
const meta: Meta<typeof OnOff> = {
  component: OnOff,
};
 
export default meta;
type Story = StoryObj<typeof OnOff>;
 
export const Primary: Story = {
  args: {
    title: "On Off",
  },
};
