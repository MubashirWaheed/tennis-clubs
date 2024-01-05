import Button from "@/components/ui/buttons/PrimaryButton";
import AddToButton from "@/components/ui/buttons/SecondaryButton";
import Image from "next/image";
import React from "react";
import { MODAL_TYPES } from "../../constants/constants";
// How do I pass the list of players to the addtodrawmodal?

const FilterBar = ({ openModal, onSubmit }) => {
  return (
    <div className="xl:ml-[30px]">
      {/* Filter Bar  */}
      <div className=" lg:pl-[30px] xl:pr-[50px] bg-white shadow-lg my-[5px]  py-[10px] flex w-full max-w-[1300px] mx-auto">
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
          <Button size="small">Gender</Button>
          <div className="w-full inline-flex items-center place-content-end lg:mr-[20px]">
            {/* on click of button shwo add plyayer to draw modal  */}
            <AddToButton
              onClick={() => openModal(MODAL_TYPES.ADD_TO_DRAW)}
              size="small"
            >
              Add to...
            </AddToButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;

const styles = {
  searchContainer:
    "z-30 flex items-center gap-2 w-[300px] md:w-[400px] md:px-1 py-2",
  searchIcon: "text-[#13013C] w-[18px] h-[18px]",
  searchInput:
    "w-[170px] md:flex-1 outline-none border-none text-base text-[#13013C]",
};
