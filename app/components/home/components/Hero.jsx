import Image from "next/image";
import Ball from "../../../assets/Ball.svg";
import HorizontalBat from "../../../assets/HorizontalBat.svg";
import VerticalBat from "../../../assets/VerticalBat.svg";
import FindPlay from "@/components/ui/buttons/PrimaryButton";

const Hero = () => {
  return (
    <section className="relative bg-[#3B2273]">
      <div className="px-2 lg:px-0 w-full max-w-[1170px] mx-auto flex justify-between py-[86px]">
        {/* Hero Code Here */}
        <div className="flex justify-between items-center">
          <h2 className="text-[#fff] h2">My Ratings</h2>
          <div className="px-14">
            <p className="text-[#FFBB34] f16 fw700 lh24">MPR</p>
            <h2 className="text-[#fff] h2">1.00 - 3.00</h2>
            <p className="text-[#fff] f16 fw400 lh24 opacity-70">
              Reliab.: Estimated
            </p>
          </div>
          <div>
            <FindPlay>Find Play</FindPlay>
          </div>
        </div>
        <div className="flex flex-col gap-[16px]">
          <p className="text-[#fff] f24 fw700 lh24">
            WHAT ARE YOU LOOKING FOR?
          </p>
          <nav>
            <ul className="f16 fw400 lh24 text-[#fff] ">
              <li className="text-right list-disc list-inside">
                Universal Tennis Flex Leagues{" "}
              </li>
              <li className="text-right list-disc list-inside">
                {" "}
                UTR Pro Tennis Tour
              </li>
              <li className="text-right list-disc list-inside">
                Junior National Pathway
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <Image
        src={Ball}
        alt=""
        className="absolute bottom-0 right-0 w-[100px] h-[100px] object-contain"
      />
      <Image src={HorizontalBat} alt="" className="absolute left-0 bottom-2" />
      <Image src={VerticalBat} alt="" className="absolute left-0 bottom-0" />
    </section>
  );
};

export default Hero;
