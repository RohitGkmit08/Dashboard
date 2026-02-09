import { AppBar, Toolbar, Typography, Box, IconButton } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";

const DashboardTop = () => {
  return (
    <AppBar position="static" elevation={0}>
      <Toolbar>
        <Typography variant="h6" fontWeight="700">
          Dashboard
        </Typography>

        <Box sx={{ flex: 1 }} />
      </Toolbar>
    </AppBar>
  );
};

export default DashboardTop;
