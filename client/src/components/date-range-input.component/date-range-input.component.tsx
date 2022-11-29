import React, { useState, useEffect } from "react";
import { Autocomplete, TextField } from "@mui/material";
import { useSelector } from "react-redux";
import {
  selectPikedCompany,
  selectFrom,
  selectTo,
} from "../../store/data/data.selector";

export default function DateRangeInput({
  label,
  passValueToParent,
}: {
  label: "from" | "to";
  passValueToParent: Function;
}) {
  const [options, setOptions] = useState<string[]>([]);
  const [value, setValue] = useState<string | null>("");
  const [inputValue, setInputValue] = useState("");
  const company = useSelector(selectPikedCompany);
  const selectedFrom = useSelector(selectFrom);
  const selectedTo = useSelector(selectTo);

   useEffect(() => {
    company && setOptions(company.DATE);
  }, [company]);

  useEffect(() => {
    setValue(
      label === "from" ? selectedFrom.value : selectedTo.value
    );
  }, [selectedFrom, selectedTo, label]);


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
      getOptionDisabled={(option) =>
        (label === "to" && Date.parse(option) <= Date.parse(selectedFrom.value)) || 
        (label === "from" && Date.parse(option) >= Date.parse(selectedTo.value))
      }
      sx={{ width: 180 }}
      renderInput={(params) => <TextField {...params} label={label} />}
    />
  );
}
