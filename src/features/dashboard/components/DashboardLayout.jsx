import { Box, Grid, CircularProgress, Typography } from "@mui/material";

import DashboardSidebar from "./DashboardSidebar";
import DashboardTop from "./DashboardTop";
import StatCard from "./StatCard";
import DashboardChart from "./DashboardChart";

import { useDashboardData } from "../hooks/useDashboardData";

import { dashboardLayoutStyles as styles } from "../styles/dashboardStyles";

const DashboardLayout = () => {
  const { data, loading, error } = useDashboardData();

  return (
    <Box sx={styles.page}>
      <DashboardSidebar />

      <Box sx={styles.main}>
        <DashboardTop />

        <Box sx={styles.content}>
          {loading ? (
            <Box sx={styles.loadingWrapper}>
              <CircularProgress sx={{ color: "#4f46e5" }} />
            </Box>
          ) : null}

          {!loading && error ? (
            <Typography color="error">{error}</Typography>
          ) : null}

          {!loading && data ? (
            <>
              <Grid
                container
                spacing={3}
                sx={styles.cardsRow}
                alignItems="stretch"
              >
                <Grid item xs={12} md={4} sx={styles.cardItem}>
                  <StatCard title="Users" value={data.users} />
                </Grid>

                <Grid item xs={12} md={4} sx={styles.cardItem}>
                  <StatCard title="Revenue" value={data.revenue} />
                </Grid>

                <Grid item xs={12} md={4} sx={styles.cardItem}>
                  <StatCard title="Sessions" value={data.activeSessions} />
                </Grid>
              </Grid>

              <Box sx={styles.chartWrapper}>
                <DashboardChart
                  title="Analytics Overview"
                  chartData={data.chart}
                />
              </Box>
            </>
          ) : null}
        </Box>
      </Box>
    </Box>
  );
};

export default DashboardLayout;
