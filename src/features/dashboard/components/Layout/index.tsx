import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar";
import Topbar from "../Topbar";
import { dashboardLayoutStyles as styles } from "../../styles/dashboard-styles";

const DashboardLayout = () => {
  return (
    <Box sx={styles.page}>
      <Sidebar/>

      <Box sx={styles.main}>
        <Topbar/>

        <Box sx={styles.content}>
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
};

export default DashboardLayout;
