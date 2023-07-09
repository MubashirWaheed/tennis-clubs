import homeData from "../../homeData.json";
import Image from "next/image";
import ViewAll from "@/components/ui/buttons/PrimaryButton";
import backdropImg from "../../assets/tennisgirl.png";
import verifiedIcon from "../../assets/verifiedIcon.svg";
import whiteHeaderLine from "../../assets/whiteHeaderLine.svg";
import Maskgroup from "../../assets/Mask group.png";

const LocalPlayers = () => {
  return (
    <section className="h-[700px] w-[full] relative ">
      <Image
        src={backdropImg}
        alt="Background Image"
        className="absolute w-full h-full object-cover -z-10"
      />

      <div className="bg-[#3B2273]/70 h-full w-full z-20 flex flex-col gap-[50px] items-center justify-center">
        <div className="flex flex-col items-center ">
          <h2 className="text-[#ffffff] h2 ">Local Players</h2>
          <Image
            src={whiteHeaderLine}
            alt="whiteHeaderLine"
            className="w-[full]"
          />
        </div>

        <div className="flex flex-row gap-[14px] ">
          {homeData.LocalPlayers.map((player, index) => (
            <article
              key={index}
              className="px-[25px] py-[27px] bg-[#ffffff] rounded-[10px] shadow-lg relative"
            >
              <div className="flex flex-col gap-[61px]">
                <div className="flex items-center gap-[5px]">
                  <p className="text-[35px] fw700 font-sans lh28 text-[#13013c]">
                    {player.number}
                  </p>
                  <Image
                    src={verifiedIcon}
                    alt="verification"
                    className="h-[18px] w-[17.114px]"
                  />
                </div>

                <div>
                  <div className="flex flex-col">
                    <p className="f20 fw700 lh28 text-[#13013c] w-[62px] h-[56px]">
                      {player.base}
                    </p>
                    <p className="f14 fw400 lh24 text-[#828282]">
                      {player.University}
                    </p>
                  </div>
                  <Image
                    src={Maskgroup}
                    alt="Mask"
                    className="absolute right-0 bottom-0 z-10"
                  />
                </div>
              </div>
            </article>
          ))}
        </div>

        <ViewAll>View All</ViewAll>
      </div>
    </section>
  );
};

export default LocalPlayers;
