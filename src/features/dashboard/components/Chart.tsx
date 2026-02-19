import { Box, Card, CardContent, Typography } from "@mui/material";
import { BarChart } from "@mui/x-charts/BarChart";

import {
  DASHBOARD_CHART_SERIES,
  type ChartSeriesKey,
} from "../constants/chart";

import type { DashboardChartPoint } from "../data/dashboard-data";
import { dashboardChartStyles as styles } from "../styles/dashboard-styles";

interface DashboardChartProps {
  title: string;
  chartData: DashboardChartPoint[];
}

const DashboardChart = ({ title, chartData }: DashboardChartProps) => {
  const labels = chartData.map((item) => item.day);

  const series = DASHBOARD_CHART_SERIES.map(({ key, label, cssVar }) => ({
    data: chartData.map((item) => item[key as ChartSeriesKey]),
    label,
    color: `var(${cssVar})`,
  }));

  return (
    <Card sx={styles.card}>
      <CardContent sx={styles.content}>
        <Typography variant="h6" sx={styles.title}>
          {title}
        </Typography>

        <Box sx={styles.chartWrapper}>
          <BarChart
            height={420}
            xAxis={[
              {
                data: labels,
                scaleType: "band",
                categoryGapRatio: 0.7,
                barGapRatio: 0.25,
                tickLabelStyle: { display: "none" },
              },
            ]}
            yAxis={[
              {
                label: "Count / Revenue",
              },
            ]}
            series={series}
            margin={{ top: 20, bottom: 60, left: 70, right: 20 }}
            grid={{ horizontal: true }}
            sx={styles.chartSx}
          />
        </Box>
      </CardContent>
    </Card>
  );
};

export default DashboardChart;
