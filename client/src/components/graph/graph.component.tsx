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
  selectPikedCompanyFrom,
  selectPikedCompanyTo,
} from "../../store/data/data.selector";

function Graph() {
  const [data, setData] = useState<Partial<OhclData> | null>(null);
  const [layout, setLayout] = useState<Partial<Layout> | null>(null);
  const companyPicked = useSelector(selectPikedCompany);
  const companyPickedName = useSelector(selectPikedCompanyName);
  const companyPickedFrom = useSelector(selectPikedCompanyFrom);
  const companyPickedTo = useSelector(selectPikedCompanyTo);
  const isLoading = useSelector(selectCompanyDataIsLoading);

  useEffect(() => {
    if (companyPickedFrom && companyPickedTo) {
      setLayout(makeLayout([+companyPickedFrom.index, +companyPickedTo.index]));
    } else {
      setLayout(makeLayout(null));
    }
    companyPicked && setData(makeData(companyPicked));
  }, [companyPicked, companyPickedFrom, companyPickedTo]);

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
              {companyPickedName}
            </Typography>
            <DateRangePicker />
          </div>
          <Plot
            data={[data]}
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
