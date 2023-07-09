import Age from "../../assets/age1.svg";
import Image from "next/image";
import profileData from "../profileData.json";
import France from "../../assets/France.svg";
import Arrow from "../../assets/Arrow.svg";
import Logo from "../../assets/Logo.svg";

export default function RecentResults() {
  return (
    <div className="flex flex-col">
      <h3 className="h3 text-[#13013c]">Recent Results</h3>

      <div className="flex gap-[22px]">
        <div className="flex  gap-[14px] mt-[6px]">
          {profileData.overview.recentResults.map((result, index) => (
            <article
              key={index}
              className="py-[27px] px-[24px] shadow-lg  relative"
            >
              <p className="f16 fw400 lh22 text-[#828282] mb-[16px]">
                {result.dateAndTime}
              </p>
              <div className="flex items-center gap-[150px]">
                <div className="flex flex-col ">
                  <div className="flex items-center gap-[2px]">
                    <Image src={France} alt="France" />
                    <p className="f18 fw700 lh30 text-[#13013c] w-[250px]">
                      {result.team1.player1}
                    </p>
                  </div>
                  <div className="flex items-center gap-[2px]">
                    <Image src={France} alt="France" />
                    <p className="f18 fw700 lh30 text-[#13013c]">
                      {result.team1.player2}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-[2px]">
                  <p className="f20 fw700 lh30 text-[#828282]">2</p>
                  <Image src={Arrow} alt="Arrow" className="absolute right-0" />
                </div>
              </div>
              <div className="border border-[#828282]/20 mt-[16px] mb-[6px]"></div>
              <div className="flex items-center gap-[150px]">
                <div className="flex flex-col">
                  <div className="flex items-center gap-[2px]">
                    <Image src={France} alt="France" />
                    <p className="f18 fw700 lh30 text-[#13013c]">
                      {result.team1.player1}
                    </p>
                  </div>
                  <div className="flex items-center gap-[2px]">
                    <Image src={France} alt="France" />
                    <p className="f18 fw700 lh30 text-[#13013c]">
                      {result.team1.player2}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-[2px] ">
                  <p className="f20 fw700 lh30 text-[#828282]">2</p>
                </div>
              </div>
              <div className="flex items-center justify-between mt-[14px]">
                <p className="f16 lh22 fw700 text-[#828282]">Doubles</p>
                <Image src={Logo} alt="Logo" />
              </div>
            </article>
          ))}
        </div>

        <div className="bg-[#fff] rounded-[15px] shadow-lg px-[27px] py-[31px] relative w-[380px] h-[110px]">
          <p className="f20 fw400 lh30 text-[#3B2273]">About</p>
          <p className="f16 fw700 lh28 text-[#828282]">Age : 20</p>
          <Image src={Age} alt="Age" className="absolute bottom-0 right-0" />
        </div>
      </div>
    </div>
  );
}
