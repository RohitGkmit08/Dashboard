import type { ChartSeriesKey } from "../constants/dashboardChartConstants";

export interface DashboardChartPoint extends Record<ChartSeriesKey, number> {
  day: string;
}

export interface DashboardData {
  users: number;
  activeSessions: number;
  revenue: number;
  chart: DashboardChartPoint[];
}

export const DASHBOARD_DATA: DashboardData = {
  users: 150,
  activeSessions: 642,
  revenue: 15000,

  chart: [{ day: "Mon", users: 150, sessions: 642, revenue: 15000 }],
};
