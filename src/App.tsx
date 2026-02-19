import { Routes, Route, Navigate } from "react-router-dom";
import type { PaletteMode } from "@mui/material";

import LoginPage from "./features/auth/login";
import DashboardPage from "./features/dashboard/Page";
import DashboardLayout from "./features/dashboard/components/Layout";
import SettingsPage from "./features/settings/Page";
import UsersPage from "./features/users/Page";

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
      <Route path="/login" element={<LoginPage />} />

      <Route path="/dashboard" element={<DashboardLayout />}>
        
        <Route index element={<DashboardPage />} />
        <Route path="users" element={<UsersPage />} />

        <Route path="settings"element={<SettingsPage mode={mode} onToggleTheme={onToggleTheme} />}/>
      </Route>

      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
};

export default App;
