"use client";
import React from "react";
import SearchButton from "@/components/ui/buttons/PrimaryButton";
import CreateButton from "@/components/ui/buttons/SecondaryButton";
const ClaimDialog = ({ onNext }) => {
  const onClick = () => {
    console.log("dummy");
  };
  return (
    <div className="z-40 my-[20px] py-[50px] px-[60px] rounded-lg bg-white w-auto max-w-[600px]">
      <h2 className="h2">Claim or create your tennis profile</h2>
      <div className="text-[#05192C] text-[14px]">
        <p className="my-[15px]">
          If you played in a tournament or league recently, Universal Tennis may
          already have a player profile with your results.
        </p>
        <p className="my-[10px]">
          Based on your name, we did not find any matching profiles in our
          system.
        </p>
        <p className="my-[20px]">
          Feel free to search for an alternate spelling of your name, or create
          a new profile below.
        </p>
      </div>
      <div className="flex flex-col gap-[10px]">
        <SearchButton>Search For A Profile</SearchButton>
        <CreateButton onClick={onNext}>Create A New Profile</CreateButton>
      </div>
    </div>
  );
};

export default ClaimDialog;
