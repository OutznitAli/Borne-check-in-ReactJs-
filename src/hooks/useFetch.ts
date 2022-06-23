import { useEffect, useState } from "react";

export const UseFetch = (url: RequestInfo) => {
  const [data, setData] = useState<any>();
  const [isLoading, setLoading] = useState<boolean>(true);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch(url);
      const mata = await response.json();
      setData(mata);
      setLoading(false);
    } catch (error) {}
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => {
    fetchData();
  };
  return {data, isLoading};
};
