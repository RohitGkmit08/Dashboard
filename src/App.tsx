import React, { Suspense, lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import type { PaletteMode } from "@mui/material";
import { Box, CircularProgress } from "@mui/material";

const Login = lazy(() => import("./features/auth/login/Login"));
const Dashboard = lazy(() => import("./features/dashboard/Dashboard"));
const DashboardLayout = lazy(
  () => import("./features/dashboard/components/DashboardLayout")
);
const Settings = lazy(() => import("./features/settings/Settings"));

interface AppProps {
  mode: PaletteMode;
  setMode: React.Dispatch<React.SetStateAction<PaletteMode>>;
}

const PageLoader = () => {
  return (
    <Box
      sx={{
        minHeight: "60vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <CircularProgress />
    </Box>
  );
};

const App = ({ mode, setMode }: AppProps) => {
  const onToggleTheme = () => {
    setMode((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />

        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
          <Route
            path="settings"
            element={<Settings mode={mode} onToggleTheme={onToggleTheme} />}
          />
        </Route>

        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Suspense>
  );
};

export default App;
