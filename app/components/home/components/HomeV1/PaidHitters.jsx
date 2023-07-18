import homeData from "../../homeData.json";
import Image from "next/image";
import ViewAll from "@/components/ui/buttons/PrimaryButton";

const PaidHitters = () => {
  return (
    <section className="w-[full] relative">
      <Image
        width={1540}
        height={700}
        src="/tenniscourt.png"
        alt="Background Image"
        className="absolute w-full h-full object-cover -z-10"
      />

      <div className="bg-[#3B2273]/80 h-full w-full">
        <div className="py-[20px] md:py-[40px] lg:py-[90px] px-2 lg:px-0 w-full max-w-[1170px] mx-auto flex flex-col gap-[50px] items-center justify-center">
          <div className="flex flex-col items-center gap-[14px]">
            <h2 className="text-[#ffffff] h2 ">Paid Hitters</h2>
            <Image
              width={119}
              height={20}
              src="/whiteHeaderLine.svg"
              alt="whiteHeaderLine"
              className="w-[119px] h-[20px]"
            />
          </div>

          <div className="flex flex-col lg:flex-row gap-[14px]">
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
                  <Image
                    width={50}
                    height={50}
                    src="/Group.svg"
                    alt="Group"
                    className="w-[50px]"
                  />
                </div>
              </article>
            ))}
          </div>

          <ViewAll>View All</ViewAll>
        </div>
      </div>
    </section>
  );
};

export default PaidHitters;
