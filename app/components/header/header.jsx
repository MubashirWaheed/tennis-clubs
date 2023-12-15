"use client";
import { useEffect, useState } from "react";
import "./navbar.css";
import { useRouter } from "next/navigation";
import ProfileMenu from "./profileMenu";
import Logo from "./components/Logo";
import Navbar from "./components/Navbar";
import Searchbar from "./components/Searchbar";
import Icons from "./components/Icons";
import Hamburger from "./components/Hamburger";
import ResponsiveMenu from "./components/ResponsiveMenu";
import { useProfileStore } from "@/hooks/useProfileStore";

const Header = () => {
  // const router = useRouter();
  const [burger_class, setBurgerClass] = useState("burger-bar unclicked");

  const [menu_class, setMenuClass] = useState("menu hide");
  const [isMenuClicked, setIsMenuClicked] = useState(false);
  const [profileMenu, setProfileMenu] = useState(false);

  const { fetchProfile } = useProfileStore();

  // toggle burger menu change
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

  // refactor this to seperate component
  /* eslint-enable react-hooks/exhaustive-deps */
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("auth-user"));
    // console.log("userId from the local storage: : ", data);
    const { id } = data.state.user;
    if (id) {
      fetchProfile(id);
    } else {
      console.warn("User ID not found in local storage");
    }
  }, []);
  /* eslint-enable react-hooks/exhaustive-deps */

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
        // <div className={`${profileMenu ? "block" : "hidden"}`}>
        <ProfileMenu
          closeMenu={() => {
            setProfileMenu((prev) => !prev);
          }}
        />
        //  </div>
      )}
    </header>
  );
};

export default Header;

// redirect the user if the profile not created
// Where do I check if the has created the prodile or not
