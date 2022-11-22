import React from "react";
import CompanyTable from "./components/company-table/company-table.component";
import Graph from "./components/graph/graph.component";
import { Typography } from "@mui/material";
import { deepOrange } from "@mui/material/colors";

function App() {
  return (
    <>
      <Typography sx={{ bgcolor: deepOrange[900], p: 1 }} variant="h5">
        BOOM BUST Signals of Asymmetrical Risk/Reward
      </Typography>
      <div style={{ padding: "20px" }}>
        <Typography sx={{ p: 1 }} variant="h6">
          SIGNALS
        </Typography>
        <CompanyTable />
        <Graph />
      </div>
    </>
  );
}

export default App;
