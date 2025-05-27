import { useCallback, useState } from "react";
import { MessagePropsType } from "./InputUniversal";
import React from "react";

export type FullButtonPropsType = {
  addMessage: (message: string) => void;
  message: Array<MessagePropsType>;
};

export const FullButton = React.memo((props: FullButtonPropsType) => {
  const [inputValue, setInputValue] = useState("");

  const handleValue = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.currentTarget.value);
  },[])

  const onClickHandler = useCallback(() => {
    props.addMessage(inputValue.trim());
    setInputValue("");
  },[inputValue, props])

  return (
    <div>
      <input type="text" value={inputValue} onChange={handleValue} />
      <button onClick={onClickHandler}>+</button>
    </div>
  );
})
