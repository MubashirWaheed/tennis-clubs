"use client";
import { useEffect, useState } from "react";
import "./navbar.css";
import ProfileMenu from "./profileMenu";
import Logo from "./components/Logo";
import Navbar from "./components/Navbar";
import Searchbar from "./components/Searchbar";
import Icons from "./components/Icons";
import Hamburger from "./components/Hamburger";
import ResponsiveMenu from "./components/ResponsiveMenu";
import { useProfileStore } from "@/hooks/useProfileStore";

const Header = () => {
  const [burger_class, setBurgerClass] = useState("burger-bar unclicked");

  const [menu_class, setMenuClass] = useState("menu hide");
  const [isMenuClicked, setIsMenuClicked] = useState(false);
  const [profileMenu, setProfileMenu] = useState(false);

  let storedProfile = null;
  if (typeof window !== "undefined") {
    const storedProfileString = localStorage?.getItem("profile");
    storedProfile = JSON.parse(storedProfileString);
  }

  const { storeProfile, profileCreated } = useProfileStore();

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

  useEffect(() => {
    if (typeof window !== "undefined") {
      const data = JSON.parse(localStorage.getItem("auth-user"));
      const { id } = data.state.user;
      if (id) {
        try {
          storeProfile(storedProfile);
        } catch (error) {
          console.log(error);
        }
      } else {
        console.log("User ID not found in local storage");
      }
    }
  }, [profileCreated]);

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
