import type { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import { Select } from "./Select";
import { ChangeEvent, useState } from "react";

const meta: Meta<typeof Select> = {
  component: Select,
  title: "Select",
};

export default meta;
type Story = StoryObj<typeof Select>;

export const WithValue = () => {
  const [value, setValue] = useState("2");
  return (
    <>
      <Select
        onChange={setValue}
        title="with value"
        value={value}
        items={[
          { value: "1", title: "Kiev" },
          { value: "2", title: "Warsow" },
          { value: "3", title: "Konoha" },
        ]}
      />
    </>
  );
};

export const WithoutValue = () => {
  const [value, setValue] = useState("1");
  return (
    <>
      <Select
        onChange={setValue}
        title="without value"
        value={value}
        items={[
          { value: "1", title: "Kiev" },
          { value: "2", title: "Warsaw" },
          { value: "3", title: "Konoha" },
        ]}
      />
    </>
  );
};
