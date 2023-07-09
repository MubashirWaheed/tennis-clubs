"use client";
import Image from "next/image";
import Ball from "@/app/assets/Ball.svg";
import HorizontalBat from "@/app/assets/HorizontalBat.svg";
import VerticalBat from "@/app/assets/VerticalBat.svg";
import ViewPaidHits from "@/components/ui/buttons/PrimaryButton";
import RequestPaidHit from "@/components/ui/buttons/PrimaryButton";
import GetRatedButton from "@/components/ui/buttons/PrimaryButton";
import playerProfileImage from "../assets/playerProfile.png";
import { useRouter } from "next/navigation";
import ProfileNavigation from "./components/profileNavigation";
import profileViewData from "./profileView.json";
import rightArrowIcon from "../assets/rightarrow.svg";
import Info from "../assets/Info.svg";
import Ellipse from "../assets/Ellipse.svg";
import chat from "../assets/chat.svg";
import share from "../assets/share.svg";

const IndividualProfileLayout = ({ children }) => {
  const router = useRouter();
  return (
    <main>
      <section className="relative bg-[#3B2273]">
        <div className="flex flex-row justify-between items-center h-full px-[160px] pt-[44px] pb-[80px]">
          <div className="flex items-center gap-1">
            <Image
              src={playerProfileImage}
              alt="human"
              className="w-[140px] rounded-full p-4"
            />
            <div className="flex flex-col  gap-1 pt-7">
              <p className="h2 text-white">Philip B. Simpson</p>
              <p className="f16 fw700 lh24 text-[#fff] opacity-70">
                Avenue Shippensburg, PA 17257
              </p>
              <div className="gap-[15px] mt-2 flex items-center">
                <RequestPaidHit size="small">Request Paid Hits</RequestPaidHit>
                <ViewPaidHits size="small">View Paid Hits</ViewPaidHits>
                <button className="px-[10px] py-[8px] flex items-center justify-center gap-[10px] border-2 border-[#ffffff] rounded-[8px] cursor-pointer">
                  <p className="p f14 lh24 text-[#fff]">
                    Request profile merge
                  </p>
                  <Image
                    src={rightArrowIcon}
                    alt="Right Arrow Icon"
                    className="w-[20px] h-[20px]"
                  />
                </button>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-[25px]">
            <div className="flex flex-row gap-[25px]">
              <div>
                <p className="text-[#FFBB34] f16 fw700 lh24">MPR SGLS</p>
                <p className="text-white h2">13.60</p>
                <p className="text-white f16 fw700 lh24 opacity-70 flex items-center gap-[2px] w-[135px]">
                  Reliab.: 100%
                  <span>
                    <Image src={Info} alt="Info" />
                  </span>
                </p>
              </div>

              <div className="border border-[#828282] "></div>
            </div>

            <div className="flex flex-col gap-[25px]">
              <div className="flex items-center">
                <Image src={Ellipse} alt="Ellipse" />
                <Image
                  src={chat}
                  alt="chat"
                  className="relative right-[32px]"
                />
              </div>
              <div className="flex items-center">
                <Image src={Ellipse} alt="Ellipse" />
                <Image
                  src={share}
                  alt="share"
                  className="relative right-[32px]"
                />
              </div>
            </div>
          </div>
        </div>
        <Image
          src={Ball}
          alt=""
          className="absolute bottom-0 right-0 w-[100px] h-[100px] object-contain"
        />
        <Image
          src={HorizontalBat}
          alt=""
          className="absolute left-0 bottom-2"
        />
        <Image src={VerticalBat} alt="" className="absolute left-0 bottom-0" />
      </section>
      <section className="relative -top-[30px] flex flex-col gap-[50px] w-full max-w-[1200px] mx-auto">
        <ProfileNavigation navItems={profileViewData?.profileNavBar} />
        {children}
      </section>
    </main>
  );
};

export default IndividualProfileLayout;
