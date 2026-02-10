import { Card, CardContent, Typography } from "@mui/material";
import { statCardStyles as styles } from "../styles/dashboardStyles";

const StatCard = ({ title, value }) => {
  return (
    <Card sx={styles.card}>
      <CardContent sx={styles.content}>
        <Typography variant="body2" sx={styles.title}>
          {title}
        </Typography>

        <Typography variant="h3" sx={styles.value}>
          {value}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default StatCard;
