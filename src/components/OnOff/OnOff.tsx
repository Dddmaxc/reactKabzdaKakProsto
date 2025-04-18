import { useState } from "react";

type PropsType = {
  title: string
}

export function OnOff({title}:PropsType) {
  let [sw, setSw] = useState<boolean>(true);
  const switchButton = () => {
    setSw(!sw);
  };

  return (
    <div style={{ display: "flex", gap: 5, cursor: "pointer" }}>
      <div
        onClick={switchButton}
        style={{ border: "1px solid green", width: 30,  backgroundColor: sw ? "green" : "" }}
      >
        On
      </div>
      <div
        onClick={switchButton}
        style={{ border: "1px solid red", width: 30,  backgroundColor: sw ? "" : "red" }}
      >
        Off
      </div>
      <div
        style={{ borderRadius: 50, border: "1px solid black", width: 30, backgroundColor: sw ? "green" : "red"  }}
      ></div>
    </div>
  );
}
