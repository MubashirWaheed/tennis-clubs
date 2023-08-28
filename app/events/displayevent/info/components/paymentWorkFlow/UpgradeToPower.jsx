import React from "react";
import Overlay from "@/components/ui/Overlay/Overlay";
import Image from "next/image";
import Button from "@/components/ui/buttons/PrimaryButton";

const UpgradeToPower = ({ onClose, onSwitch }) => {
  return (
    <Overlay>
      <div className="flex flex-col">
        <div className="mt-[10px] flex  justify-between  ">
          <div>
            <h3 className="text-darkPurple f24 fw700 uppercase">
              Upgrade To Power
            </h3>
            <p className="text-grey fw700 f16 ">Dora W.Marshall</p>
          </div>
          <div>
            <div
              onClick={onClose}
              className="cursor-pointer bg-[#e7e6eb] rounded-full p-[5px]"
            >
              <Image
                src="/close.svg"
                width={20}
                height={20}
                alt="close button"
              />
            </div>
          </div>
        </div>
        {/* Card */}
        <div className="bg-white shadow-lg rounded-lg my-[30px]">
          <p className="text-[#13013C] fw700 f16 text-center px-[10px] py-[40px] lh24">
            Get AU$5 off per registration division when you upgrade to a Power
            subscription.
          </p>
        </div>
        <Button onClick={() => onSwitch("selectdivision")}>Upgrade Now</Button>
        <p className="text-center text-[#828282] f14 fw500 lh20  mt-[15px]">
          No thanks, Id rather pay full price for this event.
        </p>
        <p className="text-center text-[#828282] f14 fw500 lh20 underline">
          Continue without upgrading
        </p>
      </div>
    </Overlay>
  );
};

export default UpgradeToPower;
