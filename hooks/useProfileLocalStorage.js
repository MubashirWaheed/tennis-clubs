import { useRouter } from "next/navigation"; // "next/navigation" has been deprecated
import { useState, useEffect } from "react";

const useProfileLocalStorage = () => {
  const router = useRouter();
  const [profilePresent, setProfilePresent] = useState(null);

  useEffect(() => {
    const userInLocalStorage = localStorage.getItem("profile");
    console.log("userInLocalStorage: ", userInLocalStorage);

    if (userInLocalStorage) {
      setProfilePresent(JSON.parse(userInLocalStorage));
    } else {
      router.push("/register/profile");
    }
  }, [router]);

  return profilePresent;
};

export default useProfileLocalStorage;
