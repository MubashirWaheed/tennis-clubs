"use client";
import InputField from "@/components/ui/inputFields/TextField";
import DropDownInput from "@/components/ui/inputFields/AutoComplete";
import NextButton from "@/components/ui/buttons/PrimaryButton";
import { useState } from "react";
import { Slider } from "@mui/material";
import Image from "next/image";

const Divisions = () => {
  const [value, setValue] = useState([20, 37]);

  const [rangeValues, setRangeValues] = useState({
    range1Value: "",
    range2Value: "",
  });

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleRangeChange = (event) => {
    const { id, value } = event.target;
    setRangeValues((prevRangeValues) => ({
      ...prevRangeValues,
      [id]: parseInt(value),
    }));
  };

  return (
    <section className="mt-[50px]">
      <div className=" rounded-xl border-[1px] border-[#e6e6e6 ] ">
        <div className="bg-[#E8EFF7] rounded-xl pl-[25px] py-[20px]">
          <p className="text-[#13013C] fw700">Division</p>
        </div>
        <div className="mx-[30px] flex flex-col gap-4 mt-[20px] pb-[30px] ">
          <InputField
            label="Divisions Name"
            value="Tom Clancy's The Divison"
            type="text"
          />
          <div className="flex flex-col md:flex-row gap-4">
            <InputField label="Format" value="Singles" type="text" />
            <InputField label="Gender" value="Males" type="text" />
            <InputField label="Entry Fee" value="$1211" type="text" />
          </div>
        </div>
      </div>
      {/* second one  */}
      <div className="rounded-xl mt-[30px] border-[1px] border-[#e6e6e6 ] mb-[20px] ">
        <div className="bg-[#E8EFF7] rounded-xl pl-[25px] py-[20px]">
          <p className="text-[#13013C] fw700">Division Options (Optional)</p>
        </div>
        <div className="mx-[30px] flex flex-col  gap-4 mt-[20px] pb-[30px] ">
          <div className="flex gap-4">
            <DropDownInput label="Draw Type" value="Tom Clancy's The Divison" />
            <DropDownInput label="Format" value="Singles" />
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
            <InputField label="Max Players" value="Singles" type="text" />
            <InputField label="Coaching" value="Males" type="text" />
            <InputField label="Officals" value="$1211" type="text" />
          </div>
        </div>
      </div>
      <div className="flex gap-3 items-center">
        {/* create resuable add button */}
        <button
          className="border-green border-[1px] p-[5px] rounded-md ml-[5px]"
          src="/add-icon.svg"
        >
          <Image
            src="/add-icon-green.svg"
            alt="add icon"
            width={20}
            height={20}
          />
        </button>
        <p className="text-darkPurple fw700">Add More Divisions</p>
      </div>
      <div className="flex place-content-end">
        <NextButton size="small">Next</NextButton>
      </div>
    </section>
  );
};
export default Divisions;

const silderStyles = {
  "& .MuiSlider-thumb": {
    color: "#027333",
  },
  "& .MuiSlider-track": {
    color: "#027333",
  },
};
