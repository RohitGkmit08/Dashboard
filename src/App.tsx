import { useMemo, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";

import Dashboard from "./features/dashboard/Dashboard";
import Settings from "./features/settings/Settings";

const App = () => {
  const [mode, setMode] = useState("light");

  const theme = useMemo(() => {
    return createTheme({
      palette: {
        mode,
      },
    });
  }, [mode]);

  const toggleTheme = () => {
    setMode((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route
          path="/settings"
          element={<Settings mode={mode} onToggleTheme={toggleTheme} />}
        />
        <Route path="*" element={<h2>404 - Page Not Found</h2>} />
      </Routes>
    </ThemeProvider>
  );
};

export default App;
