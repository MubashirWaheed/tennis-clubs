"use client";
import Link from "next/link";
// import "../header/navbar.css";
import "../navbar.css";
import { useProfileStore } from "@/hooks/useProfileStore";

const Navbar = () => {
  const { profile } = useProfileStore();

  return (
    <nav className="hidden lg:inline-flex">
      <ul className={styles.navBar}>
        <Link href="/">
          <li className={styles.navItem}>Home</li>
        </Link>
        <Link href="/matches">
          <li className={styles.navItem}>Explore</li>
        </Link>
        <Link href="/clubs">
          <li className={styles.navItem}>Clubs</li>
        </Link>
      </ul>
    </nav>
  );
};

const styles = {
  navBar: "flex gap-8",
  navItem: "leading-[24px] text-base text-[#3B2273] cursor-pointer",
};
export default Navbar;
