import homeData from "../../homeData.json";
import Image from "next/image";
import ViewAll from "@/components/ui/buttons/PrimaryButton";

const HighSchoolsNearYou = () => {
  const schoolLogos = {
    0: "/School1.png",
    1: "/School2.png",
    2: "/School3.png",
  };
  return (
    <section className="w-[full]">
      <div className="py-[20px] md:py-[40px] lg:py-[90px] px-2 lg:px-0 w-full max-w-[1170px] mx-auto flex flex-col gap-[50px] items-center justify-center">
        <div className="flex flex-col items-center gap-[15px]">
          <h2 className="text-[#13013C] h2 ">High Schools Near You</h2>
          <Image
            width={119}
            height={20}
            src="/blueHeaderLine.svg"
            alt="blueHeaderLine"
            className="w-[119px] h-[20px]"
          />
        </div>

        <div className="flex flex-col lg:flex-row gap-[14px]">
          {homeData.HighSchoolsNearYou.map((school, index) => (
            <article
              key={index}
              className="p-[25px] bg-[#fff] rounded-[10px] shadow-lg"
            >
              <div className="flex items-center gap-[61px] mb-[13px]">
                <div className="flex flex-col gap-[6px]">
                  <p className="f28 text-[#13013c] w-[200px] font-sans fw700 lh28">
                    {school.schoolName}
                  </p>
                  <p className="text-[#828282] f14 fw400 font-sans">
                    {school.location}
                  </p>
                </div>
                <Image
                  width={70}
                  height={70}
                  src={schoolLogos[index]}
                  alt="College1"
                  className="w-[70px] h-[70px] rounded-full"
                />
              </div>

              <div className="border border-[#828282]/20 w-full mt-[18px] mb-[28px]"></div>

              <div className="w-[110px] h-[55px] flex flex-col">
                <p className="f14 fw400 text-[#828282] lh24">{school.Power6}</p>
                <p className="f14 fw700 text-[#13013c] lh24">{school.dash}</p>
              </div>
            </article>
          ))}
        </div>
        <ViewAll>View All</ViewAll>
      </div>
    </section>
  );
};

export default HighSchoolsNearYou;
