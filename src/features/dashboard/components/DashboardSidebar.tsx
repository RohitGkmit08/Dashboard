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

const drawerWidth = 260;

const DashboardSidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const activePath = location.pathname;

  const handleLogout = () => {
    navigate("/login");
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
      {/* Title */}
      <Box sx={{ px: 2, mb: 4 }}>
        <Typography
          variant="h5"
          sx={(theme) => ({
            fontWeight: 800,
            color: theme.palette.primary.main,
          })}
        >
          Admin Panel
        </Typography>
      </Box>

      {/* Menu */}
      <Box sx={{ px: 2 }}>
        <List sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
          {/* Dashboard */}
          <ListItemButton
            onClick={() => navigate("/dashboard")}
            sx={(theme) => ({
              borderRadius: 2,
              bgcolor:
                activePath === "/dashboard"
                  ? theme.palette.primary.main
                  : theme.palette.action.hover,
              color:
                activePath === "/dashboard"
                  ? theme.palette.primary.contrastText
                  : theme.palette.text.primary,
              py: 1.5,
              "&:hover": {
                bgcolor:
                  activePath === "/dashboard"
                    ? theme.palette.primary.dark
                    : theme.palette.action.selected,
              },
            })}
          >
            <ListItemText
              primary="Dashboard"
              primaryTypographyProps={{
                fontSize: "0.95rem",
                fontWeight: 700,
              }}
            />
          </ListItemButton>

          {/* Settings */}
          <ListItemButton
            onClick={() => navigate("/dashboard/settings")}
            sx={(theme) => ({
              borderRadius: 2,
              bgcolor:
                activePath === "/dashboard/settings"
                  ? theme.palette.primary.main
                  : theme.palette.action.hover,
              color:
                activePath === "/dashboard/settings"
                  ? theme.palette.primary.contrastText
                  : theme.palette.text.primary,
              py: 1.5,
              "&:hover": {
                bgcolor:
                  activePath === "/dashboard/settings"
                    ? theme.palette.primary.dark
                    : theme.palette.action.selected,
              },
            })}
          >
            <ListItemText
              primary="Settings"
              primaryTypographyProps={{
                fontSize: "0.95rem",
                fontWeight: 600,
              }}
            />
          </ListItemButton>
        </List>
      </Box>

      <Box sx={{ flex: 1 }} />

      {/* Logout */}
      <Box sx={{ px: 2 }}>
        <Button
          fullWidth
          variant="text"
          onClick={handleLogout}
          sx={(theme) => ({
            bgcolor: theme.palette.action.hover,
            color: theme.palette.text.primary,
            borderRadius: 2,
            textTransform: "none",
            fontWeight: 700,
            py: 1.5,
            fontSize: "0.95rem",
            boxShadow: "none",
            "&:hover": {
              bgcolor: theme.palette.action.selected,
            },
          })}
        >
          Logout
        </Button>
      </Box>
    </Drawer>
  );
};

export default DashboardSidebar;
