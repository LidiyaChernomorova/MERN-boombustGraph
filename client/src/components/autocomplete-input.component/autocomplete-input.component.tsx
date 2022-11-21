import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

const options = ["11/11/1111", "22/22/2222"];

export default function AutocompleteInput({ label }: { label: string }) {
  const [value, setValue] = useState<string | null>(options[0]);
  const [inputValue, setInputValue] = useState("");

  return (
    <Autocomplete
      freeSolo={true}
      size="small"
      value={value}
      onChange={(event: any, newValue: string | null) => {
        setValue(newValue);
      }}
      inputValue={inputValue}
      onInputChange={(event, newInputValue) => {
        setInputValue(newInputValue);
      }}
      options={options}
      sx={{ width: 140 }}
      renderInput={(params) => <TextField {...params} label={label} />}
    />
  );
}
