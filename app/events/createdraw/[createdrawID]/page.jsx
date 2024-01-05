"use client";
import { useCallback, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { FormProvider, useForm } from "react-hook-form";
import { useWindowSize } from "@uidotdev/usehooks";
import { MODAL_TYPES } from "./constants/constants";
import useDrawData from "./hooks/useDrawData";
import DrawPlacement from "./components/DrawPlacement";
import DrawActionBar from "./components/DrawActionBar";
import DrawSearchbar from "./components/DrawSearchbar";
import useSWR from "swr";
import { fetcher } from "@/lib/utils/fetcher";
import useMenuStore from "./hooks/useSideMenuStore";
import { useSelectedPlayers } from "./hooks/useSelectedPlayers";

const CreateDraw = () => {
  const size = useWindowSize();
  const width = size.width;
  const methods = useForm();
  const openModal = (modalType) => menuStore.openModal(modalType);

  const pathname = usePathname();
  const eventId = pathname.split("/")[3];

  const { data, isLoading } = useDrawData(eventId);

  const { data: eventData, isValidating } = useSWR(
    `/api/event/${eventId}`,
    fetcher
  );

  const menuStore = useMenuStore();

  const [showPlacedMenu, setShowPlacedMenu] = useState(false);
  const [showNotPlacedMenu, setShowNotPlacedMenu] = useState(true);

  const handleClick = (menuType) => {
    console.log("menuType:", menuType, "Value: ");
    if (menuType == "placed") {
      setShowPlacedMenu((prev) => !prev);
    } else if (menuType == "notPlaced") {
      setShowNotPlacedMenu((prev) => !prev);
    }
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

  if (isValidating) <p>Loading...</p>;

  return (
    <FormProvider {...methods}>
      <div className="w-full bg-[#FAFBFF]">
        <DrawActionBar
          selectedDraw={menuStore.selectedDraw}
          openModal={openModal}
          MODAL_TYPES={MODAL_TYPES}
        />
      </div>
      <section className="bg-[#FAFBFF] w-full flex justify-center flex-col">
        <DrawSearchbar />

        <DrawPlacement
          selectedDraw={menuStore.selectedDraw}
          width={width}
          handleClick={handleClick}
          showPlacedMenu={showPlacedMenu}
          showNotPlacedMenu={showNotPlacedMenu}
        />
      </section>
    </FormProvider>
  );
};
export default CreateDraw;
