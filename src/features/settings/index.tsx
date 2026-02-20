import type { PaletteMode } from "@mui/material";
import { Box, Card, CardContent, Typography } from "@mui/material";

import ThemeToggle from "./components/ThemeToggle";

interface SettingsProps {
  mode: PaletteMode;
  onToggleTheme: () => void;
}

const Settings = ({ mode, onToggleTheme }: SettingsProps) => {
  return (
    <Box
      sx={{
        p: 4,
        bgcolor: "background.default",
        height:"100vh"
      }}
    >
      <Typography
        variant="h4"
        sx={{
          mb: 3,
          fontWeight: 900,
          color: "text.primary",
        }}
      >
        Settings
      </Typography>

      <Card
        sx={{
          borderRadius: 3,
          bgcolor: "background.paper",
          border: "1px solid",
          borderColor: "divider",
        }}
      >
        <CardContent sx={{ p: 3 }}>
          <Typography
            variant="h6"
            sx={{
              mb: 2,
              fontWeight: 800,
              color: "text.primary",
            }}
          >
            Global Theme
          </Typography>

          <ThemeToggle mode={mode} onToggleTheme={onToggleTheme} />
        </CardContent>
      </Card>
    </Box>
  );
};

export default Settings;
