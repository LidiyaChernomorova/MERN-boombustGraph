import React, { useEffect, useState } from "react";
import api from "../api";
import CompanyTable from "./components/company-table/company-table.component";
import Graph from "./components/graph/graph.component";

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
      <h1 style={{ paddingLeft: '10px', background: 'brown', marginTop: 0 }}>BOOM BUST Signals of Asymmetrical Risk/Reward</h1>
      <h2 style={{ marginLeft: '40px' }}>SIGNALS</h2>
      {companies?.length && <CompanyTable rows={companies} />}
      <Graph />
    </>
  );
}

export default App;
