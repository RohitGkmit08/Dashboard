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
          bgcolor: "#ffffff",
          borderRight: "1px solid #e5e7eb",
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
            color: "#4f46e5",
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
              bgcolor: activePath === "/dashboard" ? "#4f46e5" : "#f1f5f9",
              color: activePath === "/dashboard" ? "white" : "#111827",
              py: 1.5,
              "&:hover": {
                bgcolor: activePath === "/dashboard" ? "#4338ca" : "#e2e8f0",
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
                activePath === "/dashboard/settings" ? "#4f46e5" : "#f1f5f9",
              color:
                activePath === "/dashboard/settings" ? "white" : "#111827",
              py: 1.5,
              "&:hover": {
                bgcolor:
                  activePath === "/dashboard/settings"
                    ? "#4338ca"
                    : "#e2e8f0",
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
            bgcolor: "#ef4444",
            borderRadius: 2,
            textTransform: "none",
            fontWeight: 700,
            py: 1.5,
            fontSize: "0.95rem",
            boxShadow: "none",
            "&:hover": { bgcolor: "#dc2626" },
          }}
        >
          Logout
        </Button>
      </Box>
    </Drawer>
  );
};

export default DashboardSidebar;
