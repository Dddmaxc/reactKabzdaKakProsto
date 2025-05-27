import { useCallback, useEffect, useMemo, useState } from "react";
import s from "./Select.module.css";
import React from "react";

type ItemType = {
  title: string;
  value: any;
};

type SelectPropsType = {
  value: string;
  onChange: (value: any) => void;
  items: ItemType[];
  title?: string;
};

export const Select = React.memo(
  ({ value, onChange, items, title }: SelectPropsType) => {
    const [active, setActive] = useState<boolean>(false);
    const [hoverElementValue, setHoverElementValue] = useState(value);

    useEffect(() => {
      setHoverElementValue(value);
    }, [value]);

    const selectedItems = useMemo(
      () => items.find((i) => i.value === value),
      [items, value]
    );
    const hoverItem = useMemo(
      () => items.find((i) => i.value === hoverElementValue),
      [items, hoverElementValue]
    );

    const toggleItems = useCallback(() => {
      setActive(t => !t);
    }, [])

    const onItemClick =useCallback( (value: any) => {
      onChange(value);
      toggleItems();
    }, [onChange])

    const onKeyUp = useCallback((e: React.KeyboardEvent<HTMLDivElement>) => {
      if (e.key === "ArrowDown" || e.key === "ArrowUp") {
        for (let i = 0; i < items.length; i++) {
          if (items[i].value === hoverElementValue) {
            let nextElement =
              e.key === "ArrowDown" ? items[i + 1] : items[i - 1];
            if (nextElement) {
              onChange(nextElement.value);
              return;
            }
          }
        }
        if (!selectedItems) {
          onChange(items[0].value);
        }
      }
      if (e.key === "Enter" || e.key === "Escape") {
        setActive(false);
      }
    }, [hoverElementValue, items, onChange])

    return (
      <>
        <div>
          <div className={s.select} onKeyUp={onKeyUp} tabIndex={0}>
            <span className={s.main} onClick={toggleItems}>
              {selectedItems && selectedItems.title}
            </span>
            {active && (
              <div className={s.items}>
                {items.map((i) => {
                  return (
                    <div
                      onMouseEnter={() => {
                        setHoverElementValue(i.value);
                      }}
                      className={
                        s.item + " " + (hoverItem === i ? s.selected : "")
                      }
                      key={i.value}
                      onClick={() => {
                        onItemClick(i.value);
                      }}
                    >
                      {i.title}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </>
    );
  }
);
