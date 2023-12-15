"use client";
import { useCallback, useState } from "react";
import { useSearchParams } from "next/navigation";
import { FormProvider, useForm } from "react-hook-form";
import { useWindowSize } from "@uidotdev/usehooks";

import { MODAL_TYPES } from "./constants/constants";

import useDrawData from "./hooks/useDrawData";

import DrawMenu from "./components/DrawMenu";
import DrawPlacement from "./components/DrawPlacement";
import DrawActionBar from "./components/DrawActionBar";
import DrawSearchbar from "./components/DrawSearchbar";
import DrawModalManager from "./components/DrawModalManager";

const CreateDraw = () => {
  const size = useWindowSize();
  const width = size.width;

  const methods = useForm();

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
    setShowMenu((prev) => !prev);
  }, []);

  return (
    <FormProvider {...methods}>
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
    </FormProvider>
  );
};
export default CreateDraw;
