import type { SxProps, Theme } from "@mui/material/styles";

type Sx = SxProps<Theme>;

export const dashboardLayoutStyles: Record<string, Sx> = {
  page: {
    display: "flex",
    minHeight: "100vh",
    width: "100%",
    overflow: "hidden",
    bgcolor: "background.default",
  },

  main: {
    flex: 1,
    minWidth: 0,
    width: "100%",
    overflow: "hidden",
  },

  content: {
    px: 4,
    pb: 4,
    pt: 3,
    width: "100%",
  },

  loadingWrapper: {
    display: "flex",
    justifyContent: "center",
    mt: 8,
  },

  cardsRow: {
    mb: 3,
    width: "100%",
  },

  cardItem: {
    display: "flex",
  },

  chartWrapper: {
    width: "100%",
    overflow: "hidden",
  },
};

export const dashboardTopStyles: Record<string, Sx> = {
  wrapper: {
    px: 4,
    py: 3,
  },
  title: {
    color: "text.primary",
    fontWeight: 900,
  },
};

export const statCardStyles: Record<string, Sx> = {
  card: {
    borderRadius: 3,
    height: "100%",
    width: "100%",
    flex: 1,
    border: "1px solid",
    borderColor: "divider",
    bgcolor: "background.paper",
  },
  content: {
    p: 3,
  },
  title: {
    color: "text.secondary",
    fontSize: "0.85rem", 
    fontWeight: 600,
  },
  value: {
    mt: 1,
    mb: 0,
    color: "text.primary",
    fontWeight: 700,
    fontSize: "2.2rem", 
  },
};

export const dashboardChartStyles: Record<string, Sx> = {
  card: {
    borderRadius: 3,
    border: "1px solid",
    borderColor: "divider",
    width: "100%",
    bgcolor: "background.paper",
  },

  content: {
    p: 3,
  },

  title: {
    mb: 2,
    color: "text.primary",
    fontWeight: 800,
  },

  chartWrapper: {
    width: "100%",
    overflow: "hidden",
  },

  chartSx: {
    width: "100%",

    "& .MuiChartsAxis-line": (theme) => ({
      stroke: theme.palette.divider,
    }),
    "& .MuiChartsAxis-tick": (theme) => ({
      stroke: theme.palette.divider,
    }),

    "& .MuiChartsGrid-line": (theme) => ({
      stroke: theme.palette.divider,
      opacity: theme.palette.mode === "dark" ? 0.25 : 0.4,
    }),

    "& .MuiChartsAxis-tickLabel": (theme) => ({
      fill: theme.palette.text.secondary,
      fontSize: 12,
      fontWeight: 600,
    }),

    "& .MuiChartsLegend-label": (theme) => ({
      fill: theme.palette.text.primary,
      fontSize: 12,
      fontWeight: 700,
    }),
  },
};
