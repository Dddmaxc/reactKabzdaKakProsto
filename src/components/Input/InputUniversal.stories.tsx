import type { Meta, StoryObj } from "@storybook/react";
import { ChangeEvent, useCallback, useState } from "react";

import { InputUniversal } from "./InputUniversal";

const meta: Meta<typeof InputUniversal> = {
  title: "Components/InputUniversal",
  component: InputUniversal,
};

export default meta;
type Story = StoryObj<typeof InputUniversal>;

// Простая история с передачей пропсов
export const SuperInput: Story = {
  args: {
    title: "SuperInput",
  },
};

// Контролируемый инпут
export const ControlledInput = () => {
  const [value, setValue] = useState("");
  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => setValue(e.currentTarget.value),
    []
  );

  return <input value={value} onChange={handleChange} />;
};

// Контролируемый чекбокс
export const ControlledCheckbox = () => {
  const [checked, setChecked] = useState(true);
  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => setChecked(e.currentTarget.checked),
    []
  );

  return <input type="checkbox" checked={checked} onChange={handleChange} />;
};

// Контролируемый select
export const ControlledSelect = () => {
  const [selected, setSelected] = useState<string | undefined>(undefined);
  const handleChange = useCallback(
    (e: ChangeEvent<HTMLSelectElement>) => setSelected(e.currentTarget.value),
    []
  );

  return (
    <select value={selected} onChange={handleChange}>
      <option value="">none</option>
      <option value="1">Kiev</option>
      <option value="2">Amsterdam</option>
      <option value="3">Warsaw</option>
    </select>
  );
};
