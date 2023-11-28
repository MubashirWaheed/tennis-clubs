"use client";
import { useFormContext } from "react-hook-form";

const TextField = ({ type, id, value, label }) => {
  const { register, watch } = useFormContext();

  const watchedFormData = watch();

  console.log("Form data while typing:", watchedFormData);

  return (
    <div className={styles.TextField}>
      <label className={styles.label} htmlFor={id}>
        {label}
      </label>
      <input
        {...register(`${id}`, { required: true })}
        className={styles.input}
        id={id}
        type={type}
      />
    </div>
  );
};

const styles = {
  TextField:
    "w-full rounded-[10px] border-2 border-[#F6F6F6] bg-[#FAFBFF] px-[24px] py-[8px] flex flex-col items-start gap-1",
  label: "w-full f12 fw700 lh20 text-[#828282]",
  input: "outline-none bg-transparent border-none w-full f14 fw400 lh22",
};

export default TextField;
