"use client";
import React from "react";
import InputField from "@/components/ui/inputFields/TextField";

const DivisionDetails = ({ id, format, gender, entryFee }) => {
  return (
    <div className=" rounded-xl border-[1px] border-[#e6e6e6 ] ">
      <div className="bg-[#E8EFF7] rounded-xl pl-[25px] py-[20px]">
        <p className="text-[#13013C] fw700">Division</p>
      </div>
      <div className="mx-[30px] flex flex-col gap-4 mt-[20px] pb-[30px] ">
        <InputField
          id={id}
          label="Divisions Name"
          // value="Tom Clancy's The Divison"
          type="text"
        />
        <div className="flex flex-col md:flex-row gap-4">
          <InputField
            id={format}
            label="Format"
            //  value="Singles"

            type="text"
          />
          <InputField
            id={gender}
            label="Gender"
            //  value="Males"
            type="text"
          />
          <InputField
            id={entryFee}
            label="Entry Fee"
            // value="$1211"
            type="text"
          />
        </div>
      </div>
    </div>
  );
};

export default DivisionDetails;
