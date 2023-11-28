"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import { signOut } from "next-auth/react";
import axios from "axios";
import useSWR from "swr";
import { fetcher } from "@/lib/utils/fetcher";

const menuList1 = [
  {
    name: "Profile",
  },
];

const ProfileMenu = ({ closeMenu }) => {
  // get the user id and redirect to profile
  // check the logged user and profile id
  // const { data, error, isLoading } = useSWR("/api/club", fetcher);

  const handleProfileClick = () => {
    // redirect user to the profile

    console.log("Clicked Profile");
  };

  const handleSettingsClick = () => {
    console.log("Clicked Settings");
  };

  const handlePaymentClick = () => {
    console.log("payment clicked");
  };

  const handleDeletionClick = () => {
    console.log("delection clicked");
  };
  const handleGroupsClick = () => {
    console.log("groups link clicked ");
  };

  const handleSignOutClick = async () => {
    await signOut();
    window.location.href = "/signin";
  };

  const menuList = [
    { label: "Profile", onClick: handleProfileClick },
    { label: "Settings", onClick: handleSettingsClick },
    { label: "Event Payments", onClick: handlePaymentClick },
    { label: "Clubs,Teams & Groups", onClick: handleGroupsClick },
    { label: "Request For Account Deletion", onClick: handleDeletionClick },
    { label: "Sign Out", onClick: handleSignOutClick },
  ];

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
                <p
                  className="text-[#05192C] f16 fw700 cursor-pointer"
                  onClick={item.onClick}
                >
                  {item.label}
                </p>
                {/* {item === "Sign Out" ? (
                ) : (
                  <p className="text-[#05192C] f16 fw700">{item}</p>
                )} */}

                {/* {menuList.map((item, i) => (
                  <div
                    key={i}
                    className="border-b-[1px] border-opacity-10 border-[#3B2273]  py-[15px] flex justify-between"
                    onClick={item.onClick}
                  >
                    <p className="text-[#05192C] f16 fw700 cursor-pointer">
                      {item.label}
                    </p>
                    <Image
                      src="/dropdown.svg"
                      width={24}
                      height={24}
                      alt="menu item"
                    />
                  </div>
                ))} */}

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

export default React.memo(ProfileMenu);
