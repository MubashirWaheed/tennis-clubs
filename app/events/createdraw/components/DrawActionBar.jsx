"use client";
import React from "react";
import Button from "@/components/ui/buttons/PrimaryButton";
import useMatchStore from "../hooks/useMatchStore";

const DrawActionBar = ({ MODAL_TYPES, openModal, selectedDraw }) => {
  const matches = useMatchStore((state) => state.matches);

  const { drawName, format, drawType, scoring, gender, drawSize } =
    selectedDraw;

  const publishDraws = () => {
    console.log(matches);
  };

  return (
    <div className="flex flex-wrap justify-center lg:justify-between items-center w-full max-w-[1170px] mx-auto">
      <div>
        <div className="py-[5px] flex flex-col md:flex-row items-center w-full max-w-[1170px] mx-auto">
          <p className="f20 text-darkPurple fw700">
            {/* Level Based Play Singles Main */}
            {drawName}
          </p>
          <div className="flex gap-2 ml-[10px]">
            <p
              onClick={() => openModal(MODAL_TYPES.EDIT)}
              className="cursor-pointer text-green fw700"
            >
              • Edit
            </p>
            <p className="text-green fw700">• Print</p>
            <p
              onClick={() => openModal(MODAL_TYPES.MESSAGE)}
              className="cursor-pointer text-green fw700"
            >
              • Message Players
            </p>
          </div>
        </div>
        <p className="text-grey fw700 text-left">
          {/* Singles, Round Robin, Two Sets w/ Match Tiebreaker, 14 Players, Al
            UTR, All Ages. */}
          {format}, {drawType}, {scoring}, {drawSize} Players
        </p>
      </div>
      <div className="flex gap-4  items-center justify-center">
        <Button size="small">Save</Button>
        {/* <Button onClick={() => openModal(MODAL_TYPES.PUBLISH)} size="small"> */}
        <Button onClick={() => publishDraws()}>Publish</Button>
      </div>
    </div>
  );
};

export default DrawActionBar;
