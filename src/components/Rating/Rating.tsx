import React from "react";
import { useState } from "react";

export type RatingPropsType = {
  title: string;
};

export const Rating = React.memo((props: RatingPropsType) => {
  const [selectedStar, setSelectedStar] = useState<number | null>(null);
  const stars = [1, 2, 3, 4, 5];

  return (
    <div>
      <h3>{props.title}</h3>
      {stars.map((_, index) => {

        return (
          <MemoStar
            key={index}
            selected={index <= (selectedStar ?? -1)}
            onClick={() => setSelectedStar(index)}
          />
        );
      })}
    </div>
  );
});

type StarPropsType = {
  selected: boolean;
  onClick: () => void;
};

export function Star(props: StarPropsType) {
  return (
    <span
      onClick={props.onClick}
      style={{ cursor: "pointer", fontSize: "24px" }}
    >
      {props.selected ? <b>★</b> : "☆"}
    </span>
  );
}

const MemoStar = React.memo(Star);
