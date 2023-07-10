import Image from "next/image";
import rightArrowIcon from "@/components/ui/assets/rightArrow.svg";

const PrimaryButton = ({ children, type, onClick, size }) => {
  return (
    <>
      {size === "small" ? (
        <button
          className="px-[10px] py-[8px] rounded-[8px] inline-flex items-center justify-center gap-[10px] bg-[#027333] border-2 border-[#027333] cursor-pointer"
          type={type}
          onClick={onClick}
        >
          <span className="p f14 lh24 text-white">{children}</span>
          <span className="w-[20px] h-[20px]">
            <Image
              src={rightArrowIcon}
              alt="Right Arrow Icon"
              className="w-[20px] h-[20px]"
            />
          </span>
        </button>
      ) : (
        <button
          className="px-[20px] py-[13px] rounded-[8px] inline-flex items-center justify-center gap-[20px] bg-[#027333] border-2 border-[#027333] cursor-pointer"
          type={type}
          onClick={onClick}
        >
          <span className="p f16 lh24 text-white">{children}</span>
          <span className="w-[20px] h-[20px]">
            <Image
              src={rightArrowIcon}
              alt="Right Arrow Icon"
              className="w-[20px] h-[20px]"
            />
          </span>
        </button>
      )}
    </>
  );
};

export default PrimaryButton;
