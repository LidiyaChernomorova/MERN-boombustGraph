import React from "react";
import { Card } from "@mui/material";
import Plot from "react-plotly.js";
import { OhclData, Layout, Config } from "plotly.js";

function Graph() {
  var trace1: Partial<OhclData> = {
    x: [
      "2017-01-17",
      "2017-01-18",
      "2017-01-19",
      "2017-01-20",
      "2017-01-23",
      "2017-01-24",
      "2017-01-25",
      "2017-01-26",
      "2017-01-27",
      "2017-01-30",
      "2017-01-31",
      "2017-02-01",
      "2017-02-02",
      "2017-02-03",
      "2017-02-06",
      "2017-02-07",
      "2017-02-08",
      "2017-02-09",
      "2017-02-10",
    ],

    decreasing: { line: { color: "#d70200" } },
    increasing: { line: { color: "#6ba583" } },

    open: [
      118.339996, 120, 119.400002, 120.449997, 120, 119.550003, 120.419998,
      121.669998, 122.139999, 120.93, 121.150002, 127.029999, 127.980003,
      128.309998, 129.130005, 130.539993, 131.350006, 131.649994, 132.460007,
    ],
    close: [
      120, 119.989998, 119.779999, 120, 120.080002, 119.970001, 121.879997,
      121.940002, 121.949997, 121.629997, 121.349998, 128.75, 128.529999,
      129.080002, 130.289993, 131.529999, 132.039993, 132.419998, 132.119995,
    ],
    high: [
      120.239998, 120.5, 120.089996, 120.449997, 120.809998, 120.099998,
      122.099998, 122.440002, 122.349998, 121.629997, 121.389999, 130.490005,
      129.389999, 129.190002, 130.5, 132.089996, 132.220001, 132.449997,
      132.940002,
    ],
    low: [
      118.220001, 119.709999, 119.370003, 119.730003, 119.769997, 119.5,
      120.279999, 121.599998, 121.599998, 120.660004, 120.620003, 127.010002,
      127.779999, 128.160004, 128.899994, 130.449997, 131.220001, 131.119995,
      132.050003,
    ],

    type: "ohlc" as 'ohcl',
    xaxis: "x",
    yaxis: "y",
  };

  var data: Partial<OhclData>[] = [trace1];

  var layout: Partial<Layout> = {
    plot_bgcolor: "transparent",
    paper_bgcolor: "transparent",
    xaxis: {
      linecolor: "green",
      gridcolor: "yellow",
      color: "white",
      griddash: "dot",
      rangeslider: {
        visible: false,
      },
    },
    yaxis: {
      side: "right",
      linecolor: "green",
      gridcolor: "yellow",
      color: "white",
      griddash: "dot",
    },
  };

  const config: Partial<Config> = {
    autosizable: true,
    //responsive: true,
  };

  return (
    <Card sx={{ p: 2, mt: 2 }}>
      <Plot data={data} layout={layout} config={config} />
    </Card>
  );
}

export default Graph;