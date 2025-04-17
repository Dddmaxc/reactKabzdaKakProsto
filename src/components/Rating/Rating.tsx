import { useState } from "react";

export type RatingPropsType = {
  title: string;
};

export function Rating(props: RatingPropsType) {
  const [selectedStar, setSelectedStar] = useState(-1);
  const stars = [1, 2, 3, 4, 5];

  return (
    <div>
      <h3>{props.title}</h3>
      {stars.map((_, index) => {
        const handleClick = () => setSelectedStar(index);

        return (
          <Star
            key={index}
            selected={index <= selectedStar}
            onClick={handleClick}
          />
        );
      })}
    </div>
  );
}

type StarPropsType = {
  selected: boolean;
  onClick: () => void;
};

function Star(props: StarPropsType) {
  return (
    <span onClick={props.onClick} style={{ cursor: "pointer", fontSize: "24px" }}>
      {props.selected ? <b>★</b> : "☆"}
    </span>
  );
}

