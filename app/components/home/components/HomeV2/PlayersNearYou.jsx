import homeData from "../../homeData.json";
import Image from "next/image";
import IPass from "@/components/ui/buttons/SecondaryButton";
import IPlay from "@/components/ui/buttons/PrimaryButton";

const PlayersNearYou = () => {
  return (
    <section className=" w-[full]  py-[90px] bg-[#fafbff]">
      <div className=" h-full w-full flex flex-col  justify-center">
        <div className="flex flex-row items-center justify-between w-full">
          <h2 className="text-[#13013c] h2 ">Player Created Plays Near You</h2>
          <button className="text-[#027333] fw700 f16 lh24">View All</button>
        </div>
        <div className="border border-[#828282]/20 mt-[20px] w-full"></div>

        <div className="flex flex-row gap-[14px] mt-[47px]">
          {homeData.playersCreated.map((player, index) => (
            <article
              key={index}
              className="p-[25px] bg-[#fff] rounded-[10px] shadow-lg"
            >
              <div className="flex items-center gap-[61px] mb-[13px]">
                <p className="f14 fw700 font-sans text-[#828282]">
                  {player.dateAndTime}
                </p>
                <button className="tag">{player.Status}</button>
              </div>

              <div className="flex flex-col gap-[2px] items-start  mb-[15px]">
                <p className="f18 fw700 font-sans lh30 text-[#13013C]">
                  {player.title}
                </p>
                <p className="f16 fw400 font-sans lh24 text-[#828282]">
                  {player.location}
                </p>
              </div>

              <div className="flex  items-center gap-[14px]">
                <div className="w-[35px] flex  items-center">
                  <Image
                    width={35}
                    height={35}
                    src="/Ellipse.svg"
                    alt="Ellipse"
                    className="w-[full]"
                  />
                  <Image
                    width={21}
                    height={21}
                    src="/User.svg"
                    alt="User"
                    className="w-[full] relative right-7"
                  />
                </div>
                <p className="f14 fw400 lh24 font-sans text-[#828282]">
                  {player.hostInvitation}
                </p>
              </div>
              <div className="flex justify-end gap-[10px] mt-[27px]">
                <IPass>I ll Pass</IPass>
                <IPlay>I ll Play</IPlay>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlayersNearYou;
