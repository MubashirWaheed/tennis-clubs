import footerMenu from "./footerMenu.json";
import phoneIcon from "./assets/call.svg";
import smsIcon from "./assets/sms.svg";
import underlineIcon from "./assets/underline.svg";
import GirlPotrait from "./assets/girlPotrait.png";
import Image from "next/image";
import Logo from "../../assets/Logo.svg";

const Footer = () => {
    return (
        <footer>
            <div className="flex flex-col gap-[17px] items-start">
                <Image src={Logo} alt="MPR Logo"/>

                <p className="w-[385px]">Another important feature could be profiles of famous tennis players from around the world. This could include information on their playing style, career highlights, and current ranking.</p>

                <div className="flex ">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>

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

            {/* Contact Us */}
            <div className="flex flex-col items-start gap-[53px]">
                <div className="flex flex-col gap-[11px]">
                    <h1 className="h4">Contact Us</h1>
                    <Image src={underlineIcon} alt="underlineIcon" className="w-[85px] h-[3px]" />
                </div>
                <ul className="flex flex-col items-start gap-[9px]">
                    <li className="flex gap-[13px] items-center text-base"><span className="w-[20px] h-[20px]">{phoneIcon}</span>+86 15888033338</li>
                    <li className="flex gap-[13px] items-center text-base"><span className="w-[20px] h-[20px]">{smsIcon}</span>business@fantasysupply.com</li>
                </ul>
            </div>
        </footer>
    )
}
const styles = {

}
export default Footer;