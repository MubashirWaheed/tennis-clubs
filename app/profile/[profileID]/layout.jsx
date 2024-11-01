"use client";
import Image from "next/image";
import ViewPaidHits from "@/components/ui/buttons/PrimaryButton";
import RequestPaidHit from "@/components/ui/buttons/PrimaryButton";
import { useRouter } from "next/navigation";
import ProfileNavigation from "./components/profileNavigation";
import profileViewData from "./profileView.json";
import { useProfileStore } from "@/hooks/useProfileStore";

const IndividualProfileLayout = ({ children }) => {
  const router = useRouter();
  const { profile } = useProfileStore();
  const { firstName, lastName, location } = profile;

  return (
    <main>
      <section className="relative bg-[#3B2273]">
        <div className="z-30 flex flex-col gap-4 lg:gap-0 lg:flex-row justify-between items-center h-full w-full max-w-[1170px] px-3 lg:px-0 mx-auto pt-[44px] pb-[80px]">
          <div className="flex flex-col lg:flex-row items-center gap-2 md:gap-3 lg:gap-5">
            <Image
              width={93}
              height={93}
              src="/playerProfile.png"
              alt="Player Profile"
              className="w-[93px] h-[93px] rounded-full"
            />
            <div className="flex flex-col gap-1 pt-7">
              <p className="h2 text-white">
                {firstName} {lastName}
              </p>
              <p className="f16 fw700 lh24 text-[#fff] opacity-70">
                {location}
              </p>
              <div className="gap-[15px] mt-2 flex flex-col md:flex-row items-center">
                <RequestPaidHit size="small">Request Paid Hits</RequestPaidHit>
                <ViewPaidHits size="small">View Paid Hits</ViewPaidHits>
                <button className="px-[10px] py-[8px] flex items-center justify-center gap-[10px] border-2 border-[#ffffff] rounded-[8px] cursor-pointer">
                  <p className="p f14 lh24 text-[#fff]">
                    Request profile merge
                  </p>
                  <Image
                    width={20}
                    height={20}
                    src="/rightarrow.svg"
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
                    <Image
                      width={24}
                      height={24}
                      src="/Info.svg"
                      alt="Info"
                      className="w-[24px] h-[24px]"
                    />
                  </span>
                </p>
              </div>

              <div className="border border-[#828282]"></div>
            </div>

            <div className="flex flex-col gap-[25px]">
              <div className="flex items-center">
                <Image
                  width={40}
                  height={40}
                  src="/Ellipse.svg"
                  alt="Ellipse"
                  className="w-[40px] h-[40px]"
                />
                <Image
                  width={24}
                  height={24}
                  src="/chat.svg"
                  alt="chat"
                  className="relative right-[32px] w-[24px] h-[24px]"
                />
              </div>
              <div className="flex items-center">
                <Image
                  width={40}
                  height={40}
                  src="/Ellipse.svg"
                  alt="Ellipse"
                  className="w-[40px] h-[40px]"
                />
                <Image
                  width={24}
                  height={24}
                  src="/share.svg"
                  alt="share"
                  className="relative right-[32px] w-[24px] h-[24px]"
                />
              </div>
            </div>
          </div>
        </div>
        <Image
          src="/Ball.svg"
          height={100}
          width={100}
          alt=""
          className="pointer-events-none absolute bottom-0 right-0 w-[100px] h-[100px] object-contain"
        />
        <Image
          src="/HorizontalBat.svg"
          height={100}
          width={100}
          alt=""
          className="absolute left-0 bottom-2"
        />
        <Image
          src="/VerticalBat.svg"
          height={50}
          width={50}
          alt=""
          className="absolute left-0 bottom-0"
        />
      </section>

      <section className="relative -top-[30px] flex flex-col gap-[50px] w-full max-w-[1170px] mx-auto">
        <ProfileNavigation navItems={profileViewData?.profileNavBar} />
        {children}
      </section>
    </main>
  );
};

export default IndividualProfileLayout;
