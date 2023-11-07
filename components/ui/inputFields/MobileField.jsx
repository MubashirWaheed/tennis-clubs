import { useFormContext } from "react-hook-form";

const MobileField = ({ value, onChange, id }) => {
  const { register, watch } = useFormContext();
  return (
    <div className={styles.MobileField}>
      <div className="flex-1 flex flex-col items-start gap-1">
        <label className={styles.label} htmlFor={"mobile"}>
          Phone Number
        </label>
        <input
          {...register(`${id}`)}
          className={styles.input}
          value={value}
          onChange={onChange}
          id={"mobile"}
          type="tel"
        />
      </div>

      <button className="px-[31px] py-[6px] outline-none rounded-[8px] bg-[#027333] text-[#FFFFFF] f14 fw700 lh24 cursor pointer">
        Send OTP
      </button>
    </div>
  );
};

const styles = {
  MobileField:
    "w-full rounded-[10px] border-2 border-[#F6F6F6] bg-[#FAFBFF] px-[24px] py-[8px] flex items-center gap-2",
  label: "w-full f12 fw700 lh20 text-[#828282]",
  input: "outline-none bg-transparent border-none w-full f14 fw400 lh22",
};

export default MobileField;
