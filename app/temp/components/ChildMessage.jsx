import Image from "next/image";
import HeaderLine from "../../temp/assets/Header Line.svg";
import Point from "./Point";
import ModalClose from "@/components/ui/buttons/ModalClose";

const ChildMessage = () => {
  const points = [
    `Please fill out the profile information as your child, not you
    (childs name, location, etc.)`,
    `If you are registering more than one child, you must create a
  separate account for each`,
  ];

  return (
    <article className="px-[42px] py-[27px] bg-[#fff] rounded-[10px] border-t-4 border-t-[#FFBB34] ">
      <div className="flex items-start justify-between">
        <h2 className="h2 text-[#13013c] w-[454px]">
          For parents signing up for a child
        </h2>
        <ModalClose />
      </div>
      <Image
        src={HeaderLine}
        alt="Header Line"
        className="mt-[15px] w-[120px] h-[20px]"
      />
      <div className="w-[504px] flex flex-col gap-[15px] mt-[20px]">
        {points.map((point, index) => (
          <div key={index} className="flex items-start">
            <Point />
            <p className="flex items-start f16 fw400 lh24 text-[#828282]">
              {point}
            </p>
          </div>
        ))}
        <div className="flex items-start">
          <Point />
          <p className="flex items-center gap-[5px] f16 fw400 lh24 text-[#828282]">
            Questions? Contact our{" "}
            <span className="text-[#3B2273] f16 fw400 lh24">
              {" "}
              Support Team.
            </span>
          </p>
        </div>
      </div>
    </article>
  );
};

export default ChildMessage;
