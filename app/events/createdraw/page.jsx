"use client";
import { useCallback, useState } from "react";
import { useSearchParams } from "next/navigation";

import { MODAL_TYPES } from "./constants/constants";

import useDrawData from "./hooks/useDrawData";

import DrawMenu from "./components/DrawMenu";
import DrawPlacement from "./components/DrawPlacement";
import DrawActionBar from "./components/DrawActionBar";
import DrawSearchbar from "./components/DrawSearchbar";
import DrawModalManager from "./components/DrawModalManager";
import { useWindowWidth } from "@react-hook/window-size";

const CreateDraw = () => {
  const width = useWindowWidth();

  const searchParams = useSearchParams();
  const eventId = searchParams.get("eventId");

  const { data, isLoading, selectedDraw, setSelectedDraw } =
    useDrawData(eventId);

  const [activeModal, setActiveModal] = useState(null);

  const openModal = (modalType) => setActiveModal(modalType);
  const closeModal = () => setActiveModal(null);

  const [showDrawMenu, setShowDrawMenu] = useState(false);
  const [showMenu, setShowMenu] = useState(true);

  const handleClick = useCallback(() => {
    setShowMenu(!showMenu);
  }, []);

  return (
    <div>
      <div className="w-full bg-[#FAFBFF]">
        <DrawActionBar
          selectedDraw={selectedDraw}
          openModal={openModal}
          MODAL_TYPES={MODAL_TYPES}
        />
      </div>
      <section className="bg-[#FAFBFF] w-full flex justify-center flex-col">
        <DrawSearchbar />

        <DrawPlacement
          selectedDraw={selectedDraw}
          width={width}
          handleClick={handleClick}
          showMenu={showMenu}
        />

        <DrawMenu
          setSelectedDraw={setSelectedDraw}
          drawsList={data}
          showDrawMenu={showDrawMenu}
          setShowDrawMenu={setShowDrawMenu}
          openModal={openModal}
          MODAL_TYPES={MODAL_TYPES}
        />
      </section>

      <DrawModalManager
        activeModal={activeModal}
        MODAL_TYPES={MODAL_TYPES}
        setActiveModal={setActiveModal}
        closeModal={closeModal}
      />
    </div>
  );
};
export default CreateDraw;
