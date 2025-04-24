import type { Meta, StoryObj } from "@storybook/react";

import { InputUniversal } from "./InputUniversal";
import { ChangeEvent, useState } from "react";

const meta: Meta<typeof InputUniversal> = {
  component: InputUniversal,
};

export default meta;
type Story = StoryObj<typeof InputUniversal>;

export const SuperInput: Story = {
  args: {
    title: "SuperInput ",
  },
};

export const ControlledInput = () => {
  const [parentValue, setParentValue] = useState<string>("");
  const onChange = (e: ChangeEvent<HTMLInputElement>) =>
    setParentValue(e.currentTarget.value);

  return <input value={parentValue} onChange={onChange} />;
};
export const ControlledCheckbox = () => {
  const [parentValue, setParentValue] = useState<boolean>(true);
  const onChange = (e: ChangeEvent<HTMLInputElement>) =>
    setParentValue(e.currentTarget.checked);
  return <input type="checkbox" checked={parentValue} onChange={onChange} />;
};

export const ControlledSelect = () => {
  const [parentValue, setParentValue] = useState<string | undefined>(undefined);
  const onChange = (e: ChangeEvent<HTMLSelectElement>) =>
    setParentValue(e.currentTarget.value);
  return (
    <select value={parentValue} onChange={onChange}>
      <option>none</option>
      <option value={"1"}>Kiev</option>
      <option value={"2"}>Amsterdam</option>
      <option value={"3"}>Warsaw</option>
    </select>
  );
};
