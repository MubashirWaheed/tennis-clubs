import Image from "next/image";
import Ball from "@/app/assets/Ball.svg"
import HorizontalBat from "@/app/assets/HorizontalBat.svg";
import VerticalBat from "@/app/assets/VerticalBat.svg";
import EditProfileButton from "@/components/ui/buttons/PrimaryButton"
import GetRatedButton from "@/components/ui/buttons/PrimaryButton"
import playerProfileImage from "../assets/playerProfile.png";
const ProfileViewLayout = ({children}) => {
    return(
        <main>
            <section className="relative bg-[#3B2273]">
                <div className="flex flex-row justify-between items-center h-full px-[170px] pt-[50px] pb-[80px]">
                    <div className="flex items-center gap-1">
                        <Image
                        src={playerProfileImage}
                        alt="human"
                        className="w-[130px] rounded-full p-4"
                        />
                        <div className="flex flex-col  gap-1 pt-7">
                            <p
                                className="h2 text-white"
                            >
                                Philip B. Simpson
                            </p>
                            <p className="f16 fw700 lh24 text-[#fff] opacity-70">
                                Avenue Shippensburg, PA 17257
                            </p>
                            <div className="w-[60%] mt-2">
                                <EditProfileButton>Edit Profile</EditProfileButton>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row gap-[60px]">
                        <div>
                            <p className="text-[#FFBB34] f16 fw700 lh24">
                                MPR
                            </p>
                            <p className="text-white h2">
                                1.00 - 3.00
                            </p>
                            <p className="text-white f16 fw700 lh24 opacity-70">
                                Reliab.: Estimated
                            </p>
                            </div>
                            <div className="flex flex-col gap-2">
                            <p className="text-[#FFBB34] f16 fw700 lh24">
                                MPR
                            </p>
                            <GetRatedButton>Get Rated</GetRatedButton>
                        </div>
                    </div>
                </div>
                <Image src={Ball} alt="" className="absolute bottom-0 right-0 w-[100px] h-[100px] object-contain"/>
                <Image src={HorizontalBat} alt="" className="absolute left-0 bottom-2"/>
                <Image src={VerticalBat} alt="" className="absolute left-0 bottom-0"/>
            </section>
            {children}
        </main>
    )
}

export default ProfileViewLayout;