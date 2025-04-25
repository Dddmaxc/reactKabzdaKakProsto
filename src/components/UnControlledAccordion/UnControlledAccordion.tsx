import { useReducer } from "react";
import { reducer } from "./Redece";

type PropsTypeUnControlledAccordion = {
  title: string;
};

const TOGGLE_COLLAPSED = "TOGGLE-COLLAPSED";





export function UnControlledAccordion(props: PropsTypeUnControlledAccordion) {
  const [state, dispatch] = useReducer(reducer, {collapsed: false});

  const collapsedToggleButton = () => {
    dispatch({ type: TOGGLE_COLLAPSED });
  };

  const items = ["HTML", "CSS", "JS"]; // пример массива

  return (
    <div>
      <AccordionTitle title={props.title} onClick={collapsedToggleButton} />
      {! state.collapsed && <AccordionBody items={items} />}
    </div>
  );
}

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
