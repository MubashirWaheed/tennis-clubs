"use client";
import { Slider } from "@mui/material";
import Button from "@/components/ui/buttons/PrimaryButton";
import Checkbox from "@/components/ui/buttons/Checkbox";

import React from "react";

const gameType = ["Singles", "Doubles", "Dingles"];

const MoreFilter = () => {
  return (
    <div className=" flex flex-col w-[300px] lg:w-[350px] ">
      <div className="flex justify-between">
        <h5 className="text-[#13013C] h5 f-Abril ">MPR Range</h5>
        <p className="text-[#13013C] fw700">clear</p>
      </div>
      <div className="flex justify-between ">
        <p className="text-grey">MPR Range</p>
        <p className="fw700 f14 text-[#13013C]">1.0 - 16.0+</p>
      </div>
      <div className="flex justify-between">
        <Slider sx={silderStyles} defaultValue={30} aria-label="Default" />
      </div>
      <div className="my-[10px] flex items-center justify-between gap-3">
        <div className="f12 uppercase border-t-4 text-center fw500 w-full border-t-[#7bc436] text-[#7bc436]">
          Beginner
        </div>
        <div className="f12 uppercase border-t-4 w-full text-center border-t-[#009bcc] text-[#009bcc]">
          Advance
        </div>
        <div className="f12 uppercase border-t-4 w-full text-center border-t-[#e0007f] text-[#e0007f] ">
          PRO
        </div>
      </div>
      <h5 className="text-[#13013C] h5 fw700">Game Type</h5>
      <div className="flex flex-col gap-2">
        {gameType.map((item, i) => {
          return <Checkbox key={i} value={item} />;
        })}
      </div>
      <h5 className="text-[#13013C] h5 fw700">Gender</h5>
      <div className="mb-[10px] flex flex-col gap-2">
        <Checkbox value="Male" />
        <Checkbox value="Female" />
      </div>
      <Button>Apply</Button>
    </div>
  );
};

const silderStyles = {
  "& .MuiSlider-thumb": {
    color: "#027333",
  },
  "& .MuiSlider-track": {
    color: "#027333",
  },
};
export default MoreFilter;
