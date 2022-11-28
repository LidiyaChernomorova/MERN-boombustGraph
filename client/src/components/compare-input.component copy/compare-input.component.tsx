import React, { useState } from "react";
import { Autocomplete, TextField } from "@mui/material";
import { useSelector } from "react-redux";
import {
  selectCompanies,
  selectPikedCompanyName,
} from "../../store/data/data.selector";

export default function CompareInput() {
  const options = useSelector(selectCompanies);
  const pikedCompanyName = useSelector(selectPikedCompanyName);
  const [value, setValue] = useState("");
  const [inputValue, setInputValue] = useState("");

  return (
    <Autocomplete
      size="small"
      value={value}
      onChange={(event: any, value: string | null) => {
        value && setValue(value);
      }}
      inputValue={inputValue}
      onInputChange={(event, newInputValue: string) => {
        setInputValue(newInputValue);
      }}
      freeSolo={true}
      options={options}
      sx={{ width: 140 }}
      getOptionDisabled={(option) => option === pikedCompanyName}
      renderInput={(params) => <TextField {...params} label="compare" />}
    />
  );
}
