import React, { useEffect, useState } from "react";
import api from "../api";
import CompanyTable from "./components/company-table/company-table.component";
import Graph from "./components/graph/graph.component";
import { Typography } from "@mui/material";

function App() {
  const [companies, setCompanies] = useState([]);

  function createData(res) {
    const data = Object.entries(res.data.FULL_NAMES);
    return data.map((item) => {
      return { asset: item[0], name: item[1], date: "1/1/1111", note: "ololo" };
    });
  }

  function getData() {
    api.getCompaniesNames().then((res) => {
      setCompanies(createData(res));
    });
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Typography sx={{ bgcolor: "background.secondary", p: 1 }} variant="h5">
        BOOM BUST Signals of Asymmetrical Risk/Reward
      </Typography>
      <div style={{ padding: "20px" }}>
        <Typography sx={{ p: 1 }} variant="h6">
          SIGNALS
        </Typography>
        {companies?.length && <CompanyTable rows={companies} />}
        <Graph />
      </div>
    </>
  );
}

export default App;
