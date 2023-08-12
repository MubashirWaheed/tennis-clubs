"use client";
import Image from "next/image";
import DrawCard from "./components/DrawCard";
import Button from "@/components/ui/buttons/PrimaryButton";
import InputField from "@/components/ui/inputFields/TextField";
import AutoComplete from "@/components/ui/inputFields/AutoComplete";
import TextArea from "@/components/ui/inputFields/TextArea";

import { useEffect, useState } from "react";
import DrawMenu from "./components/DrawMenu";
import Modal from "@/components/ui/Modal/Modal";

const CreateDraw = ({ children }) => {
  const [showDrawMenu, setShowDrawMenu] = useState(false);
  const [showMenu, setShowMenu] = useState(true);
  const [publishModal, setPublishModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [messageModal, setMessageModal] = useState(false);
  const [playerSorting, setPlayerSorting] = useState(false);
  const [width, setWidth] = useState();

  const handlePublishModal = () => {
    setPublishModal(!publishModal);
  };

  const handleEditModal = () => setEditModal(!editModal);
  const handleMessageModal = () => setMessageModal(!messageModal);

  const handleClick = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [setWidth]);

  return (
    <>
      <div className="w-full  bg-[#FAFBFF]">
        <div className="flex flex-wrap justify-center lg:justify-between items-center w-full max-w-[1170px] mx-auto">
          <div>
            <div className="py-[5px] flex flex-col md:flex-row items-center w-full max-w-[1170px] mx-auto">
              <p className="f20 text-darkPurple fw700">
                Level Based Play Singles Main
              </p>
              <div className="flex gap-2 ml-[10px]">
                <p
                  onClick={handleEditModal}
                  className="cursor-pointer text-green fw700"
                >
                  • Edit
                </p>
                <p className="text-green fw700">• Print</p>
                <p
                  onClick={handleMessageModal}
                  className="cursor-pointer text-green fw700"
                >
                  • Message Players
                </p>
              </div>
            </div>
            <p className="text-grey fw700 text-center">
              Singles, Round Robin, Two Sets w/ Match Tiebreaker, 14 Players, Al
              UTR, All Ages.
            </p>
          </div>
          <div className="flex gap-4  items-center justify-center">
            <Button size="small">Save</Button>
            <Button onClick={() => setPublishModal(!publishModal)} size="small">
              Publish
            </Button>
          </div>
        </div>
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
        {/* Sorting */}
        <div className={` flex max-w-[1170px] mx-auto w-full my-[30px]`}>
          <div
            className={` ${width > 640 ? "block" : "hidden"} grow basis-1/3`}
          >
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
                        San Francisco, CA •
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
                        San Francisco, CA •
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
                        San Francisco, CA •
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

        {/* Draw Menu */}
        <div>
          <DrawMenu
            showDrawMenu={showDrawMenu}
            setShowDrawMenu={setShowDrawMenu}
          />
        </div>
      </section>

      {/* MODLAS */}
      <section>
        {/* Modal for the Publish */}
        <div className={` ${publishModal ? "block" : "hidden "}`}>
          <Modal heading="Publish Draws" closeModal={handlePublishModal}>
            <div className="flex flex-col">
              <p className="text-grey my-[15px]">
                Select draws to publish and display publicly on the event
                profile page. If you unselect a draw and click Publish, that
                draw will be unpublished from the event profile page.
              </p>
              <div className="flex flex-col gap-2 my-[20px]">
                <label class="text-[#05192C] fw700 inline-flex items-center">
                  <input
                    type="checkbox"
                    class="w-[25px] h-[25px] mr-[10px] cursor-pointer text-purple border-1 border-purple rounded-md focus:ring-0"
                    //   checked
                  />
                  Doubles
                </label>
                <label class="text-[#05192C] fw700 inline-flex items-center ">
                  <input
                    type="checkbox"
                    class="w-[25px] h-[25px] mr-[10px]  text-purple  cursor-pointer border-1 border-purple rounded-md focus:ring-0"
                    //   checked
                  />
                  Levels Based Play Singles
                </label>
              </div>
              <div>
                <Button size="small">Publish</Button>
              </div>
            </div>
          </Modal>
        </div>

        {/* Modal for the Edit players */}
        <div className={`${editModal ? "block" : "hidden"}`}>
          <Modal heading="Edit Draws" closeModal={handleEditModal}>
            <div className="my-[20px] flex flex-col gap-2">
              <InputField label="Draw Name" />
              <AutoComplete label="Draw Size" />
            </div>
            <Button size="small">Update</Button>
          </Modal>
        </div>

        {/* Modal to message players  */}
        <div className={`${messageModal ? "block" : "hidden"}`}>
          <Modal
            heading="Message Players In Doubles Draw"
            closeModal={handleMessageModal}
          >
            <div className="flex flex-col gap-2">
              <p className="f14 fw700 text-darkPurple">
                Send an email update to all players registered in this draw
              </p>
              <TextArea label="Message" />
              <div className="mt-[15px]">
                <Button size="small">Send Message</Button>
              </div>
            </div>
          </Modal>
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
