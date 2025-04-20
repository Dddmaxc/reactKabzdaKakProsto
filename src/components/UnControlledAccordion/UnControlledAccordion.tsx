import { useState } from "react";

type PropsTypeUnControlledAccordion = {
  title: string;
};

export function UnControlledAccordion(props: PropsTypeUnControlledAccordion) {
  const [collapsed, setCollapsed] = useState<boolean>(false);

  const collapsedToggleButton = () => {
    setCollapsed(!collapsed);
  };

  const items = ["HTML", "CSS", "JS"]; // пример массива

  return (
    <div>
      <AccordionTitle title={props.title} onClick={collapsedToggleButton} />
      {collapsed && <AccordionBody items={items} />}
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
