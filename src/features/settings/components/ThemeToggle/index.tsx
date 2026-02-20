import type { PaletteMode } from "@mui/material";
import { Box, Switch, Typography } from "@mui/material";

interface ThemeToggleProps {
  mode: PaletteMode;
  onToggleTheme: () => void;
}

const ThemeToggle = ({ mode, onToggleTheme }: ThemeToggleProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 2,
        color: "text.primary",
      }}
    >
      <Typography sx={{ fontWeight: 700 }}>
        {mode === "dark" ? "Dark Mode" : "Light Mode"}
      </Typography>

      <Switch checked={mode === "dark"} onChange={onToggleTheme} />
    </Box>
  );
};

export default ThemeToggle;