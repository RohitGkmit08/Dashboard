import { Box, Switch, Typography } from "@mui/material";

const ThemeToggle = ({ mode, onToggleTheme }) => {
  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
      <Typography sx={{ fontWeight: 600 }}>
        Dark Mode
      </Typography>

      <Switch checked={mode === "dark"} onChange={onToggleTheme} />
    </Box>
  );
};

export default ThemeToggle;
