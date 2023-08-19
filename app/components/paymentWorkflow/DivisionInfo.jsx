"use client";
import React, { useState } from "react";
import Overlay from "@/components/ui/Overlay/Overlay";
import Image from "next/image";
import Button from "@/components/ui/buttons/PrimaryButton";
import InputField from "@/components/ui/inputFields/TextField";

const DivisionInfo = () => {
  const [showInviteCard, setShowInviteCard] = useState(false);
  const handleInviteCard = () => {
    setShowInviteCard(!showInviteCard);
  };
  return (
    <Overlay>
      <div className="mt-[10px] flex justify-between  ">
        <div>
          <div className="cursor-pointer rotate-180  rounded-full p-[5px]">
            <Image
              src="/right_ic.svg"
              width={24}
              height={24}
              alt="back arrow"
            />
          </div>
        </div>

        <div>
          <h3 className="text-darkPurple f18 fw700  max-w-[250px]">
            Dobles Mixto - Nivel Initiation & Beginner (MPR Ponderado Hasta
            8.60)
          </h3>
          <p className="text-[#828282] fw700 f14 ">Dora W.Marshall</p>
        </div>
        <div>
          <div className="cursor-pointer bg-[#e7e6eb] rounded-full p-[5px]">
            <Image src="/close.svg" width={20} height={20} alt="close button" />
          </div>
        </div>
      </div>

      {/* Card */}
      <div className="bg-white my-[20px] rounded-lg shadow-md px-[20x] py-[15px]">
        <label className="pl-[15px] text-[#13013C]  text-[14px] fw700 inline-flex items-center">
          <input
            type="checkbox"
            className={`w-[25px] h-[25px] mr-[10px] cursor-pointer text-purple border-1 border-purple rounded-full focus:ring-0`}
            //   checked
            name="test"
            value="test"
          />
          Find your partner
        </label>
        <div className="mt-[20px] border-2 mx-[10px] rounded-md border-[#e7e6eb] relative pl-[20px]">
          <label className="bg-red-200" htmlFor="search">
            <Image
              width={18}
              height={18}
              src="/search-icon.svg"
              alt="Add Icon"
              className={styles.searchIcon}
            />
            <input
              id="search"
              type="search"
              className={styles.searchInput}
              placeholder="Search"
            />
          </label>
        </div>
      </div>

      <div className="bg-white my-[20px] rounded-lg shadow-md px-[20x] py-[15px]">
        <label className="pl-[15px] text-[#13013C]  text-[14px] fw700 inline-flex items-center">
          <input
            type="checkbox"
            className={`w-[25px] h-[25px] mr-[10px] cursor-pointer text-purple border-1 border-purple rounded-full focus:ring-0`}
            //   checked
            name="test"
            value="test"
            onClick={handleInviteCard}
          />
          Invite your Partner to MPR Tennis
        </label>
        {showInviteCard && (
          <div className="px-[20px]">
            <p className="text-grey f14 ">
              Your partner will receive an invitation email to register. They
              must create an account on Universal Tennis using the provided link
              in order to complete their registration. Once they do, they will
              appear on the registered players list next to your name.
            </p>
            <div className="flex flex-col gap-2 mt-[20px]">
              <label>
                <input
                  className="border-[1px] border-[#e7e6eb] w-[260px] rounded-lg"
                  placeholder="Full Name"
                />
              </label>
              <label>
                <input
                  className="border-[1px] border-[#e7e6eb] w-[260px] rounded-lg"
                  placeholder="Enter Email "
                />
              </label>
            </div>
          </div>
        )}
      </div>

      <div className="flex flex-col">
        <Button>Add Partner</Button>
      </div>
    </Overlay>
  );
};

const styles = {
  searchIcon: "absolute top-[10px] left-[7px] text-[#13013C] w-[18px] h-[18px]",
  searchInput:
    " w-[250px]  pl-[10px] md:flex-1 outline-none border-none text-base text-[#13013C]",
};
export default DivisionInfo;
