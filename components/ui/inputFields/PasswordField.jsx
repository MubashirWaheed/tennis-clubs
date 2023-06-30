"use client";
import Image from "next/image";
import showPasswordIcon from "./assets/showPassword.svg"
import hidePasswordIcon from "./assets/hidePassword.svg"
import React from "react";

const PasswordField = ({ id, value, onChange, label }) => {
    const [showPassword, setShowPassword] = React.useState(false); 

    const switchPasswordVisibility = (e) => {
        e.preventDefault();
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
                    type={showPassword ? "text" : "password"}
                />
            </div>

            {showPassword ?
                <button onClick={switchPasswordVisibility}>
                    <Image src={hidePasswordIcon} alt="Hide Password" className="w-[24px] h-[24px]"/>
                </button> :
                <button onClick={switchPasswordVisibility}>
                    <Image src={showPasswordIcon} alt="Show Password" className="w-[24px] h-[24px]"/>
                </button>
            }
        </div>
    );
};

const styles = {
    passwordField: "w-full rounded-[10px] border-2 border-[#F6F6F6] bg-[#FAFBFF] px-[24px] py-[8px] flex items-center gap-2",
    label: "w-full f12 fw700 lh20 text-[#828282]",
    input: "outline-none bg-transparent border-none w-full f14 fw400 lh22",
};

export default PasswordField;
