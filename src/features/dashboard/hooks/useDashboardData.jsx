import { useEffect, useState } from "react";
import { DASHBOARD_DATA } from "../data/dashboardData";

export const useDashboardData = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setData(DASHBOARD_DATA);
      setLoading(false);
    }, 700);

    return () => clearTimeout(timer);
  }, []);

  return { data, loading, error };
};
