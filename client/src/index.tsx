import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { StyledEngineProvider } from "@mui/material/styles";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { grey } from "@mui/material/colors";
import { Provider } from "react-redux";
import { store } from "./store/store";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: grey,
    background: {
      paper: grey[800],
      default: grey[900],
    },
    text: {
      primary: "#fff",
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <StyledEngineProvider injectFirst>
          <App />
        </StyledEngineProvider>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
