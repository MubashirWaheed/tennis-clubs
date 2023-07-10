import homeData from "../../homeData.json";
import Image from "next/image";

const PaidHitters = () => {
  return (
    <section className="py-[100px] w-[full]  bg-[#fafbff]">
      <div className=" h-full w-full flex flex-col items-center justify-center">
        <div className="flex flex-row items-center justify-between w-full">
          <h2 className="text-[#13013c] h2 ">Paid Hitters</h2>

          <button className="text-[#027333] fw700 f16 lh24">View All</button>
        </div>
        <div className="border border-[#828282]/20 mt-[20px] w-full"></div>

        <div className="flex flex-row gap-[14px] mt-[47px]">
          {homeData.paidHitters.map((hitter, index) => (
            <article
              key={index}
              className="py-[21px] px-[24px] bg-[#ffffff] rounded-[10px] shadow-lg flex gap-[38px]"
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
                <Image src="/Group.svg" width={50} height={ 50} alt="Group" className="w-[50px]" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PaidHitters;
