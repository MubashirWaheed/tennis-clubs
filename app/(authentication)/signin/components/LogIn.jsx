"use client";
import Link from "next/link";
import LogInForm from "./LogInForm";
import Image from "next/image";
import { signIn } from "next-auth/react";

const LogIn = () => {
  return (
    <section className={styles.formContainer}>
      <div className="p-[10px] md:p-[20px] lg:px-[37px] lg:py-[32px] w-full flex flex-col gap-[30px]">
        <h1 className="h3 text-[#13013C] lg:w-[412px]">
          Log into your <span className="h3 text-[#FFBB34]">account</span>
        </h1>
        <LogInForm />

        <div className="flex flex-col gap-[106px]">
          <div className="flex items-center justify-between">
            <p className="text-center f16 fw700 lh24 text-[#13013C]">
              LogIn With :
            </p>
            <div className="flex gap-4 items-center">
              <button
                onClick={() => signIn("google")}
                className="h-[50px] w-[50px] rounded-xl shadow-md flex items-center justify-center"
              >
                <Image
                  src="/google.svg"
                  alt="Social Icons"
                  width={26}
                  height={26}
                />
              </button>
              <button className="h-[50px] w-[50px] rounded-xl shadow-md flex items-center justify-center">
                <Image
                  src="/facebook.svg"
                  alt="Social Icons"
                  width={28}
                  height={28}
                />
              </button>
            </div>
          </div>
          <p className="text-center f18 fw400 lh30 text-[#828282]">
            Dont have an account?
            <Link href={"/register"} className="text-[#13013C]">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

const styles = {
  formContainer:
    "rounded-[10px] bg-[#FFFFFF] w-full md:w-[500px] lg:w-[581px] z-20",
  formHeader: "h4 text-[#13013C]",
};
export default LogIn;
