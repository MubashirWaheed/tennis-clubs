"use client";
import { useState } from "react";
import RadioOption from "./RadioOption";
import { useFormContext } from "react-hook-form";

const RadioGroup = ({ direction, options, onChange, label }) => {
  const [selectedOption, setSelectedOption] = useState("male");
  const { register, watch, setValue } = useFormContext();

  const onSelect = (value) => {
    setSelectedOption(value);
    onChange && onChange(value);
    setValue("gender", value);
  };

  return (
    <div className="flex flex-col gap-[3px] w-full">
      {label && (
        <label className="w-full f14 lh22 fw700 text-[#13013C]">{label}</label>
      )}

      {/*Options */}
      <div
        {...register(`${label}`)}
        className={`w-full flex ${
          direction === "column" && "flex-col gap-[10px]"
        }
      ${direction === "row" && "gap-[15px] items-center"}`}
      >
        {options.map((option) => (
          <RadioOption
            key={option.value}
            value={option.value}
            selectedOption={selectedOption}
            onSelect={(value) => onSelect(value)}
          >
            {option.label}
          </RadioOption>
        ))}
      </div>
    </div>
  );
};

export default RadioGroup;
