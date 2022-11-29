import React, { useState } from "react";
import { Autocomplete, TextField } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import {
  selectCompanies,
  selectPikedCompanyName,
  selectCompanyCompareName
} from "../../store/data/data.selector";
import { setCompare } from "../../store/data/data.action";

export default function CompareInput() {
  const dispatch = useDispatch();
  const options = useSelector(selectCompanies);
  const companyCompareName = useSelector(selectCompanyCompareName);
  const pikedCompanyName = useSelector(selectPikedCompanyName);
  const [value, setValue] = useState<string>(companyCompareName);
  const [inputValue, setInputValue] = useState<string>("");

  return (
    <Autocomplete
      size="small"
      value={value}
      onChange={(event: any, value: string | null) => {
        setValue(value ?? "");
        dispatch(setCompare(value ?? ""));
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
