import homeData from "../../homeData.json";
import Image from "next/image";
import ViewAll from "@/components/ui/buttons/PrimaryButton";

const LocalPlayers = () => {
  return (
    <section className="w-[full] relative ">
      <Image
        width={1540}
        height={700}
        src="/tennisgirl.png"
        alt="Background Image"
        className="absolute w-full h-full object-cover -z-10"
      />

      <div className="bg-[#3B2273]/70 h-full w-full">
        <div className="py-[20px] md:py-[40px] lg:py-[90px] px-2 lg:px-0 w-full max-w-[1170px] mx-auto flex flex-col gap-[50px] items-center justify-center">
          <div className="flex flex-col items-center ">
            <h2 className="text-[#ffffff] h2 ">Local Players</h2>
            <Image
              width={119}
              height={20}
              src="/whiteHeaderLine.svg"
              alt="whiteHeaderLine"
              className="w-[119px] h-[20px]"
            />
          </div>

          <div className="flex flex-wrap flex-row gap-[14px] ">
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
                      width={17}
                      height={18}
                      src="/verifiedIcon.svg"
                      alt="verification"
                      className="h-[18px] w-[17px]"
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
                      className="absolute right-0 bottom-0 z-10"
                    />
                  </div>
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

export default LocalPlayers;
