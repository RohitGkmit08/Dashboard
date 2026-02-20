import type { PaletteMode } from "@mui/material";
import { Box, Card, CardContent, Typography } from "@mui/material";

import ThemeToggle from "./components/ThemeToggle";

interface SettingsProps {
  mode: PaletteMode;
  onToggleTheme: () => void;
}

const Settings = ({ mode, onToggleTheme }: SettingsProps) => {
  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" fontWeight={800} sx={{ mb: 3 }}>
        Settings
      </Typography>

      <Card sx={{ borderRadius: 3 }}>
        <CardContent sx={{ p: 3 }}>
          <Typography variant="h6" fontWeight={700} sx={{ mb: 2 }}>
            Global Theme
          </Typography>

          <ThemeToggle mode={mode} onToggleTheme={onToggleTheme} />
        </CardContent>
      </Card>
    </Box>
  );
};

export default Settings;
