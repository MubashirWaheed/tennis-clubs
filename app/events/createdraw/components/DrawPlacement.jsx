import React from "react";
import DrawCard from "./DrawCard";
import Image from "next/image";
import PlayerBank from "./PlayerBank";
import DrawCardGrid from "./DrawCardGrid";

const DrawPlacement = ({ registeredPlayers, width, handleClick, showMenu }) => {
  return (
    <div>
      <div className={`flex max-w-[1170px] mx-auto w-full my-[30px]`}>
        {/* Auto fill section*/}
        <div className={` ${width > 640 ? "block" : "hidden"} grow basis-1/3`}>
          <div className="w-full bg-purple flex p-[20px] items-center justify-between">
            <p className="text-white">Players(13)</p>
            <p className="cursor-pointer text-white flex items-center gap-2">
              <Image
                src="/refreshicon.svg"
                width={20}
                height={20}
                alt="refresh icon"
              />
              Auto-Fill
            </p>
          </div>
          <div className="py-[10px] bg-white flex items-center justify-between px-[20px]">
            <div className="flex gap-2 items-center">
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  className="w-5 h-5 cursor-pointer text-purple border-1 border-purple rounded-md focus:ring-0"
                  //   checked
                />
                <span className="ml-[7px] text-grey">All</span>
              </label>
            </div>
            <p className="text-grey f14 fw700">Sort By MPR (High To Low)</p>
          </div>
          {/* dropdown */}
          <div className="py-[10px] bg-[#E8EFF7] flex items-center justify-between px-[20px]">
            <div className="flex gap-2 items-center">
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  className="w-5 h-5 cursor-pointer text-purple border-1 border-purple rounded-md focus:ring-0"
                  //   checked
                />
                <span className="ml-[7px] text-grey">Not Placed(13)</span>
              </label>
            </div>

            <span
              onClick={handleClick}
              className="px-[5px] py-[7px] cursor-pointer"
            >
              <Image
                src="/rename.svg"
                width={20}
                height={20}
                alt="open filter"
              />
            </span>
          </div>
          <PlayerBank
            registeredPlayers={registeredPlayers}
            showMenu={showMenu}
          />
        </div>

        {/* CARD GRID */}
        <DrawCardGrid />
      </div>
    </div>
  );
};

export default DrawPlacement;
