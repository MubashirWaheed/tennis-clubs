"use client";
import { useRouter } from "next/navigation";
import ProfileForm from "../components/ProfileForm";

import Support from "../components/Support";
import { useLayoutEffect } from "react";
import { useSession } from "next-auth/react";

const ProfileInfo = () => {
  // protect this router as well
  const router = useRouter();
  const session = useSession();
  if (!session.data?.user) router.push("/signin");
  if (window == undefined) return null;

  // useLayoutEffect(() => {
  //   const checkLocalStorage = () => {
  //     const data = localStorage.getItem("profile");

  //     if (data) {
  //       router.push("/");
  //     }
  //   };

  //   checkLocalStorage();
  // }, []);

  return (
    <section className="p-[10px] md:p-[20px] lg:p-[38px] bg-white rounded-[10px] z-20">
      <h3 className="h3 text-[#13013C]">Personal information.</h3>
      <ProfileForm />
      <Support />
    </section>
  );
};

export default ProfileInfo;
