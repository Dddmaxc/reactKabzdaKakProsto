import { useMemo, useState } from "react";

export default {
  title: "UseState demo",
};

function genereteData() {
  return 5422574;
}

export const Example1 = () => {
  const [count, setCount] = useState<number>(genereteData);
  const changer = (state: number) => state + 1;

  return (
    <>
      <button onClick={() => {setCount(state => state + 1)}}>+</button>
      {count}
    </>
  );
};
