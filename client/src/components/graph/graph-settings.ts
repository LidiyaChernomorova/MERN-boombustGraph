import { Layout, Config, OhclData } from "plotly.js";
import { grey } from "@mui/material/colors";
import CompanyData from "../../interfaces/company-data.interface";
import GRAPH_COLORS from "./graph.colors";

interface LineColors {
  decreasing: { line: { color: string } };
  increasing: { line: { color: string } };
}

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

export function makeLayout(range: string[] | null): Partial<any> {
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
      b: 35,
      l: 10,
      r: 35,
      pad: 0,
    },
  };

  return range && !range.includes("")
    ? {
        ...defaultSettings,
        xaxis: {
          ...defaultSettings.xaxis,
          autorange: false,
          range: range.map((d) => (d ? parseDateForPlotly(d) + ":00" : d)),
        },
      }
    : defaultSettings;
}

export const config: Partial<Config> = {
  responsive: true,
  displayModeBar: false,
};

export function makeData(
  conpany: CompanyData,
  conpanyCompare?: CompanyData
): Partial<OhclData>[] {
  const defaultSettings = {
    type: "ohlc" as "ohcl",
    xaxis: "x",
    yaxis: "y",
  };
  const colors = conpanyCompare ? GRAPH_COLORS.COMPARE : GRAPH_COLORS.MAIN;
  const data = {
    ...defaultSettings,
    ...colors,
    x: conpany?.DATE && conpany.DATE.map((d) => parseDateForPlotly(d)),
    open: conpany.OPEN,
    close: conpany.CLOSE,
    high: conpany.HIGH,
    low: conpany.LOW,
  };

  return conpanyCompare ? [data, ...makeData(conpanyCompare)] : [data];
}
