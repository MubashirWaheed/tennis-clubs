import React from "react";
import Overlay from "@/components/ui/Overlay/Overlay";
import Image from "next/image";
import Button from "@/components/ui/buttons/PrimaryButton";

const SelectDivision = () => {
  return (
    <Overlay>
      <div className="mt-[10px] flex  justify-between">
        <div>
          <h3 className="text-darkPurple f24 fw700 ">Select Divisions</h3>
          <p className="text-grey fw700 f16 ">Dora W.Marshall</p>
        </div>
        <div>
          <div className="cursor-pointer bg-[#e7e6eb] rounded-full p-[5px]">
            <Image src="/close.svg" width={20} height={20} alt="close button" />
          </div>
        </div>
      </div>

      {/* Card */}
      <div className="px-[10px] py-[30px] bg-white shadow-lg rounded-lg my-[30px]">
        {/* round checkbox */}
        <div className="flex justify-between">
          <label className="text-[#13013C]  text-[14px] fw700 inline-flex items-center">
            <input
              type="checkbox"
              className={`w-[25px] h-[25px] mr-[10px] cursor-pointer text-purple border-1 border-purple rounded-full focus:ring-0`}
              //   checked
              name="test"
              value="test"
              // onChange={handleCheckBox}
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
      <div className="px-[10px] py-[30px] border-[1px] border-purple bg-white shadow-lg rounded-lg my-[30px]">
        <div className="flex justify-between">
          <label className="text-[#13013C]  text-[14px] fw700 inline-flex items-center">
            <input
              type="checkbox"
              className={`w-[25px] h-[25px] mr-[10px] cursor-pointer text-purple border-1 border-purple rounded-full focus:ring-0`}
              //   checked
              name="test"
              value="test"
              // onChange={handleCheckBox}
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
      <div className="px-[10px] py-[30px]  bg-white shadow-lg rounded-lg my-[30px]">
        <div className="flex justify-between">
          <label className="text-[#13013C] pr-[20px]  text-[14px] fw700 inline-flex items-center">
            <input
              type="checkbox"
              className={`w-[25px] h-[25px] mr-[10px] cursor-pointer text-purple border-1 border-purple rounded-full focus:ring-0`}
              name="test"
              value="test"
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
        <Button size="small">Continue</Button>
      </div>
    </Overlay>
  );
};

export default SelectDivision;
