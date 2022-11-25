import { Layout, Config, OhclData } from "plotly.js";
import { grey } from "@mui/material/colors";
import CompanyData from "../../interfaces/company-data.interface";

// m/d/yyyy -> yyyy-mm-dd
function parseDateForPlotly(dateAndHour: string): string {
  const [date, hour] = dateAndHour.split(" ");
  const arr = date.split("/");
  const result =
    [
      arr[2],
      arr[0].length === 1 ? "0" + arr[0] : arr[0],
      arr[1].length === 1 ? "0" + arr[1] : arr[1],
    ].join("-") +
    " " +
    hour;
  return result;
}

export function makeLayout(range: number[] | null): Partial<any> {
  const defaultSettings: Partial<Layout> = {
    showlegend: false,
    plot_bgcolor: "transparent",
    paper_bgcolor: "transparent",
    xaxis: {
      autorange: true,
      rangeslider: {
        visible: false,
      },
      type: "date",
      linecolor: "white",
      gridcolor: grey[600],
      color: "white",
      griddash: "dot",
    },
    yaxis: {
      autorange: true,
      type: "linear",
      side: "right",
      linecolor: "white",
      gridcolor: grey[600],
      color: "white",
      griddash: "dot",
    },
    margin: {
      t: 0,
      b: 120,
      l: 10,
      r: 35,
      pad: 0,
    },
  };

  return range
    ? { ...defaultSettings, xaxis: { ...defaultSettings.xaxis, range } }
    : defaultSettings;
}

export const config: Partial<Config> = {
  responsive: true,
  displayModeBar: false,
};

export function makeData(data: CompanyData): Partial<OhclData> {
  const defaultSettings = {
    decreasing: { line: { color: "#d70200" } },
    increasing: { line: { color: "#6ba583" } },
    type: "ohlc" as "ohcl",
    xaxis: "x",
    yaxis: "y",
  };

  return {
    ...defaultSettings,
    x: data.DATE.map((d) => parseDateForPlotly(d)),
    open: data.OPEN,
    close: data.CLOSE,
    high: data.HIGH,
    low: data.LOW,
  };
}
