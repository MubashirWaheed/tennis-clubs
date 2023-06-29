"use client";
import Image from "next/image";
import showPassword from "../../../app/components/register/assets/showPassword.svg"
import hidePassword from "../../../app/components/register/assets/hidePassword.svg"
import React from "react";

const PasswordField = ({ id, value, onChange, label }) => {
    const [showPassword, setShowPassword] = React.useState(false); 
    const switchPasswordVisibility = () => {
        showPassword === true ? setShowPassword(false): setShowPassword(true);
    }
    return (
        <div className={styles.passwordField}>
            <div className="flex-1 flex flex-col items-start gap-1">
                <label className={styles.label} htmlFor={id}>{label}</label>
                <input
                    className={styles.input}
                    value={value}
                    onChange={onChange}
                    id={id}
                    type={show ? "text" : "password"}
                />
            </div>

            {show ?
                <button onClick={switchPasswordVisibility}>
                    <Image src={showPassword} alt="Show Password" className="w-[24px] h-[24px]"/>
                </button>:
                <button onClick={switchPasswordVisibility}>
                    <Image src={hidePassword} alt="Hide Password" className="w-[24px] h-[24px]"/>
                </button>
            }
        </div>
    );
};

const styles = {
    passwordField: "w-full rounded-[10px] border-1 border-[#F6F6F6] bg-[#FAFBFF] h-[67px] px-[24px] py-[13px] flex",
    label: "w-full f12 fw700 lh20 text-[#828282]",
    input: "outline-none border-none w-full f14 fw400 lh22",
};

export default PasswordField;
