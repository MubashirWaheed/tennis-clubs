"use client";
import Image from "next/image";
import React from "react";
import { signOut } from "next-auth/react";

const menuList = [
  "Profile",
  "Settings",
  "Event Payments",
  "Clubs,Teams & Groups",
  "Request For Account Deletion",
  "Sign Out",
];

const ProfileMenu = ({ closeMenu }) => {
  const handleSignOut = async () => {
    await signOut();
    window.location.href = "/signin";
  };

  return (
    <div className="bg-purple fixed z-40 bg-opacity-50 top-0 right-0 left-0 bottom-0">
      <div className="py-[30px] px-[20px] absolute right-0 bottom-0 bg-white h-full w-[360px] z-50 opacity-[100%]">
        <div className="mt-[10px] flex justify-between  items-center">
          <h3 className="text-darkPurple h4">Walter A.Nunez</h3>
          <div onClick={closeMenu} className="cursor-pointer">
            <Image
              src="/close-pink.svg"
              width={26}
              height={26}
              alt="close button"
            />
          </div>
        </div>

        <div className="mt-[45px]">
          {menuList.map((item, i) => {
            return (
              <div
                key={i}
                className="border-b-[1px] border-opacity-10 border-[#3B2273]  py-[15px] flex justify-between"
              >
                {item === "Sign Out" ? (
                  <p
                    className="text-[#05192C] f16 fw700 cursor-pointer"
                    onClick={handleSignOut}
                  >
                    {item}
                  </p>
                ) : (
                  <p className="text-[#05192C] f16 fw700">{item}</p>
                )}
                <Image
                  src="/dropdown.svg"
                  width={24}
                  height={24}
                  alt="menu item"
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProfileMenu;
