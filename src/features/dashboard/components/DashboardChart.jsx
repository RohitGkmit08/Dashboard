import { Box, Card, CardContent, Typography } from "@mui/material";
import { BarChart } from "@mui/x-charts/BarChart";

import { dashboardChartStyles as styles } from "../styles/dashboardStyles";

const DashboardChart = ({ title, chartData }) => {
  const labels = chartData.map((item) => item.day);

  const users = chartData.map((item) => item.users);
  const sessions = chartData.map((item) => item.sessions);
  const revenue = chartData.map((item) => item.revenue);

  return (
    <Card sx={styles.card}>
      <CardContent sx={styles.content}>
        <Typography variant="h5" sx={styles.title}>
          {title}
        </Typography>

        <Box sx={styles.chartWrapper}>
          <BarChart
            height={420}
            xAxis={[
              {
                data: labels,
                scaleType: "band",
                categoryGapRatio: 0.55,
                barGapRatio: 0.35,
              },
            ]}
            series={[
              { data: users, label: "Users", color: "#ef3737ff" },
              { data: sessions, label: "Sessions", color: "#50c522ff" },
              { data: revenue, label: "Revenue", color: "#360bf5ff" },
            ]}
            margin={{ top: 20, bottom: 60, left: 60, right: 0 }}
            grid={{ horizontal: true }}
            sx={styles.chartSx}
          />
        </Box>
      </CardContent>
    </Card>
  );
};

export default DashboardChart;
