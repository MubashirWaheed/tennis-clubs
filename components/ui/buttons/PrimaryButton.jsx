import Image from "next/image";

const PrimaryButton = ({ children, type, onClick, size, disabled }) => {
  return (
    <>
      {size === "small" ? (
        <button
          className={`whitespace-nowrap px-[10px] py-[8px] rounded-[8px] inline-flex items-center justify-center gap-[10px] bg-[#027333] border-2 border-[#027333] cursor-pointer ${
            disabled ? "opacity-50 pointer-events-none" : "" // Apply styles if disabled
          }`}
          // className="px-[10px] py-[8px] rounded-[8px] inline-flex items-center justify-center gap-[10px] bg-[#027333] border-2 border-[#027333] cursor-pointer"
          type={type}
          onClick={onClick}
          disabled={disabled}
        >
          <span className="p f14 lh24 text-white">{children}</span>
          <span className="w-[20px] h-[20px]">
            <Image
              src="/rightarrow.svg"
              alt="Right Arrow Icon"
              height={20}
              width={20}
              className="w-[20px] h-[20px]"
            />
          </span>
        </button>
      ) : (
        <button
          className={`px-[10px] py-[8px] rounded-[8px] inline-flex items-center justify-center gap-[10px] bg-[#027333] border-2 border-[#027333] cursor-pointer ${
            disabled ? "opacity-50 pointer-events-none" : "" // Apply styles if disabled
          }`}
          type={type}
          onClick={onClick}
          disabled={disabled}
        >
          <span className="p f16 lh24 text-white">{children}</span>
          <span className="w-[20px] h-[20px]">
            <Image
              src="/rightarrow.svg"
              width={20}
              height={20}
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
