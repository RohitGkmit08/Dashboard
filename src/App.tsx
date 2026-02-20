import React, { Suspense, lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import type { PaletteMode } from "@mui/material";
import { Box, CircularProgress } from "@mui/material";

const LoginPage = lazy(() => import("./features/auth/login"));
const DashboardLayout = lazy(
  () => import("./features/dashboard/components/Layout")
);
const DashboardPage = lazy(() => import("./features/dashboard"));
const SettingsPage = lazy(() => import("./features/settings"));
const UsersPage = lazy(() => import("./features/users"));

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
        <Route path="/login" element={<LoginPage />} />

        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<DashboardPage />} />
          <Route path="users" element={<UsersPage />} />
          <Route
            path="settings"
            element={
              <SettingsPage mode={mode} onToggleTheme={onToggleTheme} />
            }
          />
        </Route>

        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Suspense>
  );
};

export default App;