export const DASHBOARD_CHART_CONFIG = {
  height: 420,
  margin: { top: 20, bottom: 60, left: 60, right: 0 },
  grid: { horizontal: true },
  xAxis: {
    scaleType: "band",
    categoryGapRatio: 0.55,
    barGapRatio: 0.35,
  },
};

export const DASHBOARD_CHART_SERIES = [
  { key: "users", label: "Users", cssVar: "--color-chart-users" },
  { key: "sessions", label: "Sessions", cssVar: "--color-chart-sessions" },
  { key: "revenue", label: "Revenue", cssVar: "--color-chart-revenue" },
];
