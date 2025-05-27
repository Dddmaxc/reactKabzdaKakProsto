import { action } from "@storybook/addon-actions";

import { Accordion } from "./Accordion";
import { useCallback, useState } from "react";
import React from "react";


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

export const OpenA = () => {
  return (
    <div>
      <Accordion title="openAccordion" collapsed={false} />
    </div>
  );
};

const OpenAccordion = React.memo(OpenA) 

export const AccordionSimple = () => {
  const [collapsed, setCollapsed] = useState<boolean>(true);

  const toggleCollapse  = useCallback(() => {
    setCollapsed(prew => !prew);
  }, [])
  return (
    <div>
      <Accordion title="AccordionSimple" collapsed={collapsed} onChange={toggleCollapse } />
    </div>
  );
};
