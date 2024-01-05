"use client";
import { usePathname } from "next/navigation";
import useMenuStore from "./hooks/useSideMenuStore";
import DrawMenu from "./components/DrawMenu";
import useSWR from "swr";
import { fetcher } from "@/lib/utils/fetcher";
import useDrawData from "./hooks/useDrawData";
import { useEffect } from "react";
import DrawModalManager from "./components/Modals/DrawModalManager";
import { MODAL_TYPES } from "./constants/constants";

const CreateDrawLayout = ({ children }) => {
  const menuStore = useMenuStore();

  const pathname = usePathname();
  const eventId = pathname.split("/")[3];

  const openModal = (modalType) => menuStore.openModal(modalType);

  const { data: eventData, isValidating } = useSWR(
    `/api/event/${eventId}`,
    fetcher
  );
  const { data, isLoading, selectedDraw, setSelectedDraw } =
    useDrawData(eventId);

  const handleDrawSelect = (selectedDraw) => {
    menuStore.setSelectedDraw(selectedDraw);
  };

  useEffect(() => {
    if (eventData) {
      menuStore.setDivisions(eventData.divisions);
    }
  }, [eventData]);

  useEffect(() => {
    if (data) {
      menuStore.setDrawlist(data);
    }
  }, [data]);
  return (
    <>
      <DrawMenu
        handleDrawSelect={handleDrawSelect}
        eventId={eventId}
        divisions={menuStore.divisions}
        setSelectedDivision={menuStore.setSelectedDivision}
        drawsList={data}
        showDrawMenu={menuStore.showDrawMenu}
        setShowDrawMenu={menuStore.setShowDrawMenu}
        openModal={openModal}
      />
      <DrawModalManager
        activeModal={menuStore.activeModal}
        MODAL_TYPES={MODAL_TYPES}
        closeModal={menuStore.closeModal}
      />
      {children}
    </>
  );
};
export default CreateDrawLayout;
