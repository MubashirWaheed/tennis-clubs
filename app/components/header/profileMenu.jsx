"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useProfileStore } from "@/hooks/useProfileStore";
import axios from "axios";

const ProfileMenu = ({ closeMenu }) => {
  const { profile, storeProfile } = useProfileStore();

  const { data: session } = useSession();
  const router = useRouter();

  const fetchData = async (userId) => {
    try {
      console.log("reqeust made ");
      const response = await axios.get(`/api/profile?userId=${userId}`);
      console.log("response: ", response);
      storeProfile(response.data);
    } catch (error) {
      console.error("Error fetching profile:", error);
    }
  };

  useEffect(() => {
    console.log("PROFILE IN EFFECT:", profile);
    if (Object.keys(profile).length === 0) {
      // make api request to get the profile
      fetchData(session?.user?.id);
    }
  }, []);

  const { id, firstName, lastName } = profile;

  const handleProfileClick = () => {
    router.push(`/profile/${id}`);
    closeMenu();
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
    // clear profile in local storage
    if (typeof window !== "undefined") {
      localStorage.removeItem("profile");
      localStorage.removeItem("auth-user");
    }
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
          <h3 className="text-darkPurple h4">
            {firstName} {lastName}
            {/* Walter A.Nunez */}
          </h3>
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
