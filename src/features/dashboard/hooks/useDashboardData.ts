import { useEffect, useState } from "react";
import { DASHBOARD_DATA, type DashboardData } from "../data/dashboardData";

interface UseDashboardDataResult {
  data: DashboardData | null;
  loading: boolean;
  error: string;
}

export const useDashboardData = (): UseDashboardDataResult => {
  const [data, setData] = useState<DashboardData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error] = useState<string>("");

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setData(DASHBOARD_DATA);
      setLoading(false);
    }, 700);

    return () => window.clearTimeout(timer);
  }, []);

  return { data, loading, error };
};
