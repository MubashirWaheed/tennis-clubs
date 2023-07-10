import Image from "next/image";

const OTPField = ({ value, onChange}) => {
    return (
      <div className={styles.OTPField}>
        <div className="flex-1 flex flex-col items-start gap-1">
          <label className={styles.label} htmlFor={"otp"}>
            OTP
          </label>
          <input
            className={styles.input}
            value={value}
            onChange={onChange}
            id={"otp"}
            type="tel"
          />
        </div>
        <Image
          src="/OTPVerified.svg"
          width={28}
          height={28}
          alt="OTP Verified Icon"
          className="w-[28px] h-[28px] cursor-pointer"
        />
      </div>
    );
};

const styles = {
    OTPField: "w-full rounded-[10px] border-2 border-[#F6F6F6] bg-[#FAFBFF] px-[24px] py-[8px] flex items-center gap-2",
    label: "w-full f12 fw700 lh20 text-[#828282]",
    input: "outline-none bg-transparent border-none w-full f14 fw400 lh22",
};

export default OTPField;
