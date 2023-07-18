import homeData from "../../homeData.json";
import Image from "next/image";
import ViewAll from "@/components/ui/buttons/PrimaryButton";
import IPass from "@/components/ui/buttons/SecondaryButton";
import IPlay from "@/components/ui/buttons/PrimaryButton";

const PlayersNearYou = () => {
  return (
    <section className="w-[full] bg-[#FAFBFF]">
      <div className="h-full py-[20px] md:py-[40px] lg:py-[90px] px-2 lg:px-0 w-full max-w-[1170px] mx-auto flex flex-col gap-[50px] items-center justify-center">
        <div className="flex flex-col items-center gap-[15px]">
          <h2 className="text-[#13013C] h2 ">Player Created Plays Near You</h2>
          <Image
            width={119}
            height={20}
            src="/blueHeaderLine.svg"
            alt="blueHeaderLine"
            className="w-[119px] h-[20px]"
          />
        </div>

        <div className="flex flex-col lg:flex-row gap-[14px]">
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
                    className="w-[35px] h-[35px]"
                  />
                  <Image
                    width={21}
                    height={21}
                    src="/User.svg"
                    alt="User"
                    className="w-[21px] h-[21px] relative right-7"
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
