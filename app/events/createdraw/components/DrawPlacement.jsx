import React, { useState } from "react";
import PlayerBank from "./PlayerBank";
import DrawCardGrid from "./DrawCardGrid";
import { registeredPlayers } from "../constants/constants";
import AutoFillPanel from "./subcomponents/AutoFillPanel";
import SortingPanel from "./subcomponents/SortingPanel";

const DrawPlacement = ({ selectedDraw, width, handleClick, showMenu }) => {
  const [playerDraw, setPlayerDraw] = useState();

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
          handleClick={handleClick}
          registeredPlayers={registeredPlayers}
          showMenu={showMenu}
        />
      </div>

      {/* CARD GRID */}
      <DrawCardGrid
        selectedDraw={selectedDraw}
        playerDraw={playerDraw}
        registeredPlayers={registeredPlayers}
      />
    </div>
  );
};

export default DrawPlacement;
