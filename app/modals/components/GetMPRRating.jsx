import Image from "next/image";
import HeaderLine from "../../temp/assets/Header Line.svg";
import ModalClose from "@/components/ui/buttons/ModalClose";
import Next from "@/components/ui/buttons/PrimaryButton";
const GetMPRRating = () => {
  return (
    <article className="px-[42px] py-[27px] bg-[#fff] rounded-[10px] border-t-4 border-t-[#FFBB34] ">
    <div className="flex items-start justify-between">
      <h2 className="h2 text-[#13013c] w-[454px]">
        Get your MPR rating started
      </h2>
      <ModalClose />
    </div>
    <Image
      src={HeaderLine}
      alt="Header Line"
      className="mt-[15px] w-[120px] h-[20px] mb-[15px]"
    />
    <p className="f16 fw400 lh24 text-[#828282] w-[504px] mb-[22px]">
      Take a minute to answer a few quick question to receive your estimated UTR
      Rating. It's the first step to enjoying more level-based play. Your coach
      or club will also be able to match you up with players close to your
      level!
    </p>
    <Next>Next</Next>
  </article>;
  )
};

export default GetMPRRating;
