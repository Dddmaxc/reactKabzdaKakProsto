import React from "react";
import { useCallback, useState } from "react";

type PropsType = {
  title?: string;
};

export const OnOff = React.memo(({ title }: PropsType) => {
  let [sw, setSw] = useState<boolean>(true);

  const turnOn = useCallback(() => setSw(true), [])
  const turnOff = useCallback(() => setSw(false), [])

  return (
    <div style={{ display: "flex", gap: 5, cursor: "pointer" }}>
      <div
        onClick={turnOn}
        style={{
          border: "1px solid green",
          width: 30,
          textAlign: "center",
          backgroundColor: sw ? "green" : "",
        }}
      >
        On
      </div>
      <div
        onClick={turnOff}
        style={{
          border: "1px solid red",
          width: 30,
          textAlign: "center",
          backgroundColor: sw ? "" : "red",
        }}
      >
        Off
      </div>
      <div
        style={{
          borderRadius: 50,
          border: "1px solid black",
          width: 30,
          backgroundColor: sw ? "green" : "red",
        }}
      ></div>
      {title && <span>{title}</span>}
    </div>
  );
})
