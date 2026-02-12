import { Box, Card, CardContent, Typography, useTheme } from "@mui/material";
import { BarChart } from "@mui/x-charts/BarChart";

import {
  DASHBOARD_CHART_SERIES,
  type ChartSeriesKey,
} from "../constants/dashboardChartConstants";

import type { DashboardChartPoint } from "../data/dashboardData";

interface DashboardChartProps {
  title: string;
  chartData: DashboardChartPoint[];
}

const DashboardChart = ({ title, chartData }: DashboardChartProps) => {
  const theme = useTheme();

  const labels = chartData.map((item) => item.day);

  const series = DASHBOARD_CHART_SERIES.map(({ key, label }, index) => ({
    data: chartData.map((item) => item[key as ChartSeriesKey]),
    label,
    color:
      index === 0
        ? "#60a5fa"
        : index === 1
        ? "#34d399"
        : "#a78bfa",
  }));

  return (
    <Card
      sx={{
        borderRadius: 3,
        border: `1px solid ${theme.palette.divider}`,
        bgcolor: theme.palette.background.paper,
      }}
    >
      <CardContent sx={{ p: 3 }}>
        <Typography
          variant="h6"
          sx={{ mb: 2, fontWeight: 800, color: theme.palette.text.primary }}
        >
          {title}
        </Typography>

        <Box sx={{ width: "100%", overflow: "hidden" }}>
          <BarChart
            height={420}
            xAxis={[
              {
                data: labels,
                scaleType: "band",
                categoryGapRatio: 0.7, 
                barGapRatio: 0.25, 
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
            sx={{
              width: "100%",

              "& .MuiChartsAxis-line": {
                stroke: theme.palette.divider,
              },

              "& .MuiChartsAxis-tick": {
                stroke: theme.palette.divider,
              },

              "& .MuiChartsGrid-line": {
                stroke: theme.palette.divider,
                opacity: 0.4,
              },

              "& .MuiChartsAxis-tickLabel": {
                fill: theme.palette.text.secondary,
                fontSize: 12,
                fontWeight: 600,
              },

              "& .MuiChartsAxis-label": {
                fill: theme.palette.text.primary,
                fontSize: 13,
                fontWeight: 700,
              },

              "& .MuiChartsLegend-label": {
                fill: theme.palette.text.primary,
                fontSize: 12,
                fontWeight: 700,
              },
            }}
          />
        </Box>
      </CardContent>
    </Card>
  );
};

export default DashboardChart;
