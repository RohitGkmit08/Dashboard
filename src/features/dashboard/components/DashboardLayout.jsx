import { Box } from "@mui/material";
import DashboardSidebar from "./DashboardSidebar";
import DashboardTop from "./DashboardTop";

const DashboardLayout = () => {
  return (
    <Box sx={{ display: "flex", minHeight: "100vh" }}>
      <DashboardSidebar />

      <Box sx={{ flex: 1 }}>
        <DashboardTop />

        <Box sx={{ p: 3 }}>
          <h2>Main Content Area</h2>
        </Box>
      </Box>
    </Box>
  );
};

export default DashboardLayout;
