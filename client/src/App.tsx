import React, { useEffect, useState } from "react";
import api from "./api";
import CompanyTable from "./app/components/company-table/company-table.component";
import Graph from "./app/components/graph/graph.component";
import { Typography } from "@mui/material";
import MetaDataResp from "./app/interfaces/meta-data-resp.interface";
import CompanyData from "./app/interfaces/company-data.interface";
import { deepOrange } from "@mui/material/colors";

function App() {
  const [companies, setCompanies] = useState<CompanyData[]>([]);

  function createData(res: { data: MetaDataResp }): CompanyData[] {
    const data = Object.entries(res.data.FULL_NAMES);
    return data.map((item) => {
      return { asset: item[0], name: item[1], date: "1/1/1111", note: "ololo" };
    });
  }

  function getData(): void {
    api.getMetaData().then((res: { data: MetaDataResp }) => {
      setCompanies(createData(res));
    });
  }

  function getCompanyData(companyName: string): void {
    api.getCompanyData(companyName).then((res: { data: MetaDataResp }) => {
      setCompanies(createData(res));
    });
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
    <button onClick={()=>getCompanyData('GOOG')}>click</button>
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
