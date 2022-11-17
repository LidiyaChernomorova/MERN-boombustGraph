import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import { StyledEngineProvider } from "@mui/material/styles";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { deepOrange, grey } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: grey,
    border: "#fff",
    background: {
      paper: grey[800],
      default: grey[900],
      secondary: deepOrange[900],
    },
    text: {
      primary: "#fff",
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <StyledEngineProvider injectFirst>
        <App />
      </StyledEngineProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
