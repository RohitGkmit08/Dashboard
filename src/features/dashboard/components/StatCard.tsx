import { Card, CardContent, Typography } from "@mui/material";
import { statCardStyles as styles } from "../styles/dashboardStyles";

interface StatCardProps {
  title: string;
  value: number | string;
}

const StatCard = ({ title, value }: StatCardProps) => {
  return (
    <Card sx={styles.card}>
      <CardContent sx={styles.content}>
        <Typography variant="body2" sx={styles.title}>
          {title}
        </Typography>

        <Typography variant="h4" sx={styles.value}>
          {value}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default StatCard;
