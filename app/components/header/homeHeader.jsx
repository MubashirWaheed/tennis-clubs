"use client";
import Image from "next/image";
import SignInButton from "@/components/ui/buttons/PrimaryButton";
import JoinButton from "@/components/ui/buttons/SecondaryButton";
import { useRouter } from 'next/navigation'
import Link from "next/link";
import { useState } from "react";
import "./navbar.css";

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

    return (
      <header className=" h-[90px] w-full bg-white box z-30">
        <div className="z-30 h-full flex flex-row gap-[5px] items-center w-full max-w-[1170px] mx-auto justify-around py-3">
          <Link href="/" className="z-30 cursor-pointer">
            <Image src="/Logo.svg" width={85} height={70} alt="Logo" />
          </Link>

          <nav className="hidden md:inline-flex">
            <ul className="flex flex-row md:items-center">
              <Link href="/profile/123">
                <li className="f16 fw400 lh24 text-[#13013C] cursor-pointer mr-7">
                  Players
                </li>
              </Link>
              <Link href="/clubs/123">
                <li className="f16 fw400 lh24 text-[#13013C] cursor-pointer mr-7">
                  Clubs
                </li>
              </Link>
              <Link href="#">
                <li className="f16 fw400 lh24 text-[#13013C] cursor-pointer mr-7">
                  Pro League
                </li>
              </Link>
              <Link href="#">
                <li className="f16 fw400 lh24 text-[#13013C] cursor-pointer mr-7">
                  About Us
                </li>
              </Link>
            </ul>
          </nav>

          <div className="z-30 flex flex-row items-center justify-between gap-[5px] lg:gap-[15px]">
            <SignInButton onClick={() => router.push("/signin")}>
              SignIn
            </SignInButton>
            <JoinButton onClick={() => router.push("/register")}>
              Join
            </JoinButton>
          </div>

          {/* Hamburger */}
          <div className="nav z-30 md:hidden">
            <div className="burger-menu" onClick={updateMenu}>
              <div className={burger_class}></div>
              <div className={burger_class}></div>
              <div className={burger_class}></div>
            </div>
          </div>

          {/* Responsive Menu */}
          <nav className={`${menu_class} z-20 p-2`}>
            <ul className="w-full h-full flex flex-col gap-7 items-end">
              <Link href="/profile/123" onClick={updateMenu}>
                <li className="f16 fw400 lh24 text-[#13013C] cursor-pointer mr-7">
                  Players
                </li>
              </Link>
              <Link href="/clubs/123" onClick={updateMenu}>
                <li className="f16 fw400 lh24 text-[#13013C] cursor-pointer mr-7">
                  Clubs
                </li>
              </Link>
              <Link href="#" onClick={updateMenu}>
                <li className="f16 fw400 lh24 text-[#13013C] cursor-pointer mr-7">
                  Pro League
                </li>
              </Link>
              <Link href="#" onClick={updateMenu}>
                <li className="f16 fw400 lh24 text-[#13013C] cursor-pointer mr-7">
                  About Us
                </li>
              </Link>
            </ul>
          </nav>
        </div>
      </header>
    );
};

export default Header;
