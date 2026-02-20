import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

import StatCard from "./components/StatCard";
import DashboardChart from "./components/DashboardChart";

import { useDashboardData } from "./hooks/useDashboardData";
import { dashboardLayoutStyles as styles } from "./styles/dashboardStyles";

const Dashboard = () => {
  const navigate = useNavigate();

  const { data, loading, error } = useDashboardData();

  if (loading) {
    return <Box sx={styles.loadingWrapper}>Loading...</Box>;
  }

  if (error) {
    return <Box sx={{ color: "red" }}>{error}</Box>;
  }

  if (!data) return null;

  return (
    <>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
          gap: 3,
          mb: 3,
        }}
      >
        <Box sx={{ cursor: "pointer" }} onClick={() => navigate("/dashboard/users")}>
          <StatCard title="Users" value={data.users} />
        </Box>

        <StatCard title="Revenue" value={data.revenue} />
        <StatCard title="Sessions" value={data.activeSessions} />
      </Box>

      <DashboardChart title="Analytics Overview" chartData={data.chart} />
    </>
  );
};

export default Dashboard;
