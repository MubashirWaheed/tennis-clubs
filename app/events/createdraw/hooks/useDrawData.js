import { useEffect, useState } from "react";
import useSWR from "swr";
import { fetcher } from "@/lib/utils/fetcher";

const useDrawData = (eventId) => {
  const [selectedDraw, setSelectedDraw] = useState([]);

  const { data, error } = useSWR(
    `/api/event/createDraw?eventId=${eventId}`,
    fetcher
  );

  useEffect(() => {
    if (data && data.length > 0) {
      setSelectedDraw(data[0]);
    }
  }, [data]);

  return {
    data,
    isLoading: !error && !data,
    error,
    selectedDraw,
    setSelectedDraw,
  };
};

export default useDrawData;
