"use client";
import { useFormContext } from "react-hook-form";

const validationRules = {
  required: "email required",
  pattern: {
    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
    message: "invalid email address",
  },
};

const EmailField = ({ value, onChange, label, onFocus }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className={styles.emailField}>
      <label className={styles.label} htmlFor={"email"}>
        {label}
      </label>
      <input
        className={styles.input}
        {...register("email", { ...validationRules })}
        id={"email"}
        type="email"
        onFocus={onFocus}
      />
      {errors?.email?.message && (
        <p className="text-[12px] text-red-600">{errors?.email?.message}</p>
      )}
      {errors?.email?.type == "required" && (
        <p className="text-[12px] text-red-600"></p>
      )}
    </div>
  );
};

const styles = {
  emailField:
    "w-full rounded-[10px] border-2 border-[#F6F6F6] bg-[#FAFBFF] px-[24px] py-[8px] flex flex-col items-start gap-1",
  label: "w-full f12 fw700 lh20 text-[#828282]",
  input:
    "bg-red-200 outline-none border-none bg-transparent w-full f14 fw400 lh22",
};

export default EmailField;
