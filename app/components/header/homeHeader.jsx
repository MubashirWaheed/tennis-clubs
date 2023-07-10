"use client";
import Image from "next/image";
import SignInButton from "@/components/ui/buttons/PrimaryButton";
import JoinButton from "@/components/ui/buttons/SecondaryButton";
import { useRouter } from 'next/navigation'
import Link from "next/link";

const Header = () => {
    const router = useRouter();
    return (
      <header className="h-[90px] w-full bg-white box z-30">
        <div className="flex flex-row items-center w-[80%] mx-auto justify-between py-3">
          <Link href="/" className="cursor-pointer flex-1">
            <Image
              src="/Logo.svg"
              width={85}
              height={70}
              alt="Logo"
              className="w-[85px] h-[70px]"
            />
          </Link>

          <nav>
            <ul className="flex flex-row items-center">
              <Link href="/profile/123">
                <li className="f16 fw400 lh24 text-[#13013C] cursor-pointer mr-7">
                  Players
                </li>
              </Link>
              <Link href="/clubs/123">
              <li className="f16 fw400 lh24 text-[#13013C] cursor-pointer mr-7">
                Clubs
              </li>
            </Link>
              <Link href="#">
              <li className="f16 fw400 lh24 text-[#13013C] cursor-pointer mr-7">
                Pro League
            </li>
          </Link>
              <Link href="#">
              <li className="f16 fw400 lh24 text-[#13013C] cursor-pointer mr-7">
                About Us
          </li>
        </Link>
            </ul>
          </nav>

          <div className="flex flex-row items-center justify-between gap-[15px]">
            <SignInButton onClick={() => router.push("/signin")}>
              SignIn
            </SignInButton>
            <JoinButton onClick={() => router.push("/register")}>
              Join
            </JoinButton>
          </div>
        </div>
      </header>
    );
};

export default Header;
