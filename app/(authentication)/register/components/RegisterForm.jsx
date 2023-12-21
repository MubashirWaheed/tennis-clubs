"use client";
import SignUpButton from "@/components/ui/buttons/PrimaryButton";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import EmailField from "@/components/ui/inputFields/EmailField";
import PasswordField from "@/components/ui/inputFields/PasswordField";
import { useRouter } from "next/navigation";
import { FormProvider, useForm } from "react-hook-form";
import axios from "axios";
import { signIn, useSession } from "next-auth/react";
import { useUserStore } from "@/hooks/useUser";

const RegisterForm = () => {
  const router = useRouter();
  const methods = useForm();
  const [emailError, setEmailError] = useState();
  const [loading, setLoading] = useState(false);

  const { setUser } = useUserStore();

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const response = await axios.post("/api/register", data);
      console.log("response:", response.data);

      const { email, password } = data;

      const result = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });
      console.log("RESULT registration: ", result);
      // setUser(response.data);

      router.push("/register/profile");
      router.refresh();
    } catch (error) {
      if (error) {
        console.log(error);
        setEmailError("email already in use");
      }
    }
    setLoading(false);
  };

  const onEmailFieldFocus = () => {
    setEmailError(null);
  };

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className="w-full flex flex-col gap-[20px]"
      >
        <div className="flex flex-col w-full gap-[10px]">
          <EmailField id="email" label="Email" onFocus={onEmailFieldFocus} />
          {emailError && (
            <p className="text-red-500 text-[12px] ml-[15px]">
              email already in use
            </p>
          )}
          <PasswordField formType="register" id="password" label="Password" />
        </div>
        <div className="w-full flex flex-col gap-[11px]">
          <SignUpButton disabled={loading} type="submit">
            Sign Up With Email
          </SignUpButton>
          <p className="f14 fw700 lh22 text-[#828282]">
            By continuing, i agree to the{" "}
            <Link href="/signin" className="text-[#3B2273]">
              terms of service.
            </Link>
          </p>
        </div>
      </form>
    </FormProvider>
  );
};

export default RegisterForm;
