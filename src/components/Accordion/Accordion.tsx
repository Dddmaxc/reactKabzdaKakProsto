export type AccordionPropsType = {
  title: string;
  collapsed?: boolean;
};

export function Accordion(props: AccordionPropsType) {
  return (
    <div>
      <AccordionTitle title={props.title} />
      {!props.collapsed && <AccordionBody />}
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

function AccordionTitle(props: AccordionPropsType) {
  console.log("AccordionTitle");
  return (
    <>
      <h3>{props.title}</h3>
    </>
  );
}
