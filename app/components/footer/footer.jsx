import footerMenu from "./footerMenu.json";
import phoneIcon from "./assets/call.svg";
import smsIcon from "./assets/sms.svg";
import underlineIcon from "./assets/underline.svg";
import Image from "next/image";
import Logo from "../../assets/Logo.svg";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="flex w-[70%] mx-auto justify-around items-start">
                <div className="flex flex-col gap-[17px] items-start">
                    <Image src={Logo} alt="MPR Logo"/>

                    <p className="w-[385px]">Another important feature could be profiles of famous tennis players from around the world. This could include information on their playing style, career highlights, and current ranking.</p>

                    <div className="flex gap-[20px] items-center">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
                <>
                    {footerMenu?.footerLinks?.map((footerLink, index) => (
                        <div className="flex flex-col items-start gap-[53px]" key={index}>
                            <div className="flex flex-col gap-[11px]">
                                <h1 className="h4">Contact Us</h1>
                                <Image src={underlineIcon} alt="underlineIcon" className="w-[85px] h-[3px]" />
                            </div>
                            <ul className="flex flex-col items-start gap-[9px]">
                                {footerLink?.links?.map((link, index) => (
                                    <li className="flex gap-[13px] items-center text-base" key={index}>{link}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </>

                {/* Contact Us */}
                <div className="flex flex-col items-start gap-[53px]">
                    <div className="flex flex-col gap-[11px]">
                        <h1 className="h4">Contact Us</h1>
                        <Image src={underlineIcon} alt="underlineIcon" className="w-[85px] h-[3px]" />
                    </div>
                    <ul className="flex flex-col items-start gap-[9px]">
                        <li>
                            <Link className="flex gap-[13px] items-center text-base cursor-pointer hover:underline" href="tel:+8615888033338"><Image src={phoneIcon} alt="Phone Icon" className="w-[20px] h-[20px]"/><p className="w-[20px] h-[20px]">{"+8615888033338"}</p></Link>
                        </li>
                        <li>
                            <Link className="flex gap-[13px] items-center text-base cursor-pointer hover:underline" href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=business@fantasysupply.com" target="blank"><Image src={smsIcon} alt="SMS Icon" className="w-[20px] h-[20px]"/><p className="w-[20px] h-[20px]">business@fantasysupply.com</p></Link>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}
const styles = {

}
export default Footer;