import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";

import DashboardSidebar from "./DashboardSidebar";
import DashboardTop from "./DashboardTop";

import { dashboardLayoutStyles as styles } from "../styles/dashboardStyles";

const DashboardLayout = () => {
  return (
    <Box sx={styles.page}>
      <DashboardSidebar />

      <Box sx={styles.main}>
        <DashboardTop />

        <Box sx={styles.content}>
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
};

export default DashboardLayout;
