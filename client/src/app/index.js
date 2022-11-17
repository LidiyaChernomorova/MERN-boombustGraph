import React, { useEffect, useState } from "react";
import api from "../api";
import CompanyList from "./components/company-list/company-list.component";

function App() {
  const [companies, setCompanies] = useState([]);

  function handleClick() {
    api.getCompaniesNames().then((res) => {
      setCompanies(Object.values(res.data.FULL_NAMES));
    });
  }

  useEffect(() => {
    handleClick();
  }, []);

  return (
    <>
      <h1>BOOM BUST Signals of Asymmetrical Risk/Reward</h1>
      <h2>SIGNALS</h2>
      {/* <button onClick={handleClick}>click!</button> */}
      {companies?.length && <CompanyList companies={companies} />}
    </>
  );
}

export default App;
