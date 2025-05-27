import { useEffect, useState } from "react";
import { DigitalClockView } from "./DigitalClockView";
import { AnalogClockView } from "./AnalogClockView";

export type ClockViewPropsType = {
  date: Date;
};

type PropsType = {
  mode?: "digital" | "analog";
};

export const Clock = ({ mode }: PropsType) => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const intervalID = setInterval(() => {
      console.log("TICK");
      setDate(new Date());
    }, 1000);
    return () => clearInterval(intervalID);
  }, []);

  let view;

  switch (mode) {
    case "analog":
      view = (
        <span>
          <AnalogClockView date={date} />
        </span>
      );
      break;
    case "digital":
    default:
      view = <DigitalClockView date={date} />;
  }

  return <div>{view}</div>;
};
