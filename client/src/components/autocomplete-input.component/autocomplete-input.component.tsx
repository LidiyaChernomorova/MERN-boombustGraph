import React, { useState, useEffect } from "react";
import { Autocomplete, TextField, Chip } from "@mui/material";
import { useSelector } from "react-redux";
import { selectPikedCompany } from "../../store/data/data.selector";
export default function AutocompleteInput({
  label,
  passValueToParent,
}: {
  label: string;
  passValueToParent: Function;
}) {
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
        newValue && passValueToParent(event, newValue, label);
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
