import React, { useState, useEffect } from "react";
import { Autocomplete, TextField } from "@mui/material";
import { useSelector } from "react-redux";
import {
  selectPikedCompany,
  selectPikedCompanyFrom,
  selectPikedCompanyTo,
} from "../../store/data/data.selector";

export default function AutocompleteInput({
  label,
  passValueToParent,
}: {
  label: "from" | "to";
  passValueToParent: Function;
}) {
  const [options, setOptions] = useState<string[]>([]);
  const [value, setValue] = useState<string | null>("");
  const [inputValue, setInputValue] = useState("");
  const companyPicked = useSelector(selectPikedCompany);
  const selectedOptionFrom = useSelector(selectPikedCompanyFrom);
  const selectedOptionTo = useSelector(selectPikedCompanyTo);

  useEffect(() => {
    companyPicked && setOptions(companyPicked.DATE);
  }, [companyPicked]);

  useEffect(() => {
    setValue(label === "from" ? selectedOptionFrom.value : selectedOptionTo.value);
  }, [selectedOptionFrom, selectedOptionTo]);

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
