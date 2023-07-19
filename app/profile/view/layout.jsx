"use client";
import Image from "next/image";
import EditProfileButton from "@/components/ui/buttons/PrimaryButton"
import GetRatedButton from "@/components/ui/buttons/PrimaryButton"
import { useRouter } from 'next/navigation'

const ProfileViewLayout = ({children}) => {
    const router = useRouter();
    return (
      <main>
        <section className="relative bg-[#3B2273]">
          <div className="flex flex-col lg:flex-row gap-4 lg:gap-0 justify-between items-center h-full px-4 lg:px-0 w-full max-w-[1170px] mx-auto pt-[50px] pb-[80px]">
            <div className="flex flex-col lg:flex-row items-center gap-5">
              <Image
                width={93}
                height={93}
                src="/playerProfile.png"
                alt="Player Profile"
                className="w-[93px] h-[93px] rounded-full"
              />
              <div className="flex flex-col items-center lg:items-start gap-1 pt-7">
                <p className="h2 text-white">Philip B. Simpson</p>
                <p className="f16 fw700 lh24 text-[#fff] opacity-70">
                  Avenue Shippensburg, PA 17257
                </p>
                <div className="w-[60%] mt-2">
                  <EditProfileButton
                    onClick={() => router.push("/profile/edit")}
                  >
                    Edit Profile
                  </EditProfileButton>
                </div>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row gap-[60px]">
              <div>
                <p className="text-[#FFBB34] f16 fw700 lh24">MPR</p>
                <p className="text-white h2">1.00 - 3.00</p>
                <p className="text-white f16 fw700 lh24 opacity-70">
                  Reliab.: Estimated
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-[#FFBB34] f16 fw700 lh24">MPR</p>
                <GetRatedButton>Get Rated</GetRatedButton>
              </div>
            </div>
          </div>
          <Image
            width={100}
            height={100}
            src="/Ball.svg"
            alt="Ball"
            className="pointers-events-none absolute bottom-0 right-0 w-[100px] h-[100px] object-contain"
          />
          <Image
            width={131}
            height={111}
            src="/HorizontalBat.svg"
            alt="HorizontalBat"
            className="pointers-events-none absolute left-0 bottom-2"
          />
          <Image
            width={131}
            height={111}
            src="/VerticalBat.svg"
            alt="VerticalBat"
            className="pointers-events-none absolute left-0 bottom-0"
          />
        </section>
        {children}
      </main>
    );
}

export default ProfileViewLayout;