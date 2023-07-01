import Image from "next/image";
import greenArrowIcon from "../assets/greenArrow.svg";
const SecondaryButton = ({children, type, onClick}) => {
    return (
        <button className="border-2 border-[#027333] px-[20px] py-[13px] rounded-[8px] inline-flex justify-center items-center gap-[20px] bg-[#FFFFFF] cursor-pointer" type={type} onClick={onClick}>
            <span className="p f16 lh24 text-[#027333]">{children}</span>
            <span className="w-[20px] h-[20px]"><Image src={greenArrowIcon} alt="Right Arrow Icon" className="w-[20px] h-[20px]"/></span>
        </button>
    )
}

export default SecondaryButton