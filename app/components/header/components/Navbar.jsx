"use client";
import Link from "next/link";
// import "../header/navbar.css";
import "../navbar.css";
import { useProfileStore } from "@/hooks/useProfileStore";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const { profile } = useProfileStore();
  const router = useRouter();

  // Check if the profile is present and has some properties
  const isProfileValid = profile && Object.keys(profile).length !== 0;

  return (
    <nav className="hidden lg:inline-flex">
      {isProfileValid ? (
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
      ) : (
        <ul className={styles.navBar}>
          <Link href="#">
            <li className={styles.navItem}>Home</li>
          </Link>
          <Link href="#">
            <li className={styles.navItem}>Explore</li>
          </Link>
          <Link href="#">
            <li className={styles.navItem}>Clubs</li>
          </Link>
        </ul>
      )}
    </nav>
  );
};

const styles = {
  navBar: "flex gap-8",
  navItem: "leading-[24px] text-base text-[#3B2273] cursor-pointer",
};
export default Navbar;
