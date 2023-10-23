"use client";
import Image from "next/image";
import React, { useState } from "react";
import { useFormContext } from "react-hook-form";
import {
  checkPasswordRequirements,
  passwordValidationChecks,
} from "@/helpers/checkPasswordRequirements";

const PasswordField = ({ formType, label, onFocus }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [passwordErrors, setPasswordErrors] = useState([]);

  const {
    register,
    formState: { errors },
    setValue,
  } = useFormContext();

  const handlePasswordChange = async (e) => {
    const password = e.target.value;
    setValue("password", password, { shouldValidate: true });
    await new Promise((resolve) => setTimeout(resolve, 0));
    const passwordValidationErrors = checkPasswordRequirements(password);
    setPasswordErrors(passwordValidationErrors);
  };

  return (
    <>
      <div className={styles.passwordField}>
        <div className="flex-1 flex flex-col items-start gap-1">
          <label className={styles.label} htmlFor="password">
            {label}
          </label>
          <input
            className={styles.input}
            {...register("password", {
              required: "password required",
              ...(formType !== "signin" && {
                pattern: {
                  value: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/,
                  message: "Password doesn't meet criteria",
                },
              }),
            })}
            id="password"
            type={showPassword ? "text" : "password"}
            onFocus={onFocus}
            onChange={formType == "register" ? handlePasswordChange : undefined}
          />
          {errors?.password?.message && (
            <p className="text-[12px] text-red-600">
              {errors?.password?.message}
            </p>
          )}
        </div>

        <button type="button" onClick={() => setShowPassword(!showPassword)}>
          <Image
            src={showPassword ? "/hidePassword.svg" : "/showPassword.svg"}
            alt={showPassword ? "Hide Password" : "Show Password"}
            height={24}
            width={24}
            className="w-[24px] h-[24px]"
          />
        </button>
      </div>

      {formType !== "signin" && errors?.password?.type === "pattern" && (
        <div className="flex">
          {passwordValidationChecks.map((error) => (
            <div key={error.name} className="flex gap-1 ml-[10px]">
              <Image
                src={
                  passwordErrors.includes(error.name)
                    ? "/purpleTick.svg"
                    : "/OTPVerified.svg"
                }
                width={20}
                height={20}
                alt="Character Requirement"
              />
              <p
                className={`${
                  passwordErrors.includes(error.name)
                    ? "text-purple "
                    : "text-green"
                }  text-[14px]`}
              >
                {error.text}
              </p>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

const styles = {
  passwordField:
    "w-full rounded-[10px] border-2 border-[#F6F6F6] bg-[#FAFBFF] px-[24px] py-[8px] flex items-center gap-2",
  label: "w-full f12 fw700 lh20 text-[#828282]",
  input: "outline-none bg-transparent border-none w-full f14 fw400 lh22",
};

export default PasswordField;
