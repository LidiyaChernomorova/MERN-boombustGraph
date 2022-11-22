import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { useSelector } from "react-redux";
import { selectPikedCompany } from "../../store/data/data.selector";

export default function AutocompleteInput({ label }: { label: string }) {
  const [options, setOptions] = useState<string[]>([]);
  const [value, setValue] = useState<string | null>("");
  const [inputValue, setInputValue] = useState("");
  const companyPicked = useSelector(selectPikedCompany);

  useEffect(() => {
    companyPicked && setOptions(companyPicked.DATE);
  }, [companyPicked]);

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
      sx={{ width: 170 }}
      renderInput={(params) => <TextField {...params} label={label} />}
    />
  );
}
