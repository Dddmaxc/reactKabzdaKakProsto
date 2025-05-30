import { ClockViewPropsType } from "./Clock";
import s from "./AnalogModelView.module.css";

export const AnalogClockView = ({ date }: ClockViewPropsType) => {

  const secondsStyle = {
    transform: `rotate(${date.getSeconds() * 6}deg)`,
  };
  const minutesStyle = {
    transform: `rotate(${date.getMinutes() * 6}deg)`,
  };
  const hoursStyle = {
    transform: `rotate(${date.getHours() * 30}deg)`,
  };
  return (
    <div className={s.clock}>
      <div className={s.analog_clock}>
        <div className={`${s.dial} ${s.seconds}`} style={secondsStyle}></div>
        <div className={`${s.dial} ${s.minutes}`} style={minutesStyle}></div>
        <div className={`${s.dial} ${s.hours}`} style={hoursStyle}></div>
      </div>
    </div>
  );
};
