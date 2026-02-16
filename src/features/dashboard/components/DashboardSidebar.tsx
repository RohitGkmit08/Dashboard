import { useLocation, useNavigate } from "react-router-dom";

import {
  Box,
  Button,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";

import { dashboardSidebarStyles as styles } from "../styles/dashboardStyles";

const drawerWidth = 260;

const DashboardSidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const activePath = location.pathname;

  const handleLogout = () => {
    navigate("/login");
  };

  const getNavItemSx = (path: string) => (theme: any) => {
    const isActive = activePath === path;

    return {
      borderRadius: 2,
      bgcolor: isActive ? theme.palette.primary.main : theme.palette.action.hover,
      color: isActive
        ? theme.palette.primary.contrastText
        : theme.palette.text.primary,
      py: 1.5,
      "&:hover": {
        bgcolor: isActive
          ? theme.palette.primary.dark
          : theme.palette.action.selected,
      },
    };
  };

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
          "& .MuiDrawer-paper": (theme) => ({
          width: drawerWidth,
          boxSizing: "border-box",
          bgcolor: theme.palette.background.paper,
          borderRight: `1px solid ${theme.palette.divider}`,
          px: 2,
          py: 3,
        }),
      }}
    >

      <Box sx={styles.titleWrapper}>
        <Typography variant="h5" sx={styles.title}>
          Admin Panel
        </Typography>
      </Box>

      <Box sx={styles.menuWrapper}>
        <List sx={styles.menuList}>
          <ListItemButton
            onClick={() => navigate("/dashboard")}
            sx={getNavItemSx("/dashboard")}
          >
            <ListItemText
              primary="Dashboard"
              slotProps={{
                primary: {
                  sx: { ...styles.navTextBold },
                },
              }}
            />
          </ListItemButton>

          <ListItemButton
            onClick={() => navigate("/dashboard/settings")}
            sx={getNavItemSx("/dashboard/settings")}
          >
            <ListItemText
              primary="Settings"
              slotProps={{
                primary: {
                  sx: { ...styles.navTextSemiBold },
                },
              }}
            />
          </ListItemButton>
        </List>
      </Box>

      <Box sx={styles.spacer} />

      <Box sx={styles.logoutWrapper}>
        <Button
          fullWidth
          variant="text"
          onClick={handleLogout}
          sx={styles.logoutButton}
        >
          Logout
        </Button>
      </Box>
    </Drawer>
  );
};

export default DashboardSidebar;
