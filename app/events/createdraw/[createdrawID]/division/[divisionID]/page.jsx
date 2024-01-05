"use client";
import React, { useEffect } from "react";
import Button from "@/components/ui/buttons/PrimaryButton";
import useMenuStore from "../../hooks/useSideMenuStore";
import PlayerList from "../../components/subcomponents/PlayerList";
import FilterBar from "../../components/subcomponents/FilterBar";
import { MODAL_TYPES } from "../../constants/constants";
import { registeredPlayers } from "../../constants/constants";
import { useForm, useWatch } from "react-hook-form";
import { useSelectedPlayers } from "../../hooks/useSelectedPlayers";

const Division = () => {
  const menuStore = useMenuStore();
  const openModal = (modalType) => menuStore.openModal(modalType);
  const store = useSelectedPlayers();
  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = () => console.log("helo form submitted");

  const watchedPlayerSelected = watch("playerSelected");

  useEffect(() => {
    store.setSelectedPlayers(watchedPlayerSelected);
    console.log("store.selectedPlayers: ", watchedPlayerSelected);
  }, [watchedPlayerSelected]);

  return (
    <div className="bg-[#FAFBFF]">
      <div className="  flex flex-wrap justify-center lg:justify-between items-center w-full max-w-[1170px] mx-auto">
        <div className="">
          <div className="py-[5px] flex flex-col md:flex-row items-center w-full max-w-[1170px] mx-auto">
            <p className="f20 text-darkPurple fw700">
              {/* Level Based Play Singles Main */}
              {menuStore.selectedDivison.divisionName}
              <span className="ml-[15px] text-gray-400">Division</span>
            </p>
          </div>
        </div>
        <div className="flex gap-4  items-center justify-center">
          <Button size="small">Save</Button>
          <Button onClick={() => openModal(MODAL_TYPES.PUBLISH)} size="small">
            Publish
          </Button>
        </div>
      </div>
      <FilterBar onSubmit={handleSubmit(onSubmit)} openModal={openModal} />
      <form>
        <PlayerList
          useWatch={useWatch}
          control={control}
          register={register}
          registeredPlayers={registeredPlayers}
        />
      </form>
    </div>
  );
};

export default Division;

const styles = {
  searchContainer:
    "z-30 flex items-center gap-2 w-[300px] md:w-[400px] px-1 py-2",
  searchIcon: "text-[#13013C] w-[18px] h-[18px]",
  searchInput:
    "w-[170px] md:flex-1 outline-none border-none text-base text-[#13013C]",

  iconsGroup: "hidden lg:flex items-center gap-3",
};
