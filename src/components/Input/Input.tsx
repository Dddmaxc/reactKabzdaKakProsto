import { useState } from "react";
import { FullButton } from "./FullButton";

export type MessagePropsType = {
  message: string;
};

export function InputUniversal() {
  let [message, setMessage] = useState<Array<MessagePropsType>>([
    { message: "message1" },
    { message: "message2" },
    { message: "message3" },
  ]);

  const addMessage = (newMessage: string) => {
    setMessage([{ message: newMessage }, ...message]);
  };

  return (
    <div>
      <div>
        <FullButton
          addMessage={addMessage}
          message={message}
        />
      </div>
      {message.map((m, index) => (
        <div key={index}>{m.message}</div>
      ))}
    </div>
  );
}
