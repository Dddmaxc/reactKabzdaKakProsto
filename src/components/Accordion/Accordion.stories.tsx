import { action } from "@storybook/addon-actions";

import { Accordion } from "./Accordion";
import { useState } from "react";

export default {
  component: Accordion,
};

const onChangeHandler = action("onChange");

export const collapsedAccordion = () => {
  return (
    <div>
      <Accordion
        title="collapsedAccordion"
        collapsed={true}
        onChange={onChangeHandler}
      />
    </div>
  );
};

export const OpenAccordion = () => {
  return (
    <div>
      <Accordion title="openAccordion" collapsed={false} />
    </div>
  );
};

export const AccordionSimple = () => {
  const [collapsed, setCollapsed] = useState<boolean>(true);
  const collapsedFunction = () => {
    setCollapsed(!collapsed);
  };
  return (
    <div>
      <Accordion title="AccordionSimple" onChange={collapsedFunction} />
    </div>
  );
};
