import homeData from "../../homeData.json";
import Image from "next/image";

const LocalPlayers = () => {
  return (
    <section className="py-[40px] lg:py-[90px] w-[full]">
      <div className=" h-full w-full flex flex-col items-center justify-center">
        <div className="flex flex-row items-center justify-between w-full">
          <h2 className="text-[#13013c] h2">Local Players</h2>

          <button className="text-[#027333] fw700 f16 lh24">View All</button>
        </div>
        <div className="border border-[#828282]/20 mt-[20px] w-full"></div>

        <div className="flex flex-row flex-wrap gap-[14px] mt-[47px]">
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
                    width={18}
                    height={18}
                    src="/verifiedIcon.svg"
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
                    width={182}
                    height={215}
                    src="/maskGroup.png"
                    alt="Mask"
                    className="w-full h-full absolute right-0 bottom-0 z-10"
                  />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LocalPlayers;
