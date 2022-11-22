import React, { useState, useEffect } from "react";
import { Card, Typography } from "@mui/material";
import Plot from "react-plotly.js";
import { OhclData } from "plotly.js";
import { layout, config, makeData } from "./graph-settings";
import DateRangePicker from "../date-range-picker/date-range-picker.component";
import { useSelector } from "react-redux";
import {
  selectPikedCompany,
  selectPikedCompanyName,
  selectTableDataIsLoading,
} from "../../store/data/data.selector";

function Graph() {
  const [data, setData] = useState<Partial<OhclData>[] | null>(null);
  const companyPicked = useSelector(selectPikedCompany);
  const companyPickedName = useSelector(selectPikedCompanyName);
  const isLoading = useSelector(selectTableDataIsLoading);
  useEffect(() => {
    companyPicked && setData(makeData(companyPicked));
  }, [companyPicked]);

  return (
    <Card sx={{ p: 2, mt: 2 }} style={{ height: "500px" }}>
      {isLoading ? (
        <>loading...</>
      ) : data ? (
        <>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Typography sx={{ p: 1 }} variant="h6">
              {companyPickedName}
            </Typography>
            <DateRangePicker />
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
