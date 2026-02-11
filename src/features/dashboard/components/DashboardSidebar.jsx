import { useNavigate, useLocation } from "react-router-dom";

import {
  Drawer,
  Box,
  Typography,
  List,
  ListItemButton,
  ListItemText,
  Button,
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
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
          bgcolor: "var(--color-sidebar-bg)",
          borderRight: "1px solid var(--color-sidebar-border)",
          px: 2,
          py: 3,
        },
      }}
    >
      {/* Title */}
      <Box sx={{ px: 2, mb: 4 }}>
        <Typography
          variant="h5"
          sx={{
            fontWeight: 800,
            color: "var(--color-primary)",
          }}
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
            sx={{
              borderRadius: 2,
              bgcolor:
                activePath === "/dashboard"
                  ? "var(--color-primary)"
                  : "var(--color-sidebar-item-bg)",
              color:
                activePath === "/dashboard"
                  ? "var(--color-white)"
                  : "var(--color-sidebar-text)",
              py: 1.5,
              "&:hover": {
                bgcolor:
                  activePath === "/dashboard"
                    ? "var(--color-primary-hover)"
                    : "var(--color-sidebar-item-hover)",
              },
            }}
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
            sx={{
              borderRadius: 2,
              bgcolor:
                activePath === "/dashboard/settings"
                  ? "var(--color-primary)"
                  : "var(--color-sidebar-item-bg)",
              color:
                activePath === "/dashboard/settings"
                  ? "var(--color-white)"
                  : "var(--color-sidebar-text)",
              py: 1.5,
              "&:hover": {
                bgcolor:
                  activePath === "/dashboard/settings"
                    ? "var(--color-primary-hover)"
                    : "var(--color-sidebar-item-hover)",
              },
            }}
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
          variant="contained"
          onClick={handleLogout}
          sx={{
            bgcolor: "var(--color-danger)",
            borderRadius: 2,
            textTransform: "none",
            fontWeight: 700,
            py: 1.5,
            fontSize: "0.95rem",
            boxShadow: "none",
            "&:hover": { bgcolor: "var(--color-danger-hover)" },
          }}
        >
          Logout
        </Button>
      </Box>
    </Drawer>
  );
};

export default DashboardSidebar;
