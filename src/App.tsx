import "./App.css";
import { Rating } from "./components/Rating/Rating";
import { RatingGPT } from "./RatingGPT";
import { OnOff } from "./components/OnOff/OnOff";
import { UnControlledAccordion } from "./components/UnControlledAccordion/UnControlledAccordion";
import { useEffect, useState } from "react";

function App() {
  return (
    <div className="App">
      <PageTitle title="This is APP component" />
      <PageTitle title="My friends" />
      Article 1
      <UnControlledAccordion title="Toggle" />
      Article 2
      <Rating title="Star" />
      <RatingGPT title="RatingGPT" />
      <OnOff title="On-Off" />
      <Counter/>
    </div>
  );
}

type PropsTypePageTitle = {
  title: string;
};

export function PageTitle(props: PropsTypePageTitle) {
  return <h1>{props.title}</h1>;
}
const Counter = () => {
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    document.title = counter.toString();
  });
  return <>
    <div>
      <button onClick={() => {setCounter(counter + 1)}}>take</button>
    </div>
  </>;
};

export default App;

