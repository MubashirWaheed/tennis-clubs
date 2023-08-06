"use client";
import Image from "next/image";
import DrawCard from "./components/DrawCard";

import { useState } from "react";
const CreateDraw = () => {
  const [showMenu, setShowMenu] = useState(true);
  const handleClick = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <div className="bg-[#FAFBFF]">
        <div className="flex flex-wrap justify-center lg:justify-between items-center w-full max-w-[1170px] mx-auto">
          <div>
            <div className="py-[5px] flex flex-col md:flex-row items-center w-full max-w-[1170px] mx-auto">
              <p className="f20 text-darkPurple fw700">
                Level Based Play Singles Main
              </p>
              <div className="flex gap-2">
                <p className="text-green fw700">• Edit</p>
                <p className="text-green fw700">• Print</p>
                <p className="text-green fw700">• Message Players</p>
              </div>
            </div>
            <p className="text-grey fw700 text-center">
              Singles, Round Robin, Two Sets w/ Match Tiebreaker, 14 Players, Al
              UTR, All Ages.
            </p>
          </div>
          <div className="flex gap-4  items-center justify-center">
            <Button size="small">Save</Button>
            <Button size="small">Publish</Button>
          </div>
        </div>
        <div>{children}</div>
      </div>
      <section className="bg-[#FAFBFF] w-full flex justify-center flex-col">
        <div className="xl:ml-[30px]">
          <div className="lg:pl-[30px] xl:pr-[50px] bg-white shadow-lg my-[5px]  py-[10px] flex w-full max-w-[1300px] mx-auto">
            <form className={styles.searchContainer}>
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
            <div className="flex items-center w-full">
              <p className="fw700 text-darkPurple text-center grow basis-[1/3] xl:ml-[85px] md:ml-[10px]  lg:ml-[60px]">
                Round 1
              </p>
              <p className=" grow basis-[1/3] text-center fw700 text-darkPurple">
                Round 2
              </p>
              <Image
                src="/right_ic.svg"
                width={20}
                height={20}
                alt="right arrow icon"
              />
            </div>
          </div>
        </div>
        <div className="flex max-w-[1170px] mx-auto w-full my-[30px]">
          <div className="grow basis-1/3 ">
            <div className="w-full bg-purple flex p-[20px] items-center justify-between">
              <p className="text-white">Players(13)</p>
              <p className="text-white flex items-center gap-2">
                <Image
                  src="/refreshicon.svg"
                  width={20}
                  height={20}
                  alt="refresh icon"
                />
                Auto-Fill
              </p>
            </div>
            <div className="py-[10px] bg-white flex items-center justify-between px-[20px]">
              <div className="flex gap-2 items-center">
                <label class="inline-flex items-center">
                  <input
                    type="checkbox"
                    class="w-5 h-5 cursor-pointer text-purple border-1 border-purple rounded-md focus:ring-0"
                    //   checked
                  />
                  <span class="ml-[7px] text-grey">All</span>
                </label>
              </div>
              <p className="text-grey f14 fw700">Sort By MPR (High To Low)</p>
            </div>
            {/* dropdown */}
            <div className="py-[10px] bg-[#E8EFF7] flex items-center justify-between px-[20px]">
              <div className="flex gap-2 items-center">
                <label class="inline-flex items-center">
                  <input
                    type="checkbox"
                    class="w-5 h-5 cursor-pointer text-purple border-1 border-purple rounded-md focus:ring-0"
                    //   checked
                  />
                  <span class="ml-[7px] text-grey">Not Placed(13)</span>
                </label>
              </div>
              <span
                onClick={handleClick}
                className="px-[5px] py-[7px] cursor-pointer"
              >
                <Image
                  src="/rename.svg"
                  width={20}
                  height={20}
                  alt="open filter"
                />
              </span>
            </div>
            <div
              className={`${
                showMenu ? "max-h-full" : "max-h-0 invisible"
              } z-50 bg-white  text-sm text-center  transition-all duration-500 ease-in-out overflow-hidden`}
            >
              {/* players in the filter */}
              <div className="border-b border-1 border-purple px-[20px]">
                <div className="flex gap-2 items-center py-[20px]">
                  <label class="inline-flex items-center">
                    <input
                      type="checkbox"
                      class="w-5 h-5 cursor-pointer text-purple border-1 border-purple rounded-md focus:ring-0"
                      //   checked
                    />
                  </label>
                  <div className="flex justify-between w-full">
                    <div className="flex flex-col items-start ">
                      <p className="text-darkPurple">Shantanu Dhaka</p>
                      <p className="text-grey">
                        San Francisco, CA •{" "}
                        <span className="text-red-600">Not Placed </span>
                      </p>
                    </div>

                    <Image
                      className="cursor-pointer"
                      src="/more_ic.svg"
                      width={25}
                      height={25}
                      alt="more"
                    />
                  </div>
                </div>
              </div>

              <div className="border-b border-1 border-purple px-[20px]">
                <div className="flex gap-2 items-center py-[20px]">
                  <label class="inline-flex items-center">
                    <input
                      type="checkbox"
                      class="w-5 h-5 cursor-pointer text-purple border-1 border-purple rounded-md focus:ring-0"
                      //   checked
                    />
                  </label>
                  <div className="flex justify-between w-full">
                    <div className="flex flex-col items-start ">
                      <p className="text-darkPurple">Shantanu Dhaka</p>
                      <p className="text-grey">
                        San Francisco, CA •{" "}
                        <span className="text-red-600">Not Placed </span>
                      </p>
                    </div>
                    <Image
                      className="cursor-pointer"
                      src="/more_ic.svg"
                      width={25}
                      height={25}
                      alt="more"
                    />
                  </div>
                </div>
              </div>

              <div className="border-b border-1 border-purple px-[20px]">
                <div className="flex gap-2 items-center py-[20px]">
                  <label class="inline-flex items-center">
                    <input
                      type="checkbox"
                      class="w-5 h-5 cursor-pointer text-purple border-1 border-purple rounded-md focus:ring-0"
                      //   checked
                    />
                  </label>
                  <div className="flex justify-between w-full">
                    <div className="flex flex-col items-start ">
                      <p className="text-darkPurple">Shantanu Dhaka</p>
                      <p className="text-grey">
                        San Francisco, CA •{" "}
                        <span className="text-red-600">Not Placed </span>
                      </p>
                    </div>
                    <Image
                      className="cursor-pointer"
                      src="/more_ic.svg"
                      width={25}
                      height={25}
                      alt="more"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grow basis-1/3 bg-[#FAFBFF]">
            <div className="flex flex-col text-center my-[10px]">
              <p className="text-grey fw700 underline lh24">Set Location</p>
              <p className="text-grey fw700 underline lh24">Set Date & Time</p>
            </div>
            <DrawCard />
            <DrawCard />
          </div>
          <div className="grow basis-1/3 bg-[#FAFBFF]">
            <div className="flex flex-col text-center my-[10px]">
              <p className="text-grey fw700 underline lh24">Set Location</p>
              <p className="text-grey fw700 underline lh24">Set Date & Time</p>
            </div>
            <div>
              <DrawCard />
              <DrawCard />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default CreateDraw;

const styles = {
  searchContainer:
    "z-30 flex items-center gap-2 w-[300px] md:w-[400px] px-1 py-2",
  searchIcon: "text-[#13013C] w-[18px] h-[18px]",
  searchInput:
    "w-[170px] md:flex-1 outline-none border-none text-base text-[#13013C]",

  iconsGroup: "hidden lg:flex items-center gap-3",
};
