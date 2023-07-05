import Image from "next/image";
import Ball from "@/app/assets/Ball.svg"
import HorizontalBat from "@/app/assets/HorizontalBat.svg";
import VerticalBat from "@/app/assets/VerticalBat.svg";
import EditProfileButton from "@/components/ui/buttons/PrimaryButton"
import GetRatedButton from "@/components/ui/buttons/PrimaryButton"
import playerProfileImage from "../assets/playerProfile.png";

const EditProfileLayout = ({children}) => {
    return(
        <main>
            <section className="relative bg-[#3B2273]">
                <div className="flex flex-row justify-between items-center h-full px-[170px] pt-[50px] pb-[160px]">
                    <h1 className="text-white h2">Edit Profile</h1>
                </div>
                <Image src={Ball} alt="" className="absolute bottom-0 right-0 w-[100px] h-[100px] object-contain"/>
                <Image src={HorizontalBat} alt="" className="absolute left-0 bottom-2"/>
                <Image src={VerticalBat} alt="" className="absolute left-0 bottom-0"/>
            </section>
            {children}
        </main>
    )
}

export default EditProfileLayout;