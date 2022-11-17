import React, { useEffect, useState } from "react";
import api from "../api";
import CompanyTable from "./components/company-table/company-table.component";

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
      <h1>BOOM BUST Signals of Asymmetrical Risk/Reward</h1>
      <h2>SIGNALS</h2>
      {/* <button onClick={getData}>click!</button> */}
      {companies?.length && <CompanyTable rows={companies} />}
    </>
  );
}

export default App;
