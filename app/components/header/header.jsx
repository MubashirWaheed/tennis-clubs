import Image from "next/image";

const Header = () => {
    return (
      <header className="bg-white z-30">
        <div className="flex items-center max-w-[1200px] mx-auto justify-between p-3">
          {/* Logo */}
          <div className="h-[60px] w-[60px]">
            <Image
              src="/Logo.svg"
              width={60}
              height={60}
              alt="MPR Logo"
              className="w-full h-full"
            />
          </div>

          {/* Navigation Bar */}
          <nav>
            <ul className={styles.navBar}>
              <li className={styles.navItem}>Home</li>
              <li className={styles.navItem}>Explore</li>
              <li className={styles.navItem}>Messages</li>
            </ul>
          </nav>

          {/* Search bar */}
          <form className={styles.searchContainer}>
            <Image
              width={18}
              height={18}
              src="/search-icon.svg"
              alt="Add Icon"
              className={styles.searchIcon}
            />
            <input
              type="text"
              className={styles.searchInput}
              placeholder="Search"
            />
          </form>

          {/* Icons */}
          <div className={styles.iconsGroup}>
            <div className={styles.iconWrapper}>
              <Image
                src="/user-icon.svg"
                alt="User Icon"
                width={20}
                height={20}
                className={styles.icon}
              />
            </div>
            <div className={styles.iconWrapper}>
              <Image
                src="/add-icon.svg"
                alt="Add Icon"
                width={20}
                height={20}
                className={styles.icon}
              />
            </div>
          </div>
        </div>
      </header>
    );
}

const styles = {
    navBar: "flex gap-8",
    navItem: "leading-[24px] text-base text-[#3B2273] cursor-pointer",

    searchContainer: "flex items-center gap-2 w-[400px] border-b border-[#828282] px-1 py-2",
    searchIcon: "text-[#13013C] w-[18px] h-[18px] object-contain",
    searchInput: "flex-1 outline-none border-none text-base text-[#13013C]",

    iconsGroup: "flex items-center gap-3",
    iconWrapper: "w-[35px] h-[35px] flex items-center justify-center rounded-full bg-[#027333] cursor-pointer",
    icon: "w-[20px] h-[20px]"
}

export default Header;