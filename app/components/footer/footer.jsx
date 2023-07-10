import footerMenu from "./footerMenu.json";

import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t-4 h-[503px] border-[#3B2273] relative flex flex-col justify-between">
      <div className="relative -left-[80px] flex items-start justify-between w-full max-w-[1170px] mx-auto">
        <div className="flex flex-col gap-[17px] items-start">
          <Image
            width={114}
            height={96}
            src="/Logo.svg"
            alt="MPR Logo"
            className="w-[114.09px] h-[96px]"
          />

          <p className="w-[385px] f16 fw400 lh24 text-[#828282]">
            Another important feature could be profiles of famous tennis players
            from around the world. This could include information on their
            playing style, career highlights, and current ranking.
          </p>

          <Image
            width={123}
            height={44}
            src="/Groupicons.svg"
            alt="GroupIcon"
            className="w-[123px] h-[44px]"
          />
        </div>
        <>
          {footerMenu?.footerLinks?.map((footerLink, index) => (
            <div className="flex flex-col items-start gap-[40px]" key={index}>
              <div className="flex flex-col gap-[11px]">
                <h1 className="h4">Contact Us</h1>
                <Image
                  width={85}
                  height={3}
                  src="/underline.svg"
                  alt="underlineIcon"
                  className="w-[85px] h-[3px]"
                />
              </div>
              <ul className="flex flex-col items-start gap-[9px]">
                {footerLink?.links?.map((link, index) => (
                  <li
                    className="flex gap-[13px] items-center text-base"
                    key={index}
                  >
                    {link}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </>

        {/* Contact Us */}
        <div className="flex flex-col items-start gap-[40px]">
          <div className="flex flex-col gap-[11px]">
            <h1 className="h4">Contact Us</h1>
            <Image
              width={85}
              height={3}
              src="/underline.svg"
              alt="underlineIcon"
              className="w-[85px] h-[3px]"
            />
          </div>
          <ul className="flex flex-col items-start gap-[9px]">
            <li>
              <Link
                className="flex gap-[13px] items-center text-base cursor-pointer hover:underline"
                href="tel:+8615888033338"
              >
                <Image
                  width={20}
                  height={20}
                  src="/call.svg"
                  alt="Phone Icon"
                  className="w-[20px] h-[20px]"
                />
                <p className="w-[20px] h-[20px]">{"+8615888033338"}</p>
              </Link>
            </li>
            <li>
              <Link
                className="flex gap-[13px] items-center text-base cursor-pointer hover:underline"
                href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=business@fantasysupply.com"
                target="blank"
              >
                <Image
                  width={20}
                  height={20}
                  src="/sms.svg"
                  alt="SMS Icon"
                  className="w-[20px] h-[20px]"
                />
                <p className="w-[20px] h-[20px]">business@fantasysupply.com</p>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <Image
        src="/girlPotrait.png"
        width={1540}
        height={503}
        alt="GirlPotrait"
        className="absolute inset-0"
      />

      <div className=" w-full border-t-2 py-[34px] flex items-center justify-center border-[#828282]">
        <p className="f16 fw400 lh24">
          Copyright 2022 <span className="text-[#3B2273]">MPR</span> All Rights
          Reserved
        </p>
      </div>
    </footer>
  );
};
export default Footer;
