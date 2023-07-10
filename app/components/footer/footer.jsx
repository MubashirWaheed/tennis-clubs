import footerMenu from "./footerMenu.json";
import phoneIcon from "./assets/call.svg";
import smsIcon from "./assets/sms.svg";
import GirlPotrait from "./assets/girlPotrait.png";
import GroupIcon from "./assets/Groupicons.svg";
import underlineIcon from "./assets/underline.svg";
import Image from "next/image";
import Logo from "../../assets/Logo.svg";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="footer pl-[185px] py-[74px] pr-[350px] border-4 border-t-[#3B2273] relative">
      <div className="flex justify-between items-start ">
        <div className="flex flex-col gap-[17px] items-start">
          <Image src={Logo} alt="MPR Logo" />

          <p className="w-[385px] f16 fw400 lh24 text-[#828282]">
            Another important feature could be profiles of famous tennis players
            from around the world. This could include information on their
            playing style, career highlights, and current ranking.
          </p>

          <Image
            src={GroupIcon}
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
                  src={underlineIcon}
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
              src={underlineIcon}
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
                  src={phoneIcon}
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
                  src={smsIcon}
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
        src={GirlPotrait}
        alt="GirlPotrait"
        className="absolute bottom-0 right-0 top-1"
      />
      <div className="text-center w-full relative">
        <p className="f16 fw400 lh24 text-[#828282] absolute bottom-[-140px] left-[100px] w-full">
          Copyright 2022 <span className="text-[#13013c]">MPR</span> All Rights
          Reserved
        </p>
      </div>
    </footer>
  );
};
export default Footer;
