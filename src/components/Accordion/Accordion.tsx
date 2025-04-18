export type AccordionPropsType = {
  title: string;
  collapsed?: boolean;
  onChange?: () => void 
};

export function Accordion(props: AccordionPropsType) {
  return (
    <div>
      <AccordionTitle title={props.title} onChange={props.onChange}/>
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

  return (
    <>
      <h3 onClick={props.onChange}>{props.title}</h3>
    </>
  );
}
