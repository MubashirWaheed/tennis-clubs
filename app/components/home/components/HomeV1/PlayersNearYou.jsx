import homeData from "../../homeData.json";
import Image from "next/image";
import blueHeaderLine from "../../assets/blueHeaderLine.svg";
import Ellipse from "../../assets/Ellipse.svg";
import User from "../../assets/User.svg";
import ViewAll from "@/components/ui/buttons/PrimaryButton";

import IPass from "@/components/ui/buttons/SecondaryButton";
import IPlay from "@/components/ui/buttons/PrimaryButton";

const PlayersNearYou = () => {
  return (
    <section className="h-[680px] w-[full] bg-[#FAFBFF]">
      <div className="h-full w-full flex flex-col gap-[50px] items-center justify-center">
        <div className="flex flex-col items-center gap-[15px]">
          <h2 className="text-[#13013C] h2 ">Player Created Plays Near You</h2>
          <Image
            src={blueHeaderLine}
            alt="blueHeaderLine"
            className="w-[full]"
          />
        </div>

        <div className="flex flex-row gap-[14px]">
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
                  <Image src={Ellipse} alt="Ellipse" className="w-[full]" />
                  <Image
                    src={User}
                    alt="User"
                    className="w-[full] relative right-7"
                  />
                </div>
                <p className="f14 fw400 lh24 font-sans text-[#828282]">
                  {player.hostInvitation}
                </p>
              </div>
              <div className="flex justify-end gap-[10px] mt-[27px]">
                <IPass>I'll Pass</IPass>
                <IPlay>I'll Play</IPlay>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlayersNearYou;
