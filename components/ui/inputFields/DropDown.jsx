"use client";
import React from "react";
import Image from "next/image";
import { useFormContext } from "react-hook-form";

const DropDown = ({ id, label, options, size, showDefaultOption }) => {
  const { register, watch, setValue } = useFormContext();
  const handleSelectChange = (event) => {
    const selectedValue = event.target.value;
    console.log("selectedValue: ", selectedValue);
    setValue(id, selectedValue);
  };
  // console.log("options: ", options);

  return (
    <div className="py-[10px] px-[3px] w-full ">
      <div className=" bg-[#fafbff] rounded-xl border-[1px]">
        <label
          {...register(id)}
          htmlFor={`dropdown-${label}`}
          className={`${
            size == "small" ? "pb-[5px] pt-[13px] mb-2" : " pb-[0px] pt-[0px]"
          } relative block text-sm font-medium text-gray-900`}
        >
          <p
            className={`${
              size == "small" ? "f13" : "rounded-lg fw700 f12 pt-[10px] "
            } text-[#828282] pl-[15px] sm:pl-[20px]  `}
          >
            {label}
          </p>
          <select
            name={`dropdown-${label}`}
            onChange={handleSelectChange}
            className={`${
              size == "small"
                ? "pl-[10px] sm:pl-[22px] pt-[0px]"
                : "pl-[20px] pb-[22px]"
            } lh18 cursor-pointer focus:ring-0 focus:outline-none  bg-none bg-[#fafbff] pt-[10px]  outline-none  text-[#05192C] text-sm rounded-xl border-0 block w-full`}
          >
            {Array.isArray(options)
              ? options.map((item, index) => (
                  <option
                    key={index}
                    value={typeof item === "object" ? item.name : item}
                  >
                    {typeof item === "object" ? item.name : item}
                  </option>
                ))
              : options &&
                Object.entries(options).map(([key, value]) => (
                  <option key={key} value={key}>
                    {typeof value === "object" ? value.name : value}
                  </option>
                ))}
          </select>
          <div className="absolute sm:top-5 top-5 right-3 sm:right-6">
            <Image
              src="/dropdown.svg"
              width={24}
              height={24}
              alt="dropdown age"
            />
          </div>
        </label>
      </div>
    </div>
  );
};

export default DropDown;
