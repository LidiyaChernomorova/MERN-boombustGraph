import React from "react";
import DateRangeInput from "../date-range-input.component/date-range-input.component";
import { useDispatch } from "react-redux";
import { getFrom, getTo } from "../../store/data/data.action";

export default function DateRangePicker() {
  const dispatch = useDispatch();

  function handler(event: any, value: string, label: string) {
    const index = +event.target.getAttribute("data-option-index");
    label === "from" && dispatch(getFrom({ value, index }));
    label === "to" && dispatch(getTo({ value, index }));
  }

  return (
    <div
      style={{
        display: "grid",
        gridGap: "10px",
        gridTemplateColumns: "repeat(2, 1fr)",
      }}
    >
      <DateRangeInput label="from" passValueToParent={handler} />
      <DateRangeInput label="to" passValueToParent={handler} />
    </div>
  );
}
