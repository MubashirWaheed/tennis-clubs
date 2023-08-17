import React from "react";
import PlayerInput from "@/components/ui/inputFields/AutoComplete";
import ScoreInput from "@/components/ui/inputFields/TextField";
import DropDown from "@/components/ui/inputFields/DropDown";

const playerOptions = ["player 1", "player 2"];
const DrawCard = () => {
  return (
    <div className="shadow-lg  bg-white mx-[10px] my-[20px] ">
      <div className="px-[15px] py-[10px]">
        <div className="flex justify-between items-center my-[15px]">
          <p className="text-grey fw700 underline">Set Date & Time</p>
          <p className="text-grey fw700 ">Match #1</p>
        </div>
        <div className="flex gap-4 items-center justify-center">
          <div className="flex flex-col gap-3 basis-2/3 grow">
            <DropDown label="select a player" options={playerOptions} />
            <DropDown label="select a player" options={playerOptions} />
          </div>
          <div className="basis-1/3 grow">
            <ScoreInput label="score" />
          </div>
        </div>
      </div>

      <div className="bg-[#E8EFF7] w-full py-[15px] px-[20px]">
        <p className="text-grey fw700">Set Location</p>
      </div>
    </div>
  );
};

export default DrawCard;
