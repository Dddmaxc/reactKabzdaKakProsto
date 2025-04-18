import type { Meta, StoryObj } from '@storybook/react';
 
import { Rating } from './Rating';
 
const meta: Meta<typeof Rating> = {
  component: Rating,
};
 
export default meta;
type Story = StoryObj<typeof Rating>;
 
export const Primary: Story = {
  args: {
    title: "Star stories",
  },
};
// export default {
//   title: "Rating stories",
//   component: Rating,
// };

// export const EmptyStar = () => {
//     return <div>
//         <Rating title="Empty star"/>
//     </div>
// }