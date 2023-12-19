"use client";
import React from "react";
import Button from "@/components/ui/buttons/PrimaryButton";
import { Slider } from "@mui/material";
const PrizeMoneyFilter = () => {
  return (
    <div className="flex flex-col w-[300px] lg:w-[400px]">
      <div className="flex justify-between">
        <h5 className="text-[#13013C] h5 f-Abril text-">Ball Type</h5>
        <p className="text-[#13013C] fw700">All</p>
      </div>
      <div className="my-[20px]">
        <Slider
          sx={silderStyles}
          defaultValue={30}
          aria-label="Default"
          valueLabelDisplay="auto"
        />
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
export default PrizeMoneyFilter;
