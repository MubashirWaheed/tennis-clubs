"use client";
import Image from "next/image";

const Searchbar = () => {
  const searchHandler = (event) => {
    event.preventDefault();
  };
  return (
    <form onSubmit={searchHandler} className={styles.searchContainer}>
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
  );
};

const styles = {
  searchContainer:
    "flex items-center gap-2 w-[220px] md:w-[400px] border-b border-[#828282] px-1 py-2",
  searchIcon: "text-[#13013C] w-[18px] h-[18px]",
  searchInput:
    " w-[200px] md:flex-1 outline-none border-none text-base text-[#13013C]",

  iconWrapper:
    "w-[35px] h-[35px] flex items-center justify-center rounded-full bg-[#027333] cursor-pointer",
  icon: "w-[20px] h-[20px]",
};

export default Searchbar;
