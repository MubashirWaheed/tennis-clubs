import { useEffect } from "react";
import useSWR from "swr";
import { fetcher } from "@/lib/utils/fetcher";
import useMenuStore from "./useSideMenuStore";

const useDrawData = (eventId) => {
  const menuStore = useMenuStore();

  const { data, error } = useSWR(
    `/api/event/createDraw?eventId=${eventId}`,
    fetcher
  );

  useEffect(() => {
    if (data && data.length > 0) {
      menuStore.setSelectedDraw(data[0]);
    }
  }, [data]);

  return {
    data,
    isLoading: !error && !data,
    error,
  };
};

export default useDrawData;
