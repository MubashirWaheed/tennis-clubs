import Image from "next/image";
import React from "react";

const DrawSearchbar = () => {
  return (
    <div className="xl:ml-[30px]">
      <div className="lg:pl-[30px] xl:pr-[50px] bg-white shadow-lg my-[5px] py-[10px] flex w-full max-w-[1300px] mx-auto">
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
  );
};

export default DrawSearchbar;

const styles = {
  searchContainer:
    "z-30 flex items-center gap-2 w-[300px] md:w-[400px] px-1 py-2",
  searchIcon: "text-[#13013C] w-[18px] h-[18px]",
  searchInput:
    "w-[170px] md:flex-1 outline-none border-none text-base text-[#13013C]",

  iconsGroup: "hidden lg:flex items-center gap-3",
};
