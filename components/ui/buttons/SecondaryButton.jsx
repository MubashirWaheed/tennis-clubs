const SecondaryButton = ({children, type, onClick}) => {
    return (
        <button className="border-1 border-[#027333] px-[20px] py-[13px] rounded-[8px] inline-flex justify-center items-center gap-[20px] bg-[#FFFFFF] cursor-pointer" type={type} onClick={onClick}>
            <span className="p f16 lh24 text-white">{children}</span>
            <span className="w-[20px] h-[20px]"></span>
        </button>
    )
}

export default SecondaryButton