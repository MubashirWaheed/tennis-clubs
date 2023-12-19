"use client";
import { useRouter } from "next/navigation";
import { useEffect, useLayoutEffect } from "react";
// import { checkUserProfile } from "../utils/auth"; // Implement this function

const ProfileRoute = ({ children }) => {
  const router = useRouter();

  useLayoutEffect(() => {
    const redirectToProfile = async () => {
      //  const hasProfile = await checkUserProfile(); // Implement this function
      const hasProfile = false;
      if (!hasProfile) {
        router.push("/register/profile");
      }
    };

    redirectToProfile();
  }, []);

  return <>{children}</>;
};

export default ProfileRoute;
