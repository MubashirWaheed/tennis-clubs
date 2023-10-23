import React from "react";
import Image from "next/image";
const DropDown = ({ label, options, size }) => {
  return (
    <div className="py-[10px] px-[3px] w-full ">
      <div className=" bg-[#fafbff] rounded-xl border-[1px]">
        <label
          htmlFor="age"
          className={`${
            size == "small" ? "pb-[5px] pt-[13px] mb-2" : " pb-[0px] pt-[0px]"
          } relative block   text-sm font-medium text-gray-900`}
        >
          <p
            className={` ${
              size == "small" ? "f13 " : " rounded-lg fw700 f12 pt-[10px] "
            } text-[#828282] pl-[15px] sm:pl-[20px]  `}
          >
            {label}
          </p>
          <select
            // size="3"
            id="age"
            className={`${
              size == "small"
                ? "pl-[10px] sm:pl-[22px] pt-[0px]"
                : "pl-[20px] pb-[22px]"
            }   lh18 cursor-pointer focus:ring-0 focus:outline-none  bg-none bg-[#fafbff] pt-[10px]  outline-none  text-[#05192C] text-sm rounded-xl border-0 block w-full`}
          >
            {options.map((item, i) => {
              return (
                <option className="lh18" key={i} value={item}>
                  {item}
                </option>
              );
            })}
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
