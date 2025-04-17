import { useState } from "react";

type PropsTypeUnControlledAccordion = {
  title: string;
};

export function UnControlledAccordion(props: { title: string }) {
  let [collapsed, setCollapsed] = useState<boolean>(false);

  let collapsedToggleButton = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div>
      <AccordionTitle />
      <h2 style={{cursor: "pointer", display: "inline-block"}} onClick={collapsedToggleButton}>{props.title}</h2>
      {collapsed &&  <AccordionBody />}
      
    </div>
  );
}

export function AccordionBody() {
  return (
    <>
      <ul>
        {[1, 2, 3].map((i) => (
          <li key={i}>{i}</li>
        ))}
      </ul>
    </>
  );
}

function AccordionTitle() {
  console.log("AccordionTitle");
  return (
    <>
      <h3>{}</h3>
    </>
  );
}
