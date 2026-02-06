import { Routes, Route, Navigate } from "react-router-dom";

import Login from "./features/auth/login/Login";
import Dashboard from "./features/dashboard/Dashboard";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
};

export default App;
