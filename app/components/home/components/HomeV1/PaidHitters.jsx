import homeData from "../../homeData.json";
import Image from "next/image";
import ViewAll from "@/components/ui/buttons/PrimaryButton";
import backdropImg from "../../assets/tenniscourt.png";
import Group from "../../assets/Group.svg";
import whiteHeaderLine from "../../assets/whiteHeaderLine.svg";

const PaidHitters = () => {
  return (
    <section className="h-[700px] w-[full] relative bg-white">
      <Image
        src={backdropImg}
        alt="Background Image"
        className="absolute w-full h-full object-cover -z-10 pointer-events-none"
      />

      <div className="bg-[#3B2273]/70 h-full w-full flex flex-col gap-[50px] items-center justify-center">
        <div className="flex flex-col items-center gap-[14px]">
          <h2 className="text-[#ffffff] h2 ">Paid Hitters</h2>
          <Image
            src={whiteHeaderLine}
            alt="whiteHeaderLine"
            className="w-[full]"
          />
        </div>

        <div className="flex flex-row gap-[14px]">
          {homeData.paidHitters.map((hitter, index) => (
            <article
              key={index}
              className="py-[24px] px-[26px] bg-[#ffffff] rounded-[10px] shadow-lg flex gap-[38px]"
            >
              <div className="flex flex-col ">
                <h5 className="f18 fw700 lh30 font-sans text-[#13013c]">
                  {hitter.playerName}
                </h5>
                <div className="w-[125px] h-[60px]">
                  <p className="f14 fw400 lh20 font-sans text-[#828282]">
                    {hitter.matchType}
                  </p>
                  <p className="f14 fw400 lh20 font-sans text-[#828282]">
                    {hitter.location}
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-[1px]">
                <Image src={Group} alt="Group" className="w-[50px]" />
              </div>
            </article>
          ))}
        </div>

        <ViewAll>View All</ViewAll>
      </div>
    </section>
  );
};

export default PaidHitters;
