import { Routes, Route, Navigate } from "react-router-dom";
import type { PaletteMode } from "@mui/material";

import Login from "./features/auth/login/Login";
import Dashboard from "./features/dashboard/Dashboard";
import DashboardLayout from "./features/dashboard/components/DashboardLayout";
import Settings from "./features/settings/Settings";

interface AppProps {
  mode: PaletteMode;
  setMode: React.Dispatch<React.SetStateAction<PaletteMode>>;
}

const App = ({ mode, setMode }: AppProps) => {
  const onToggleTheme = () => {
    setMode((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
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
  );
};

export default App;
