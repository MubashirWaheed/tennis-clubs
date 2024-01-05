import React from "react";
import Image from "next/image";

const Modal = ({ heading, children, closeModal }) => {
  return (
    <div className="z-[100] bg-purple flex justify-center items-center top-0 right-0 bottom-0 left-0  fixed bg-opacity-80">
      <div className="max-w-[800px] bg-white border-t-4 border-[#FFBB34] px-[45px] py-[35px] rounded-lg absolute ">
        <div className="flex place-content-end">
          <div
            onClick={closeModal}
            className="cursor-pointer px-[6px] py-[6px] mb-[5px]  rounded-full bg-[#e7e6eb]"
          >
            <Image
              src="/close.svg"
              width={15}
              height={15}
              className="rounded-full cursor-pointer"
              alt="close button"
            />
          </div>
        </div>
        <div className="flex justify-between items-center">
          <p className="h2">{heading}</p>
        </div>
        <Image
          className="my-[10px]"
          src="/secondLogo.svg"
          width={130}
          height={80}
          alt="logo line"
        />
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
