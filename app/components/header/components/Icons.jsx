import Image from "next/image";
import React from "react";

const Icons = ({ setProfileMenu }) => {
  return (
    <div className={styles.iconsGroup}>
      <div
        onClick={() => setProfileMenu((prev) => !prev)}
        className={styles.iconWrapper}
      >
        <Image
          src="/user-icon.svg"
          alt="User Icon"
          width={20}
          height={20}
          className={styles.icon}
        />
      </div>
      <div
        onClick={() => router.push("/clubs/new2")}
        className={styles.iconWrapper}
      >
        <Image
          src="/add-icon.svg"
          alt="Add Icon"
          width={20}
          height={20}
          className={styles.icon}
        />
      </div>
    </div>
  );
};

const styles = {
  iconsGroup: "hidden lg:flex items-center gap-3",
  iconWrapper:
    "w-[35px] h-[35px] flex items-center justify-center rounded-full bg-[#027333] cursor-pointer",
  icon: "w-[20px] h-[20px]",
};

export default Icons;
