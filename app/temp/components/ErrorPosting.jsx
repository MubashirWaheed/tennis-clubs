import Image from "next/image";
import HeaderLine from "../../temp/assets/Header Line.svg";
import support from "../../temp/assets/support.svg";
import Gotit from "@/components/ui/buttons/PrimaryButton";

const ErrorPosting = () => {
  return (
    <article className="px-[57px] py-[44px] bg-[#fff] rounded-[10px] border-t-4 border-t-[#FFBB34] ">
      <div className="flex flex-col items-center">
        <Image
          src={support}
          alt="support"
          className="mt-[15px] w-[102px] h-[130px] mb-[10px]"
        />
        <h3 className="h3 text-[#13013c] w-[532px] text-center">
          Error posting onboarding data
        </h3>
        <Image
          src={HeaderLine}
          alt="Header Line"
          className="mt-[15px] w-[120px] h-[20px]"
        />
        <p className="f16 fw400 lh24 text-[#828282] w-[504px] mb-[20px] mt-[20px] text-center">
          There was an issue processing the request. Please try again or contact
          our Support Team for assistance.
        </p>
        <Gotit>Got It</Gotit>
      </div>
    </article>
  );
};

export default ErrorPosting;
