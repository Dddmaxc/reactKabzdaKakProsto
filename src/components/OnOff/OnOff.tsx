import { useState } from "react";
import s from "./OnOff.module.css";

export function OnOff() {
  let [sw, setSw] = useState<boolean>(true);
  const switchButton = () => {
    setSw(!sw);
  };

  return (
    <div style={{ display: "flex", gap: 5, cursor: "pointer" }}>
      <div
        className={sw ? s.green : s.null}
        onClick={switchButton}
        style={{ border: "1px solid green", width: 30 }}
      >
        On
      </div>
      <div
        className={sw ? s.null : s.red}
        onClick={switchButton}
        style={{ border: "1px solid red", width: 30 }}
      >
        Off
      </div>
      <div
        className={sw ? s.green : s.red}
        style={{ borderRadius: 50, border: "1px solid black", width: 30 }}
      ></div>
    </div>
  );
}
