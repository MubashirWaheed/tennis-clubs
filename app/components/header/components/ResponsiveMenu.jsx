"use client";
import { useProfileStore } from "@/hooks/useProfileStore";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const menuItems = [
  { href: "/", label: "Home" },
  { href: "/matches", label: "Explore" },
  { href: "/clubs", label: "Clubs" },
];

const ResponsiveMenu = ({
  updateMenu,
  setProfileMenu,
  profileMenu,
  menu_class,
}) => {
  const { profile } = useProfileStore();
  const isProfileValid = profile && Object.keys(profile).length !== 0;
  console.log("PROFILE IN MENU", profile);
  console.log("isProfileValid: ", isProfileValid);
  return (
    <nav className={`${menu_class}  flex flex-col gap-4 p-5 z-40`}>
      <div className="flex items-center justify-end gap-3">
        <div
          onClick={() => {
            setProfileMenu(!profileMenu);
            updateMenu();
          }}
          className={styles.iconWrapper}
        >
          <Image
            src="/user-icon.svg"
            alt="User Icon"
            width={20}
            height={20}
            className={styles.icon}
          />
        </div>
        <div
          onClick={() => router.push("/clubs/new1")}
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
        {menuItems.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            onClick={() => {
              console.log("link clicked");
              updateMenu();
              // }
            }}
          >
            <li className={styles.navItem}>{item.label}</li>
          </Link>
        ))}
      </ul>
    </nav>
  );
};

const styles = {
  navItem: "leading-[24px] text-base text-[#3B2273] cursor-pointer",
  iconWrapper:
    "w-[35px] h-[35px] flex items-center justify-center rounded-full bg-[#027333] cursor-pointer",
  icon: "w-[20px] h-[20px]",
};

export default ResponsiveMenu;
