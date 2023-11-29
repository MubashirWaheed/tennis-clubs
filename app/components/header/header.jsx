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

const Header = () => {
  const router = useRouter();
  const [burger_class, setBurgerClass] = useState("burger-bar unclicked");

  const [menu_class, setMenuClass] = useState("menu hide");
  const [isMenuClicked, setIsMenuClicked] = useState(false);
  const [profileMenu, setProfileMenu] = useState(false);

  const [userProfile, setUserProfile] = useState();

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

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("auth-user"));
    console.log("data: ", data);

    const { id } = data.state.user;
    const fetchUserProfile = async () => {
      try {
        const response = await fetch(`/api/profile?userId=${id}`);
        const data = await response.json();
        setUserProfile(data); // Set user profile in component state
        console.log("DATA FROM GET reponse", data);
      } catch (error) {
        console.error("Error fetching user profile:", error);
      }
    };

    if (id) {
      fetchUserProfile();
    } else {
      console.warn("User ID not found in local storage");
    }
  }, []);

  return (
    <header className="bg-white z-30">
      <div className="z-30 flex items-center max-w-[1200px] mx-auto justify-between p-2 md:p-3">
        <Logo />
        <Navbar />
        <Searchbar />
        <Icons />
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
              setProfileMenu(!profileMenu);
            }}
          />
        </div>
      )}
    </header>
  );
};

export default Header;
