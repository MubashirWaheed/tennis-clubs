import Image from "next/image";
import SignInButton from "@/components/ui/buttons/PrimaryButton";
import JoinButton from "@/components/ui/buttons/SecondaryButton";
import Logo from "@/app/assets/Logo.svg";

const Header = () => {
    return (
        <div className="h-[90px] w-full bg-[#fff] box">
            <div className="flex flex-row items-center w-[80%] mx-auto justify-between py-3">
                <div className="flex-1">
                    <Image src={Logo} alt="Logo" className="w-[85px] h-[70px]" />
                </div>
                
                <nav>
                    <ul className="flex flex-row items-center">
                        <li className="f16 fw700 lh24 text-[#13013C] font-sans cursor-pointer mr-7">
                        Players
                        </li>
                        <li className="f16 fw700 lh24 text-[#13013C] font-sans cursor-pointer mr-7">
                        Clubs
                        </li>
                        <li className="f16 fw700 lh24 text-[#13013C] font-sans cursor-pointer mr-7">
                        Pro League
                        </li>
                        <li className="f16 fw700 lh24 text-[#13013C] font-sans cursor-pointer mr-7">
                        About Us
                        </li>
                    </ul>
                </nav>

                <div className="flex flex-row items-center justify-between gap-[15px]">
                    <SignInButton>SignIn</SignInButton>
                    <JoinButton>Join</JoinButton>
                </div>
            </div>
        </div>
    );
};

export default Header;
