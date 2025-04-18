import { useState } from "react";
import { MessagePropsType } from "./InputUniversal";

export type FullButtonPropsType = {
  addMessage: (message: string) => void;
  message: Array<MessagePropsType>;
};

export function FullButton(props: FullButtonPropsType) {
  const [inputValue, setInputValue] = useState("");

  const handleValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.currentTarget.value);
  };

  const onClickHandler = () => {
    props.addMessage(inputValue.trim());
    setInputValue("");
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={handleValue} />
      <button onClick={onClickHandler}>+</button>
    </div>
  );
}
