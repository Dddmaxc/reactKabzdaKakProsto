import React, { useCallback, useReducer } from "react";
import { Reducer, TOGGLE_COLLAPSED } from "./Redecer";

type PropsTypeUnControlledAccordion = {
  title: string;
};



export const UnControlledAccordion = React.memo((props: PropsTypeUnControlledAccordion) => {
  const [state, dispatch] = useReducer(Reducer, { collapsed: false });

  const collapsedToggleButton = useCallback(() => {
    dispatch({ type: TOGGLE_COLLAPSED });
  }, [dispatch])

  const items = ["HTML", "CSS", "JS"]; // пример массива

  return (
    <div>
      <AccordionTitleMemo title={props.title} onClick={collapsedToggleButton} />
      {!state.collapsed && <AccordionBodyMemo items={items} />}
    </div>
  );
})

type AccordionTitleProps = {
  title: string;
  onClick: () => void;
};

function AccordionTitle({ title, onClick }: AccordionTitleProps) {
  return (
    <h3
      onClick={onClick}
      style={{ cursor: "pointer", display: "inline-block" }}
    >
      {title}
    </h3>
  );
}

const AccordionTitleMemo = React.memo(AccordionTitle)

type AccordionBodyType = {
  items: string[];
};

function AccordionBody({ items }: AccordionBodyType) {
  return (
    <ul>
      {items.map((i, index) => (
        <li key={index}>{i}</li>
      ))}
    </ul>
  );
}

const AccordionBodyMemo = React.memo(AccordionBody)

