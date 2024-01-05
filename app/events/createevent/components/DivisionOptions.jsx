import React from "react";
import DropDownInput from "@/components/ui/inputFields/AutoComplete";
import { Slider } from "@mui/material";
import InputField from "@/components/ui/inputFields/TextField";
import DropDown from "@/components/ui/inputFields/DropDown";

const drawTypeOptions = [
  {
    name: "Round Robin",
  },
  {
    name: "Compass",
  },
];

const formatOption = [
  {
    name: "Singles",
  },
  {
    name: "Doubles",
  },
];

const DivisionOptions = ({
  value,
  handleChange,
  maxPlayers,
  officals,
  coaching,
  drawType,
  formatType,
}) => {
  return (
    <div className="rounded-xl mt-[30px] border-[1px] border-[#e6e6e6 ] mb-[20px] ">
      <div className="bg-[#E8EFF7] rounded-xl pl-[25px] py-[20px]">
        <p className="text-[#13013C] fw700">Division Options (Optional)</p>
      </div>
      <div className="mx-[30px] flex flex-col  gap-4 mt-[20px] pb-[30px] ">
        <div className="flex gap-4">
          <DropDown id={drawType} label="Draw Type" options={drawTypeOptions} />
          <DropDown id={formatType} label="Format" options={formatOption} />
          {/* <DropDownInput label="Draw Type" value="Tom Clancy's The Divison" /> */}
          {/* <DropDownInput label="Format" value="Singles" /> */}
        </div>
        {/* sliders here */}
        <div className="flex gap-4">
          <div className="flex flex-col w-full">
            <p>UTR</p>
            <Slider
              sx={silderStyles}
              defaultValue={30}
              aria-label="Default"
              valueLabelDisplay="auto"
            />
          </div>
          <div className="flex flex-col w-full">
            <p>Age</p>
            <Slider
              sx={silderStyles}
              getAriaLabel={() => "Temperature range"}
              value={value}
              onChange={handleChange}
              valueLabelDisplay="auto"
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-4 ">
          <InputField id={maxPlayers} label="Max Players" type="text" />
          <InputField id={coaching} label="Coaching" type="text" />
          <InputField id={officals} label="Officals" type="text" />
        </div>
      </div>
    </div>
  );
};

export default DivisionOptions;

const silderStyles = {
  "& .MuiSlider-thumb": {
    color: "#027333",
  },
  "& .MuiSlider-track": {
    color: "#027333",
  },
};
