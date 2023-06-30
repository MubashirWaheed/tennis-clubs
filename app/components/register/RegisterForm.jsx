"use client";
import SignUpButton from "@/components/ui/buttons/PrimaryButton";
import React from "react";
import Link from "next/link";
import EmailField from "@/components/ui/inputFields/EmailField";
import PasswordField from "@/components/ui/inputFields/PasswordField";

const RegisterForm = () => {

    const [signUpDetails, setSignUpDetails] = React.useState({
        email: "",
        password: "",
    });

    return (
        <form className="w-full flex flex-col gap-[20px]">
            <div className="flex flex-col w-full gap-[20px]">
                <EmailField
                    id="email"
                    value={signUpDetails.email}
                    onChange={(e) =>
                    setSignUpDetails({ ...signUpDetails, email: e.target.value })
                    }
                    label="Email"
                />
                <PasswordField 
                    id="password"
                    value={signUpDetails.password}
                    onChange={(e) =>
                    setSignUpDetails({ ...signUpDetails, password: e.target.value })
                    }
                    label="Password" 
                />
            </div>
            <div className="w-full flex flex-col gap-[11px]">
                <SignUpButton type="submit">Sign Up With Email</SignUpButton>
                <p className="f14 fw700 lh22 text-[#828282]">By continuing, i agree to the <Link href="#" className="text-[#3B2273]">terms of service.</Link></p>
            </div>
        </form>
    );
};

export default RegisterForm;
