import React, { useState } from "react";
import Overlay from "@/components/ui/Overlay/Overlay";
import Image from "next/image";
import Button from "@/components/ui/buttons/PrimaryButton";
import Checkbox from "@/components/ui/buttons/Checkbox";

const SelectDivision = ({ onClose, onSwitch }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
    <Overlay>
      <div className="mt-[10px] flex  justify-between">
        <div>
          <h3 className="text-darkPurple f24 fw700 ">Select Divisions</h3>
          <p className="text-grey fw700 f16 ">Dora W.Marshall</p>
        </div>
        <div>
          <div
            onClick={onClose}
            className="cursor-pointer bg-[#e7e6eb] rounded-full p-[5px]"
          >
            <Image src="/close.svg" width={20} height={20} alt="close button" />
          </div>
        </div>
      </div>

      {/* Card */}
      <div
        className={`${
          selectedOption === "option1" ? "border-purple" : ""
        } px-[10px] py-[30px] border-[1px]  bg-white shadow-lg rounded-lg my-[30px]`}
      >
        <div className="flex justify-between">
          <label className="cursor-pointer text-[#13013C]  text-[14px] fw700 inline-flex items-center">
            <input
              type="radio"
              className={`w-[25px] h-[25px] mr-[10px] cursor-pointer text-purple border-1 border-purple rounded-full focus:ring-0`}
              name="option1"
              value="option1"
              checked={selectedOption === "option1"}
              onChange={handleOptionChange}
            />
            Dobles Mixto - Nivel Initiation & Beginner (MPR Ponderado Hasta
            8.60)
          </label>
          <p className="text-[#13013C] fw700">$14,263</p>
        </div>
        <p className="pl-[15px] mt-[15px] fw500 text-purple f14">
          Fee Due in Your Country’s Currency
        </p>
      </div>

      {/* Card */}

      <div
        className={`${
          selectedOption === "option2" ? "border-purple" : ""
        } px-[10px] py-[30px] border-[1px]  bg-white shadow-lg rounded-lg my-[30px]`}
      >
        <div className="flex justify-between">
          <label className="cursor-pointer text-[#13013C]  text-[14px] fw700 inline-flex items-center">
            <input
              type="radio"
              className={`w-[25px] h-[25px] mr-[10px] cursor-pointer text-purple border-1 border-purple rounded-full focus:ring-0`}
              name="option2"
              value="option2"
              checked={selectedOption === "option2"}
              onChange={handleOptionChange}
            />
            Dobles Mixto - Nivel Initiation & Beginner (MPR Ponderado Hasta
            8.60)
          </label>
          <p className="text-[#13013C] fw700">$14,263</p>
        </div>
        <p className="pl-[15px] mt-[15px] fw500 text-purple f14">
          Fee Due in Your Country’s Currency
        </p>
      </div>

      {/* Card with button */}
      <div
        className={`${
          selectedOption === "option3" ? "border-purple" : ""
        }  px-[10px] py-[30px] border-[1px]  bg-white shadow-lg rounded-lg my-[30px]`}
      >
        <div className="flex justify-between">
          <label className="cursor-pointer text-[#13013C] pr-[20px]  text-[14px] fw700 inline-flex items-center">
            <input
              type="radio"
              className={` w-[25px] h-[25px] mr-[10px] cursor-pointer text-purple border-1 border-purple rounded-full focus:ring-0`}
              name="option3"
              value="option3"
              checked={selectedOption === "option3"}
              onChange={handleOptionChange}
            />
            Dobles Mixto - Nivel Initiation & Beginner (MPR Ponderado Hasta
            8.60)
          </label>
          <p className="text-[#13013C] fw700">Free (TEAM)</p>
        </div>
        <p className="pl-[15px] mt-[15px] fw500 text-purple f14">
          Fee Due in Your Country’s Currency
        </p>
        <div className="flex items-center gap-3 w-full mt-[20px]">
          <div className="grow flex flex-col">
            <Button size="small">Add Partner</Button>
          </div>
          <p className="bg-[#E8ECEE] px-[10px] cursor-pointer py-[8px] rounded-md">
            <span className="border-[2px] border-purple f14  fw700 px-[8px]   rounded-full">
              i
            </span>
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <div className="py-[5px] flex justify-between border-b-[1px] border-[#E8ECEE] text-[#828282] fw700">
          <p>Events Fees:</p>
          <p>$500</p>
        </div>
        <div className="py-[5px] flex justify-between border-b-[1px] border-[#E8ECEE] text-[#828282] fw700">
          <p>Finance & Admin Fee:</p>
          <p>$132</p>
        </div>
        <div className="pb-[5px] flex justify-between border-b-[1px] border-[#E8ECEE] text-[#828282] fw700">
          <p>Total:</p>
          <p>$632</p>
        </div>
      </div>
      <div className="flex flex-col mt-[30px]">
        <Button onClick={() => onSwitch("divisioninfo")} size="small">
          Continue
        </Button>
      </div>
    </Overlay>
  );
};

export default SelectDivision;
