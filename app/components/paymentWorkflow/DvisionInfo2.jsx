import React from "react";
import Overlay from "@/components/ui/Overlay/Overlay";
import Image from "next/image";
import Button from "@/components/ui/buttons/PrimaryButton";
import SecondaryButton from "@/components/ui/buttons/SecondaryButton";

const DvisionInfo2 = () => {
  return (
    <Overlay>
      <div className="mt-[10px] flex justify-between  ">
        <div>
          <div className="cursor-pointer rotate-180  rounded-full p-[5px]">
            <Image
              src="/right_ic.svg"
              width={24}
              height={24}
              alt="back arrow"
            />
          </div>
        </div>

        <div>
          <h3 className="text-darkPurple f18 fw700  max-w-[250px]">
            Dobles Mixto - Nivel Initiation & Beginner (MPR Ponderado Hasta
            8.60)
          </h3>
          <p className="text-[#828282] fw700 f14 ">Dora W.Marshall</p>
        </div>
        <div>
          <div className="cursor-pointer bg-[#e7e6eb] rounded-full p-[5px]">
            <Image src="/close.svg" width={20} height={20} alt="close button" />
          </div>
        </div>
      </div>

      {/* Card */}
      <div className="bg-white my-[20px] rounded-lg shadow-md px-[20px] py-[15px]">
        <div className="flex justify-between">
          <div>
            <h3 className="text-darkPurple fw700 f16 mr-[10px]">
              De Carvalho Cardoso Alves
            </h3>
            <p className="text-grey fw700 f14">Male • Brazil</p>
          </div>
          <div>
            <Image
              className="rounded-full "
              src="/playerProfile.png"
              width={40}
              height={40}
            />
          </div>
        </div>
        <div className="flex items-center gap-2">
          <p className="text-grey flex items-center">
            3.xx
            <Image
              className="ml-[5px]"
              src="/verifiedIcon.svg"
              width={15}
              height={15}
              alt="verified logo"
            />
          </p>
          <p className="text-grey flex items-center">
            3.xx
            <Image
              className="ml-[5px]"
              src="/verifiedIcon.svg"
              width={15}
              height={15}
              alt="verified logo"
            />
          </p>
        </div>
      </div>

      <div className="flex gap-2 flex-col">
        <Button size="small">Add Partner</Button>
        <SecondaryButton size="small">Change Partner</SecondaryButton>
      </div>
    </Overlay>
  );
};

export default DvisionInfo2;
