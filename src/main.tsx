import React, { useMemo, useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import type { PaletteMode } from "@mui/material";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";

import App from "./App";
import "./index.css";

const Main = () => {
  const [mode, setMode] = useState<PaletteMode>("light");

  const theme = useMemo(() => {
    return createTheme({
      palette: {
        mode,
      },
    });
  }, [mode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <App mode={mode} setMode={setMode} />
      </BrowserRouter>
    </ThemeProvider>
  );
};

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);
