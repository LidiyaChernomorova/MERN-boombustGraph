import React, { useEffect } from "react";
import CompanyTable from "./components/company-table/company-table.component";
import Graph from "./components/graph/graph.component";
import { Typography } from "@mui/material";
import { deepOrange } from "@mui/material/colors";
import {
  selectTableData,
  selectTableDataIsLoading,
} from "./store/data/data.selector";
import { tableDataStart } from "./store/data/data.action";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const tableData = useSelector(selectTableData);
  const isLoading = useSelector(selectTableDataIsLoading);

  useEffect(() => {
    dispatch(tableDataStart());
  }, []);

  if (isLoading) {
    return <>loading...</>;
  }

  return (
    <>
      <Typography sx={{ bgcolor: deepOrange[900], p: 1 }} variant="h5">
        BOOM BUST Signals of Asymmetrical Risk/Reward
      </Typography>
      <div style={{ padding: "20px" }}>
        <Typography sx={{ p: 1 }} variant="h6">
          SIGNALS
        </Typography>
        {tableData?.length && <CompanyTable rows={tableData} />}
        <Graph />
      </div>
    </>
  );
}

export default App;
