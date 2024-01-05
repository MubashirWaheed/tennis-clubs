import React, { useEffect, useState } from "react";
import PlayerBank from "./PlayerBank";
import DrawCardGrid from "./DrawCardGrid";
import { registeredPlayers } from "../constants/constants";
import AutoFillPanel from "./subcomponents/AutoFillPanel";
import SortingPanel from "./subcomponents/SortingPanel";
import { useSelectedPlayers } from "../hooks/useSelectedPlayers";

const DrawPlacement = ({
  selectedDraw,
  width,
  handleClick,
  showNotPlacedMenu,
  showPlacedMenu,
}) => {
  const [playerDraw, setPlayerDraw] = useState();
  const [filteredPlayers, setFilteredPlayers] = useState();
  const { selectedPlayers } = useSelectedPlayers();
  const filterPlayers = () => {
    let values = registeredPlayers.filter((item) =>
      selectedPlayers.includes(item.id)
    );
    setFilteredPlayers(values);
  };

  useEffect(() => {
    filterPlayers();
  }, [selectedPlayers]);

  // based on these id I will filter the registered players

  return (
    <div className={`flex max-w-[1170px] mx-auto w-full my-[30px]`}>
      <div
        className={`${
          width > 640 ? "block" : "hidden "
        } grow max-w-[33.3%]  basis-1/3`}
      >
        <AutoFillPanel
          registeredPlayers={registeredPlayers}
          setPlayerDraw={setPlayerDraw}
        />
        <SortingPanel />

        <PlayerBank
          showPlacedMenu={showPlacedMenu}
          filteredPlayers={filteredPlayers}
          handleClick={handleClick}
          registeredPlayers={registeredPlayers}
          showNotPlacedMenu={showNotPlacedMenu}
        />
      </div>

      {/* CARD GRID */}
      <DrawCardGrid
        selectedDraw={selectedDraw}
        playerDraw={playerDraw}
        filteredPlayers={filteredPlayers}
        registeredPlayers={registeredPlayers}
      />
    </div>
  );
};

export default DrawPlacement;
