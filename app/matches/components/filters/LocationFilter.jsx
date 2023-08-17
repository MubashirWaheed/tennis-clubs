import React from "react";
import Button from "@/components/ui/buttons/PrimaryButton";
import { Slider } from "@mui/material";
import LocationField from "@/components/ui/inputFields/LocationInput";
const LocationFilter = () => {
  return (
    <div className="w-[280px] lg:w-[400px] flex flex-col">
      <div className="flex justify-between items-center">
        <h5 className="h5 f-Abril text-darkPurple fw400">Location</h5>
        <p className="text-darkPurple cursor-pointer fw400 ">clear</p>
      </div>
      <LocationField value="3111 Randall DrivePaauilo, HI 96776" />
      <h5 className="h5 f-Abril text-darkPurple fw400 mt-[10px]">Location</h5>
      <Slider sx={silderStyles} defaultValue={30} aria-label="Default" />
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

export default LocationFilter;
