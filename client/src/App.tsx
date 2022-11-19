import React, { useEffect, useState } from "react";
import api from "./api";
import CompanyTable from "./app/components/company-table/company-table.component";
import Graph from "./app/components/graph/graph.component";
import { Typography } from "@mui/material";
import CompaniesResponce from "./app/interfaces/companies-responce.interface";
import CompanyData from "./app/interfaces/company-data.interface";
import { deepOrange } from "@mui/material/colors";

function App() {
  const [companies, setCompanies] = useState<CompanyData[]>([]);

  function createData(res: { data: CompaniesResponce }): CompanyData[] {
    const data = Object.entries(res.data.FULL_NAMES);
    return data.map((item) => {
      return { asset: item[0], name: item[1], date: "1/1/1111", note: "ololo" };
    });
  }

  function getData(): void {
    api.getCompaniesNames().then((res: { data: CompaniesResponce }) => {
      setCompanies(createData(res));
    });
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Typography sx={{ bgcolor: deepOrange[900], p: 1 }} variant="h5">
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
