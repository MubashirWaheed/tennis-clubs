"use client";
import React, { useState } from "react";
import PlayerInput from "@/components/ui/inputFields/AutoComplete";
import ScoreInput from "@/components/ui/inputFields/TextField";
import DropDown from "@/components/ui/inputFields/DropDown";
import { FormProvider, useForm } from "react-hook-form";

const DrawCard = ({ id, playerOptions, showDefaultOption }) => {
  // const [matchPlayers, setMatchPlayers] = useState();

  return (
    <div className="shadow-lg bg-white   mx-[10px] my-[20px] ">
      <div className="px-[15px] py-[10px]">
        <div className="flex justify-between items-center my-[15px]"></div>
        <div className="flex gap-4 items-center justify-between flex-wrap md:flex-nowrap">
          <div className="flex flex-col gap-3 basis-2/3 grow">
            <p className="text-grey fw700 underline">Set Date & Time</p>
            <DropDown
              showDefaultOption={showDefaultOption}
              id={`match-${id}-dropdown1`}
              label="select a player 1"
              options={playerOptions}
            />

            <DropDown
              showDefaultOption={showDefaultOption}
              id={`match-${id}-dropdown2`}
              label="select a player 2"
              options={playerOptions}
            />
          </div>

          <div className="basis-1/3 grow flex  md:h-[260px] flex-col ">
            <p className="text-grey fw700 ">Match #1</p>
            <div className="md:mt-[50px]">
              {/* <div className=" w-[50px] h-[50px] bg-[#E8EFF7] shadow-md "></div> */}
              {/* <ScoreInput id="card3" label="score" /> */}
            </div>
          </div>
        </div>
      </div>

      <div className=" bg-[#E8EFF7] w-full py-[15px] px-[20px]">
        <p className="text-grey fw700">Set Location</p>
      </div>
    </div>
  );
};

export default DrawCard;

// bg-[#E8EFF7]
