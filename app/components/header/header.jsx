"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import { useSession } from "next-auth/react";

import "./navbar.css";

import ProfileMenu from "./profileMenu";
import Logo from "./components/Logo";
import Navbar from "./components/Navbar";
import Searchbar from "./components/Searchbar";
import Icons from "./components/Icons";
import Hamburger from "./components/Hamburger";
import ResponsiveMenu from "./components/ResponsiveMenu";

const Header = () => {
  const [burger_class, setBurgerClass] = useState("burger-bar unclicked");

  const [menu_class, setMenuClass] = useState("menu hide");
  const [isMenuClicked, setIsMenuClicked] = useState(false);
  const [profileMenu, setProfileMenu] = useState(false);
  const [userProfile, setUserProfile] = useState(null);

  const { data: session } = useSession();

  const fetchData = async (userId, setUserProfile) => {
    try {
      console.log("reqeust made ");
      const response = await axios.get(`/api/profile?userId=${userId}`);
      console.log("response: ", response);
      setUserProfile(response.data);
      localStorage.setItem("profile", JSON.stringify(response.data));
    } catch (error) {
      console.error("Error fetching profile:", error);
    }
  };

  useEffect(() => {
    const storedData =
      typeof window !== "undefined" ? localStorage.getItem("profile") : null;
    console.log("storedData: ", storedData);
    console.log("session.user.id: ", session.user.id);

    if (storedData == null) {
      console.log("inside if ");
      fetchData(session.user.id, setUserProfile);
    } else {
      setUserProfile(JSON.parse(storedData));
    }
    // const fetchData = async () => {
    //   if (typeof window !== "undefined") {
    //     const storedData = localStorage.getItem("profile");

    //     if (!storedData) {
    //       try {
    //         console.log("helo");
    //         const response = await axios.get(
    //           `/api/profile?userId=${session.user.id}`
    //         );
    //         console.log("profile after fetch", response.data);
    //         setUserProfile(response.data);
    //         console.log(
    //           "profile fetched in case not in the local storage",
    //           response
    //         );
    //         localStorage.setItem("profile", JSON.stringify(response.data));
    //       } catch (error) {
    //         console.error("Error fetching profile:", error);
    //       }
    //     } else {
    //       setUserProfile(JSON.parse(storedData));
    //     }
    //   }
    // };

    // fetchData();
  }, []);

  const updateMenu = () => {
    if (!isMenuClicked) {
      setBurgerClass("burger-bar clicked");
      setMenuClass("menu visible");
    } else {
      setBurgerClass("burger-bar unclicked");
      setMenuClass("menu hide");
    }
    setIsMenuClicked(!isMenuClicked);
  };

  return (
    <header className="bg-white z-30">
      <div className="z-30 flex items-center max-w-[1200px] mx-auto justify-between p-2 md:p-3">
        <Logo />
        <Navbar />
        <Searchbar />
        <Icons setProfileMenu={setProfileMenu} />
        <Hamburger
          burger_class={burger_class}
          profileMenu={profileMenu}
          updateMenu={updateMenu}
        />
        <ResponsiveMenu
          updateMenu={updateMenu}
          setProfileMenu={setProfileMenu}
          profileMenu={profileMenu}
          menu_class={menu_class}
        />
      </div>

      {profileMenu && (
        <div className={`${profileMenu ? "block" : "hidden"}`}>
          <ProfileMenu
            profile={userProfile}
            closeMenu={() => {
              setProfileMenu((prev) => !prev);
            }}
          />
        </div>
      )}
    </header>
  );
};

export default Header;
