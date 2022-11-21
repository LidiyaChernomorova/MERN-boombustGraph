import React, { useState } from "react";
import { Card, Typography } from "@mui/material";
import Plot from "react-plotly.js";
import { OhclData } from "plotly.js";
import { layout, config, makeData } from "./graph-settings";
import api from "../../api";
import DateRangePicker from "../date-range-picker/date-range-picker.component";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { companyDataStart } from "../../store/data/data.action";


function Graph() {
  const [data, setData] = useState<Partial<OhclData>[] | null>(null);

  const dispatch = useDispatch();
  //const tableData = useSelector(selectTableData);
  //const isLoading = useSelector(selectTableDataIsLoading);

  function getCompanyData(companyName: string): void {
    dispatch(companyDataStart(companyName))
    api.getCompanyData(companyName).then((res) => {
      setData(makeData(res.data));
    });
  }

  return (
    <Card sx={{ p: 2, mt: 2 }}>
      <div style={{display: 'flex', justifyContent: 'space-between'}}>
        <Typography sx={{ p: 1 }} variant="h6">
          GOOG
        </Typography>
        <DateRangePicker />
      </div>
      <button onClick={() => getCompanyData("GOOG")}>click</button>
      {data ? (
        <Plot
          data={data}
          layout={layout}
          config={config}
          useResizeHandler={true}
          style={{ width: "100%", height: "100%" }}
        />
      ) : (
        <>loading...</>
      )}
    </Card>
  );
}

export default Graph;
