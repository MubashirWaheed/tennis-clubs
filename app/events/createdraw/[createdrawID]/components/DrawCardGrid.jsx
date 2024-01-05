import React, { useEffect } from "react";
import DrawCard from "./DrawCard";
import { FormProvider, useForm } from "react-hook-form";
import { separateObjects } from "../utils/createMatchObject";
import useMatchStore from "../hooks/useMatchStore";
import { groupPlayersIntoPairs } from "../utils/groupPlayersIntoPairs";
import Column from "./subcomponents/Column";
import {
  calculateNumberOfCards,
  generateCardIndices,
} from "../utils/cardutils";
import { secondRoundPlayers } from "../constants/constants";
import AutoFillDraw from "./subcomponents/AutoFillDraw";
import ManualDraw from "./subcomponents/ManualDraw";

const DrawCardGrid = ({
  filteredPlayers,
  selectedDraw,
  playerDraw,
  registeredPlayers,
}) => {
  const methods = useForm();
  const watchedValues = methods.watch();

  const setMatchesToPlaced = useMatchStore((state) => state.setMatches);

  const playerPairs = playerDraw ? groupPlayersIntoPairs(playerDraw) : null;

  const updateMatchesToBePlayed = () => {
    const result = separateObjects(methods.getValues());
    setMatchesToPlaced(result);
  };

  useEffect(() => {
    updateMatchesToBePlayed();
  }, [watchedValues]);

  let drawContent;

  switch (selectedDraw.drawType) {
    case "Compass":
      drawContent = playerPairs ? (
        <AutoFillDraw playerPairs={playerPairs} />
      ) : (
        <ManualDraw
          filteredPlayers={filteredPlayers}
          registeredPlayers={registeredPlayers}
        />
      );
      break;

    default:
      drawContent = <DrawCard id="playername1" />;
  }

  return (
    <>
      {/* Column 1 */}
      <div className="grow max-w-[33.3%] basis-1/3 bg-[#FAFBFF]">
        <div className="flex flex-col text-center my-[10px]">
          <p className="text-grey fw700 underline lh24">Set Location</p>
          <p className="text-grey fw700 underline lh24">Set Date & Time</p>
        </div>

        <div>{drawContent}</div>
      </div>

      {/* Column 2 */}
      <div className="grow basis-1/3 bg-[#FAFBFF]">
        <div className="flex flex-col text-center my-[10px]">
          <p className="text-grey fw700 underline lh24">Set Location</p>
          <p className="text-grey fw700 underline lh24">Set Date & Time</p>
        </div>
        <Column secondRoundPlayers={secondRoundPlayers} />
      </div>
    </>
  );
};

export default DrawCardGrid;
