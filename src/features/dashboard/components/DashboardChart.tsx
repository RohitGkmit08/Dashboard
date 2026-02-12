import { Box, Card, CardContent, Typography } from "@mui/material";
import { BarChart } from "@mui/x-charts/BarChart";

import { dashboardChartStyles as styles } from "../styles/dashboardStyles";

import {
  DASHBOARD_CHART_CONFIG,
  DASHBOARD_CHART_SERIES,
  type ChartSeriesKey,
} from "../constants/dashboardChartConstants";

import type { DashboardChartPoint } from "../data/dashboardData";

interface DashboardChartProps {
  title: string;
  chartData: DashboardChartPoint[];
}

const DashboardChart = ({ title, chartData }: DashboardChartProps) => {
  const labels = chartData.map((item) => item.day);

  const getCssVar = (name: string): string =>
    getComputedStyle(document.documentElement).getPropertyValue(name).trim();

  const series = DASHBOARD_CHART_SERIES.map(({ key, label, cssVar }) => ({
    data: chartData.map((item) => item[key as ChartSeriesKey]),
    label,
    color: getCssVar(cssVar),
  }));

  return (
    <Card sx={styles.card}>
      <CardContent sx={styles.content}>
        <Typography variant="h5" sx={styles.title}>
          {title}
        </Typography>

        <Box sx={styles.chartWrapper}>
          <BarChart
            height={DASHBOARD_CHART_CONFIG.height}
            xAxis={[
              {
                data: labels,
                ...DASHBOARD_CHART_CONFIG.xAxis,
              },
            ]}
            yAxis={[
              {
                label: "Count / Revenue",
              },
            ]}
            series={series.map((s) => ({
              ...s,
              barWidth: 18,
            }))}
            margin={{
              ...DASHBOARD_CHART_CONFIG.margin,
              left: 80,
              bottom: 70,
            }}
            grid={DASHBOARD_CHART_CONFIG.grid}
            sx={styles.chartSx}
          />
        </Box>
      </CardContent>
    </Card>
  );
};

export default DashboardChart;
