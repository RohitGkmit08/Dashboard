import { Box, Typography } from "@mui/material";
import { dashboardTopStyles as styles } from "../styles/dashboardStyles";

const DashboardTop = () => {
  return (
    <Box sx={styles.wrapper}>
      <Typography variant="h4" sx={styles.title}>
        Dashboard
      </Typography>
    </Box>
  );
};

export default DashboardTop;

