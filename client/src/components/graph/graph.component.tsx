import React, { useState, useEffect } from "react";
import { Card, Typography } from "@mui/material";
import Plot from "react-plotly.js";
import { OhclData, Layout } from "plotly.js";
import { makeLayout, config, makeData } from "./graph-settings";
import DateRangePicker from "../date-range-picker/date-range-picker.component";
import { useSelector } from "react-redux";
import {
  selectPikedCompany,
  selectPikedCompanyName,
  selectCompanyDataIsLoading,
  selectFrom,
  selectTo,
  selectCompanyCompare,
} from "../../store/data/data.selector";
import CompareInput from "../compare-input.component copy/compare-input.component";

function Graph() {
  const [data, setData] = useState<Partial<OhclData>[] | null>(null);
  const [layout, setLayout] = useState<Partial<Layout> | null>(null);
  const company = useSelector(selectPikedCompany);
  const companyName = useSelector(selectPikedCompanyName);
  const selectedFrom = useSelector(selectFrom);
  const selectedTo = useSelector(selectTo);
  const isLoading = useSelector(selectCompanyDataIsLoading);
  const companyCompare = useSelector(selectCompanyCompare);

  useEffect(() => {
    setLayout(
      makeLayout(
        selectedFrom && selectedTo
          ? [selectedFrom.value, selectedTo.value]
          : null
      )
    );
  }, [selectedFrom, selectedTo]);

  useEffect(() => {
    company &&
      setData(
        companyCompare ? makeData(company, companyCompare) : makeData(company)
      );
  }, [company, selectedFrom, selectedTo, companyCompare]);

  return (
    <Card sx={{ p: 2, mt: 2 }} style={{ height: "500px" }}>
      {isLoading ? (
        <>loading...</>
      ) : data && layout ? (
        <>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "20px",
            }}
          >
            <Typography sx={{ p: 1 }} variant="h6">
              {companyName}
            </Typography>
            <div style={{ display: "flex", gap: "40px" }}>
              <CompareInput />
              <DateRangePicker />
            </div>
          </div>
          <Plot
            data={data}
            layout={layout}
            config={config}
            useResizeHandler={true}
            style={{ width: "100%", height: "400px" }}
          />
        </>
      ) : (
        <>no company selected</>
      )}
    </Card>
  );
}

export default Graph;
