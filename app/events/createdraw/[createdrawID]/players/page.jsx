"use client";
import React from "react";

import FilterBar from "../components/subcomponents/FilterBar";
import PlayerList from "../components/subcomponents/PlayerList";

const Player = () => {
  return (
    <div className="bg-[#FAFBFF] relative">
      <FilterBar />
      <PlayerList />
    </div>
  );
};

export default Player;
