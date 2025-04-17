import { useState } from "react";

export type PropsType = {
    title: string;
  };
  
  export const RatingGPT = (props: PropsType) => {
    let [sw, setSw] = useState<number>(-1)
    let [stars, setStars] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

      let  switchStars = (id: number) => {
        setSw(id)
      }

    return (
      <div>
        <h2>{props.title}</h2>
        {stars.map((_, id) => (
          <Star key={id}
                selected={id <= sw}
                onClick={() => switchStars(id)} />
        ))}
      </div>
    );
  };
  
  export type StarPropsType = {
    selected: boolean;
    onClick: () => void;
  };
  
  function Star(props: StarPropsType) {
    return (
      <span onClick={props.onClick} style={{ cursor: "pointer" }}>
        {props.selected ? <b>★</b> : "☆"}
      </span>
    );
  }
  