"use client";
import Image from "next/image";
import ApplyButton from "@/components/ui/buttons/PrimaryButton";

const RadioOption = ({ children, value, selectedOption, onSelect }) => {
  const isSelected = value === selectedOption;
  return (
    <div
      onClick={() => onSelect(value)}
      className="cursor-pointer w-full  md:px-[11px] md:py-[16px] flex items-center justify-start gap-[8px] rounded-[5px] border border-[#F6F6F6] bg-[#FAFBFF]"
    >
      {isSelected ? (
        <Image
          width={23}
          height={23}
          src="/RadioOptionSelected.svg"
          alt="Selected"
          className="w-[23px] h-[23px]"
        />
      ) : (
        <Image
          width={23}
          height={23}
          src="/RadioOptionNotSelected.svg"
          alt="Not Selected"
          className="w-[23px] h-[23px]"
        />
      )}
      <p className="f14 fw400 lh22 text-[#13013C]">{children}</p>
    </div>
  );
};

export default RadioOption;
