import { Box } from "@mui/material";
import DashboardSidebar from "./DashboardSidebar";

const DashboardLayout = () => {
  return (
    <Box sx={{ display: "flex", minHeight: "100vh" }}>
      {/* Left Sidebar */}
      <DashboardSidebar />

      {/* Right Main Section */}
      <Box sx={{ flex: 1, p: 3 }}>
        <h2>Main Content Area</h2>
      </Box>
    </Box>
  );
};

export default DashboardLayout;
