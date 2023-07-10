"use client";
import Image from "next/image";
import SelectedIcon from "./assets/RadioOptionSelected.svg";
import NotSelectedIcon from "./assets/RadioOptionNotSelected.svg";

const RadioOption = ({ children, value, selectedOption, onSelect }) => {
  const isSelected = value === selectedOption;
  return (
    <div
      onClick={() => onSelect(value)}
      className="cursor-pointer w-full px-[11px] py-[16px] flex items-center justify-start gap-[8px] rounded-[5px] border border-[#F6F6F6] bg-[#FAFBFF]"
    >
      {isSelected ? (
        <Image
          src={SelectedIcon}
          alt="Selected"
          className="w-[23px] h-[23px]"
        />
      ) : (
        <Image
          src={NotSelectedIcon}
          alt="Not Selected"
          className="w-[23px] h-[23px]"
        />
      )}
      <p className="f14 fw400 lh22 text-[#13013C]">{children}</p>
    </div>
  );
};

export default RadioOption;
