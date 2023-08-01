"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import "./navbar.css";
import { useRouter } from "next/navigation";
const Header = () => {
  const router = useRouter();
  const [burger_class, setBurgerClass] = useState("burger-bar unclicked");
  const [menu_class, setMenuClass] = useState("menu hide");
  const [isMenuClicked, setIsMenuClicked] = useState(false);

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

  const searchHandler = (event) => {
    event.preventDefault();
  };

  return (
    <header className="bg-white z-30">
      <div className="z-30 flex items-center max-w-[1200px] mx-auto justify-between p-2 md:p-3">
        {/* Logo */}
        <Link href="/" className="z-30 cursor-pointer">
          <Image src="/Logo.svg" width={85} height={70} alt="Logo" />
        </Link>

        {/* Navigation Bar */}
        <nav className="hidden lg:inline-flex">
          <ul className={styles.navBar}>
            <Link href="/">
              <li className={styles.navItem}>Home</li>
            </Link>
            <Link href="/matches">
              <li className={styles.navItem}>Explore</li>
            </Link>
            <Link href="/clubs/123">
              <li className={styles.navItem}>Clubs</li>
            </Link>
          </ul>
        </nav>

        {/* Search bar */}
        <form onSubmit={searchHandler} className={styles.searchContainer}>
          <label htmlFor="search">
            <Image
              width={18}
              height={18}
              src="/search-icon.svg"
              alt="Add Icon"
              className={styles.searchIcon}
            />
          </label>
          <input
            id="search"
            type="search"
            className={styles.searchInput}
            placeholder="Search"
          />
        </form>

        {/* Icons */}
        <div className={styles.iconsGroup}>
          <div className={styles.iconWrapper}>
            <Image
              src="/user-icon.svg"
              alt="User Icon"
              width={20}
              height={20}
              className={styles.icon}
            />
          </div>
          <div
            onClick={() => router.push("/clubs/new2")}
            className={styles.iconWrapper}
          >
            <Image
              src="/add-icon.svg"
              alt="Add Icon"
              width={20}
              height={20}
              className={styles.icon}
            />
          </div>
        </div>

        {/* Responsive Menu */}

        {/* Hamburger */}
        <div className="nav z-30 md:hidden px-[2px]">
          <div className="w-[20px] h-[20px] burger-menu" onClick={updateMenu}>
            <div className={burger_class}></div>
            <div className={burger_class}></div>
            <div className={burger_class}></div>
          </div>
        </div>

        {/* Responsive Menu */}
        <nav className={`${menu_class} flex flex-col gap-4 p-5 z-20`}>
          <div className="flex items-center justify-end gap-3">
            <div className={styles.iconWrapper}>
              <Image
                src="/user-icon.svg"
                alt="User Icon"
                width={20}
                height={20}
                className={styles.icon}
              />
            </div>
            <div
              onClick={() => router.push("/clubs/new2")}
              className={styles.iconWrapper}
            >
              <Image
                src="/add-icon.svg"
                alt="Add Icon"
                width={20}
                height={20}
                className={styles.icon}
              />
            </div>
          </div>
          <ul className="w-full h-full flex flex-col gap-7 items-end">
            <Link href="/" onClick={updateMenu}>
              <li className={styles.navItem}>Home</li>
            </Link>
            <Link href="/matches" onClick={updateMenu}>
              <li className={styles.navItem}>Explore</li>
            </Link>
            <Link href="/clubs/123" onClick={updateMenu}>
              <li className={styles.navItem}>Clubs</li>
            </Link>
          </ul>
        </nav>
      </div>
    </header>
  );
};

const styles = {
  navBar: "flex gap-8",
  navItem: "leading-[24px] text-base text-[#3B2273] cursor-pointer",

  searchContainer:
    "z-30 flex items-center gap-2 w-[220px] md:w-[400px] border-b border-[#828282] px-1 py-2",
  searchIcon: "text-[#13013C] w-[18px] h-[18px]",
  searchInput: " md:flex-1 outline-none border-none text-base text-[#13013C]",

  iconsGroup: "hidden lg:flex items-center gap-3",
  iconWrapper:
    "w-[35px] h-[35px] flex items-center justify-center rounded-full bg-[#027333] cursor-pointer",
  icon: "w-[20px] h-[20px]",
};

export default Header;
