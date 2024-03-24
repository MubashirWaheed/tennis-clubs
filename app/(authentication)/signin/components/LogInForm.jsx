"use client";
import SignInButton from "@/components/ui/buttons/PrimaryButton";
import React, { useState } from "react";
import Link from "next/link";
import EmailField from "@/components/ui/inputFields/EmailField";
import PasswordField from "@/components/ui/inputFields/PasswordField";
import { FormProvider, useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

const LogInForm = () => {
  const router = useRouter();
  const methods = useForm();
  const [emailError, setEmailError] = useState(null);
  const [passwordError, setPasswordError] = useState(null);
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    setLoading(true);
    const { email, password } = data;
    const response = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (!response.error) {
      router.push("/");
      router.refresh();
    } else {
      const errorType = response.error.includes("password")
        ? "password"
        : "email";
      errorType === "password"
        ? setPasswordError(response.error)
        : setEmailError(response.error);
    }
    setLoading(false);
  };

  const onEmailFieldFocus = () => {
    setEmailError(null);
  };
  const onPasswordFieldFocus = () => {
    setPasswordError(null);
  };

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className="w-full flex flex-col gap-[20px]"
      >
        <div className="flex flex-col w-full gap-[5px]">
          <EmailField id="email" label="Email" onFocus={onEmailFieldFocus} />
          {emailError && (
            <p className="text-red-500 text-[12px] ml-55px">{emailError}</p>
          )}
          <PasswordField
            formType="signin"
            id="password"
            label="Password"
            onFocus={onPasswordFieldFocus}
          />
          {passwordError && (
            <p className="text-red-500 text-[12px] ml-55px">{passwordError}</p>
          )}
          <p className="text-xs leading-tight">Email: admin@gmail.com</p>
          <p className="text-xs leading-tight">Password: Admin12345</p>
        </div>
        <div className="w-full flex flex-col gap-[11px]">
          <SignInButton disabled={loading} type="submit">
            Sign In With Email
          </SignInButton>
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

export default LogInForm;
