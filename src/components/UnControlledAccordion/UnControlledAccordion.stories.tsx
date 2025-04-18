import type { Meta, StoryObj } from '@storybook/react';
 
import { UnControlledAccordion } from './UnControlledAccordion';
 
const meta: Meta<typeof UnControlledAccordion> = {
  component: UnControlledAccordion,
};
 
export default meta;
type Story = StoryObj<typeof UnControlledAccordion>;
 
export const Primary: Story = {
  args: {
    title: "UnControlledAccordion",
  },
};