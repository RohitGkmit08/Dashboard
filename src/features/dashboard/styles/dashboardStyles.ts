import type { SxProps, Theme } from "@mui/material/styles";

type Sx = SxProps<Theme>;

export const dashboardLayoutStyles: Record<string, Sx> = {
  page: {
    display: "flex",
    minHeight: "100vh",
    width: "100%",
    bgcolor: "#f8fafc",
    overflow: "hidden",
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
    color: "#111827",
    fontWeight: 900,
  },
};

export const statCardStyles: Record<string, Sx> = {
  card: {
    borderRadius: 3,
    height: "100%",
    width: "100%",
    flex: 1,
    border: "1px solid #e5e7eb",
  },
  content: {
    p: 3,
  },
  title: {
    color: "#64748b",
    fontSize: "0.9rem",
    fontWeight: 500,
  },
  value: {
    mt: 1,
    mb: 1.5,
    color: "#111827",
    fontWeight: 500,
  },
};

export const dashboardChartStyles: Record<string, Sx> = {
  card: {
    borderRadius: 3,
    border: "1px solid #e5e7eb",
    width: "100%",
  },

  content: {
    p: 3,
  },

  title: {
    mb: 2,
    color: "#111827",
    fontWeight: 700,
  },

  chartWrapper: {
    width: "100%",
    overflow: "hidden",
  },

  chartSx: {
    width: "100%",

    "& .MuiChartsAxis-line": { stroke: "#e2e8f0" },
    "& .MuiChartsAxis-tick": { stroke: "#e2e8f0" },
    "& .MuiChartsGrid-line": { stroke: "#f1f5f9" },

    "& .MuiChartsAxis-tickLabel": {
      fill: "#475569",
      fontSize: 13,
      fontWeight: 600,
    },

    "& .MuiChartsLegend-label": {
      fill: "#334155",
      fontSize: 12,
      fontWeight: 600,
    },
  },
};
