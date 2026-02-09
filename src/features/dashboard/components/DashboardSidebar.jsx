import { Drawer, Box, Typography } from "@mui/material";

const drawerWidth = 260;

const DashboardSidebar = () => {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
    >
      <Box sx={{ p: 2 }}>
        <Typography variant="h6" fontWeight="700">
          Admin panel
        </Typography>
      </Box>
    </Drawer>
  );
};

export default DashboardSidebar;
