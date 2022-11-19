import { Layout, Config } from "plotly.js";
import { grey } from "@mui/material/colors";
import GraphData from "../../interfaces/graph-data.interface";

export const layout: Partial<Layout> = {
  height: 270,
  plot_bgcolor: "transparent",
  paper_bgcolor: "transparent",
  xaxis: {
    linecolor: "white",
    gridcolor: grey[600],
    color: "white",
    griddash: "dot",
    rangeslider: {
      visible: false,
    },
  },
  yaxis: {
    side: "right",
    linecolor: "white",
    gridcolor: grey[600],
    color: "white",
    griddash: "dot",
  },
  margin: {
    t: 0,
    b: 35,
    l: 0,
    r: 30,
    pad: 0,
  },
};

export const config: Partial<Config> = {
  responsive: true,
  displayModeBar: false,
};

export function makeData(data: GraphData): any {
  const defaultSettings = {
    decreasing: { line: { color: "#d70200" } },
    increasing: { line: { color: "#6ba583" } },
    type: "ohlc" as "ohcl",
    xaxis: "x",
    yaxis: "y",
  };

  return [
    {
      ...defaultSettings,
      x: data.DATE,
      open: data.OPEN,
      close: data.CLOSE,
      high: data.HIGH,
      low: data.LOW,
    },
  ];
}
