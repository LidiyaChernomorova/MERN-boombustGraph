import React, { useEffect, useState } from "react";
import api from "./api";
import CompanyTable from "./components/company-table/company-table.component";
import Graph from "./components/graph/graph.component";
import { Typography } from "@mui/material";
import MetaDataResp from "./interfaces/meta-data-resp.interface";
import CompanyData from "./interfaces/company-data.interface";
import { deepOrange } from "@mui/material/colors";

// import {
//   selectCartItemsCount,
//   selectPopupOpened,
// } from "../../store/cart/cart.selector";
import { metaDataStart } from "./store/data/data.action";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

function App() {
  const [companies, setCompanies] = useState<CompanyData[]>([]);

  const dispatch = useDispatch();

//  const metaData = useSelector(selectCurrentUser);

  //const isLoading = useSelector(selectUserIsLoading);

  async function metaDataHandler() {
    dispatch(metaDataStart());
  }


  function createData(res: { data: MetaDataResp }): CompanyData[] {
    const data = Object.entries(res.data.FULL_NAMES);
    return data.map((item) => {
      return { asset: item[0], name: item[1], date: "1/1/1111", note: "ololo" };
    });
  }

  function getData(): void {
    metaDataHandler();
    api.getMetaData().then((res: { data: MetaDataResp }) => {
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
