const PrimaryButton = ({children, type, onClick}) => {
    return (
        <button className="w-full px-[20px] py-[13px] rounded-[8px] inline-flex items-center justify-center gap-[20px] bg-[#027333] cursor-pointer"  type={type} onClick={onClick}>
            <span className="p f16 lh24 text-white">{children}</span>
            <span className="w-[20px] h-[20px]"></span>
        </button>
    )
}

export default PrimaryButton