import type { SxProps, Theme } from "@mui/material/styles";

type Sx = SxProps<Theme>;

export const dashboardLayoutStyles: Record<string, Sx> = {
  page: {
    display: "flex",
    minHeight: "100vh",
    width: "100%",
    overflow: "hidden",
    bgcolor: (theme) => theme.palette.background.default,
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
    fontWeight: 900,
    color: (theme) => theme.palette.text.primary,
  },
};

export const statCardStyles: Record<string, Sx> = {
  card: {
    borderRadius: 3,
    height: "100%",
    width: "100%",
    flex: 1,
    border: (theme) => `1px solid ${theme.palette.divider}`,
    bgcolor: (theme) => theme.palette.background.paper,
  },
  content: {
    p: 3,
  },
  title: {
    color: (theme) => theme.palette.text.secondary,
    fontSize: "0.85rem",
    fontWeight: 600,
  },
  value: {
    mt: 1,
    mb: 1.5,
    color: (theme) => theme.palette.text.primary,
    fontWeight: 700,
  },
};

export const dashboardChartStyles: Record<string, Sx> = {
  card: {
    borderRadius: 3,
    border: (theme) => `1px solid ${theme.palette.divider}`,
    width: "100%",
    bgcolor: (theme) => theme.palette.background.paper,
  },

  content: {
    p: 3,
  },

  title: {
    mb: 2,
    fontWeight: 800,
    color: (theme) => theme.palette.text.primary,
  },

  chartWrapper: {
    width: "100%",
    overflow: "hidden",
  },

  chartSx: {
    width: "100%",

    "& .MuiChartsAxis-line": {
      stroke: (theme) => theme.palette.divider,
    },

    "& .MuiChartsAxis-tick": {
      stroke: (theme) => theme.palette.divider,
    },

    "& .MuiChartsGrid-line": {
      stroke: (theme) => theme.palette.divider,
      opacity: 0.35,
    },

    "& .MuiChartsAxis-tickLabel": {
      fill: (theme) => theme.palette.text.secondary,
      fontSize: 12,
      fontWeight: 600,
    },

    "& .MuiChartsAxis-label": {
      fill: (theme) => theme.palette.text.primary,
      fontSize: 13,
      fontWeight: 700,
    },

    "& .MuiChartsLegend-label": {
      fill: (theme) => theme.palette.text.secondary,
      fontSize: 12,
      fontWeight: 700,
    },
  },
};

export const dashboardSidebarStyles: Record<string, Sx> = {
  drawerPaper: {
    width: 260,
    boxSizing: "border-box",
    px: 2,
    py: 3,
  },

  titleWrapper: {
    px: 2,
    mb: 4,
  },

  title: {
    fontWeight: 800,
    color: (theme) => theme.palette.primary.main,
  },

  menuWrapper: {
    px: 2,
  },

  menuList: {
    display: "flex",
    flexDirection: "column",
    gap: 1,
  },

  navTextBold: {
    fontSize: "0.95rem",
    fontWeight: 700,
  },

  navTextSemiBold: {
    fontSize: "0.95rem",
    fontWeight: 600,
  },

  spacer: {
    flex: 1,
  },

  logoutWrapper: {
    px: 2,
  },

  logoutButton: {
    bgcolor: (theme) => theme.palette.action.hover,
    color: (theme) => theme.palette.text.primary,
    borderRadius: 2,
    textTransform: "none",
    fontWeight: 700,
    py: 1.5,
    fontSize: "0.95rem",
    boxShadow: "none",
    "&:hover": {
      bgcolor: (theme) => theme.palette.action.selected,
    },
  },
};
