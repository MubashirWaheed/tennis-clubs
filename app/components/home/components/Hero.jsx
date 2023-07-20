import Image from "next/image";
import FindPlay from "@/components/ui/buttons/PrimaryButton";
import { useRouter } from "next/navigation";
const Hero = () => {
  const router = useRouter();
  return (
    <section className="relative bg-[#3B2273]">
      <div className="px-2 lg:px-0 w-full max-w-[1170px] mx-auto flex flex-col gap-3 lg:gap-0 lg:flex-row justify-between py-[86px]">
        {/* Hero Code Here */}
        <div className="flex flex-col gap-3 lg:gap-0 lg:flex-row justify-between items-center">
          <h2 className="text-[#fff] h2">My Ratings</h2>

          <div className="px-14 flex flex-col items-center lg:items-start">
            <p className="text-[#FFBB34] f16 fw700 lh24">MPR</p>
            <h2 className="text-white h2">1.00 - 3.00</h2>
            <p className="text-white f16 fw400 lh24 opacity-70">
              Reliab.: Estimated
            </p>
          </div>

          <FindPlay onClick={() => router.push("/matches")}>Find Play</FindPlay>
        </div>

        <div className="flex flex-col items-center lg:items-end gap-[16px]">
          <p className="text-white f24 fw700 lh24 text-center lg:text-left">
            WHAT ARE YOU LOOKING FOR?
          </p>
          <nav>
            <ul className="f16 fw400 lh24 text-white ">
              <li className="text-center lg:text-right list-disc list-inside">
                Universal Tennis Flex Leagues{" "}
              </li>
              <li className="text-center lg:text-right list-disc list-inside">
                {" "}
                UTR Pro Tennis Tour
              </li>
              <li className="text-center lg:text-right list-disc list-inside">
                Junior National Pathway
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <Image
        src="/Ball.svg"
        width={100}
        height={100}
        alt="Ball Image"
        className="absolute bottom-0 right-0 object-contain"
      />
      <Image
        src="/HorizontalBat.svg"
        height={100}
        width={100}
        alt=""
        className="absolute left-0 bottom-2"
      />
      <Image
        src="/VerticalBat.svg"
        height={50}
        width={50}
        alt=""
        className="absolute left-0 bottom-0"
      />
    </section>
  );
};

export default Hero;
