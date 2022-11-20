import React, { useState } from "react";
import AutocompleteInput from "../autocomplete-input.component/autocomplete-input.component";

export default function DateRangePicker() {
  return (
    <div
      style={{
        display: "grid",
        gridGap: "10px",
        gridTemplateColumns: "repeat(2, 1fr)",
      }}
    >
      <AutocompleteInput label="from" />
      <AutocompleteInput label="to" />
    </div>
  );
}
