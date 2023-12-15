"use client";
import Image from "next/image";
import React from "react";

const AutoFillPanel = ({ registeredPlayers, setPlayerDraw }) => {
  const placeInCards = () => {
    const compassPlayersList = registeredPlayers;
    setPlayerDraw(compassPlayersList);
  };

  return (
    <div className="w-full bg-purple flex p-[20px] items-center justify-between">
      <p className="text-white">Players(13)</p>
      <p
        onClick={() => placeInCards()}
        className="cursor-pointer text-white flex items-center gap-2"
      >
        <Image
          src="/refreshicon.svg"
          width={20}
          height={20}
          alt="refresh icon"
        />
        Auto-Fill
      </p>
    </div>
  );
};

export default AutoFillPanel;
