export type ChartSeriesKey = "users" | "sessions" | "revenue";

export interface DashboardChartConfig {
  height: number;
  margin: { top: number; bottom: number; left: number; right: number };
  grid: { horizontal: boolean };
  xAxis: {
    scaleType: "band";
    categoryGapRatio: number;
    barGapRatio: number;
  };
}

export interface DashboardChartSeriesItem {
  key: ChartSeriesKey;
  label: string;
  cssVar: `--${string}`;
}

export const DASHBOARD_CHART_CONFIG: DashboardChartConfig = {
  height: 420,
  margin: { top: 20, bottom: 60, left: 60, right: 0 },
  grid: { horizontal: true },
  xAxis: {
    scaleType: "band",
    categoryGapRatio: 0.55,
    barGapRatio: 0.35,
  },
};

export const DASHBOARD_CHART_SERIES: DashboardChartSeriesItem[] = [
  { key: "users", label: "Users", cssVar: "--color-chart-users" },
  { key: "sessions", label: "Sessions", cssVar: "--color-chart-sessions" },
  { key: "revenue", label: "Revenue", cssVar: "--color-chart-revenue" },
];
