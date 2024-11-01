"use client";
import Link from "next/link";
import RegisterForm from "./components/RegisterForm";
import Image from "next/image";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const RegisterAsAPlayer = () => {
  const router = useRouter();
  const { data, status } = useSession();
  if (status == "authenticated") {
    router.push("/register/profile");
  }
  console.log("user from the session: ", data);
  // if (!test) return null;

  // if (test?.data) {
  //   console.log(test.data.user);
  //   return router.push("/register/profile");
  // }

  useEffect(() => {
    if (data) {
      console.log(data.user);
      router.push("/register/profile");
    }
  }, [data]);

  return (
    <section className={styles.formContainer}>
      <div className="p-[10px] md:p-[20px] lg:px-[37px] lg:py-[32px] w-full flex flex-col gap-[30px]">
        <h1 className="h3 text-[#13013C] lg:w-[412px]">
          Create your profile, get rated, and{" "}
          <span className="h3 text-[#FFBB34]">start playing!</span>
        </h1>

        <RegisterForm />

        <div className="flex flex-col gap-[106px]">
          <div className="flex items-center justify-between">
            <p className="text-center f16 fw700 lh24 text-[#13013C]">
              Register With :
            </p>
            <div className="flex gap-[15px] items-center">
              <button
                onClick={() =>
                  signIn("google", { callbackUrl: "/register/profile" })
                }
                className="hover:shadow-lg transition-all h-[50px] w-[50px] rounded-md shadow-md flex items-center justify-center"
              >
                <Image
                  src="/google.svg"
                  alt="Social Icons"
                  width={24}
                  height={24}
                />
              </button>
              <button className="h-[50px] w-[50px] rounded-md shadow-md flex items-center justify-center">
                <Image
                  src="/facebook.svg"
                  alt="Social Icons"
                  width={26}
                  height={26}
                />
              </button>
            </div>
          </div>
          <p className="text-center f18 fw400 lh30 text-[#828282] ">
            Already have an account?
            <Link href={"/signin"} className="text-[#13013C]">
              Sign In
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

export default RegisterAsAPlayer;
