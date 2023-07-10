import homeData from "../../homeData.json";
import Image from "next/image";
import School1 from "../../assets/School1.png";
import School2 from "../../assets/School2.png";
import School3 from "../../assets/School3.png";

const HighSchoolsNearYou = () => {
  const schoolLogos = {
    0: School1,
    1: School2,
    2: School3,
  };
  return (
    <section className=" py-[90px] w-[full] bg-[#fafbff]">
      <div className=" h-full w-full flex flex-col items-center justify-center">
        <div className="flex flex-row items-center justify-between w-full">
          <h2 className="text-[#13013c] h2 ">High Schools Near You</h2>

          <button className="text-[#027333] fw700 f16 lh24">View All</button>
        </div>
        <div className="border border-[#828282]/20 mt-[20px] w-full"></div>

        <div className="flex flex-row gap-[14px] mt-[47px]">
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
                  src={schoolLogos[index]}
                  alt="College1"
                  className="w-[70px] rounded-full"
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
      </div>
    </section>
  );
};

export default HighSchoolsNearYou;
