import { Box, Card, CardContent, Typography } from "@mui/material";
import { BarChart } from "@mui/x-charts/BarChart";

import { dashboardChartStyles as styles } from "../styles/dashboardStyles";

import {
  DASHBOARD_CHART_CONFIG,
  DASHBOARD_CHART_SERIES,
} from "../constants/dashboardChartConstants";

const DashboardChart = ({ title, chartData }) => {
  const labels = chartData.map((item) => item.day);
  
  const getCssVar = (name) =>
    getComputedStyle(document.documentElement).getPropertyValue(name).trim();

  const series = DASHBOARD_CHART_SERIES.map(({ key, label, cssVar }) => ({
    data: chartData.map((item) => item[key]),
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
            series={series}
            margin={DASHBOARD_CHART_CONFIG.margin}
            grid={DASHBOARD_CHART_CONFIG.grid}
            sx={styles.chartSx}
          />
        </Box>
      </CardContent>
    </Card>
  );
};

export default DashboardChart;
