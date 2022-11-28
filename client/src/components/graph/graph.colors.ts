import { red, lightGreen, lightBlue, yellow } from "@mui/material/colors";

export const GRAPH_COLORS = {
  MAIN: {
    decreasing: { line: { color: red[500] } },
    increasing: { line: { color: lightGreen[500] } },
  },
  COMPARE: {
    decreasing: { line: { color: lightBlue[500] } },
    increasing: { line: { color: yellow[500] } },
  },
};

export default GRAPH_COLORS;
