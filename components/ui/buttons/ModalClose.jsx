import React from "react";
import Image from "next/image";
import close from "@/components/ui/assets/close.svg";

const ModalClose = () => {
  return (
    <button className="rounded-full bg-[#828282]/20 text-[#13013c] p-[7px] cursor-pointer mt-2">
      <Image src={close} alt="close" className="w-[15px] h-[15px]" />
    </button>
  );
};

export default ModalClose;
