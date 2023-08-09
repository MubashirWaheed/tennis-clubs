import Image from "next/image";

const Players = () => {
  return (
    <div>
      <div className="rounded-2xl  py-[20px] md:py-[20px] w-full max-w-[1170px] mx-auto flex flex-col  justify-between">
        <div className="rounded-lg py-[20px] px-[30px] flex justify-between bg-[#FAFBFF] w-full">
          <p className="basis-2.8/5 grow text-darkPurple fw700 f14">
            10 Players
          </p>
          <p className="basis-0.1/5 grow text-darkPurple fw700 f14">Singles</p>
          <p className="basis-1.5/5 grow text-darkPurple fw700 f14">Doubles</p>
        </div>

        {/* player cards */}
        <div>
          <div className="w-full flex py-[10px] my-[10px] shadow-lg rounded-lg">
            <div className="grow basis-[34%] flex gap-2  md:gap-4 md:pl-[20px] ">
              <Image
                className="rounded-full md:w-[50px] md:h-[50px] w-[35px] h-[35px]"
                width={50}
                height={50}
                alt="player icon"
                src="/human.png"
              />
              <div className="flex flex-col ">
                <p className="f16 md:f20">Jeannie C. Lyons</p>
                <p className="f12 md:f16">M • Surat, India</p>
              </div>
            </div>

            <p className="f16 text-grey grow basis-[16%] md:basis-[29%] flex items-center gap-2 ">
              3.xx
              <Image
                src="/verifiedIcon.svg"
                alt="verified"
                width={20}
                height={20}
              />
            </p>
            <p className="f16 text-grey grow basis-[15%] flex items-center gap-2">
              3.xx
              <Image
                src="/verifiedIcon.svg"
                alt="verified"
                width={20}
                height={20}
              />
            </p>
            <p className=" grow basis-[15%] flex items-center cursor-pointer">
              <Image
                src="/messages.svg"
                alt="messsages"
                width={28}
                height={28}
              />
            </p>
          </div>

          <div className="w-full flex py-[10px] my-[10px] shadow-lg rounded-lg">
            <div className="grow basis-[34%] flex gap-2  md:gap-4 md:pl-[20px] ">
              <Image
                className="rounded-full md:w-[50px] md:h-[50px] w-[35px] h-[35px]"
                width={50}
                height={50}
                src="/human.png"
                alt="player icon"
              />
              <div className="flex flex-col ">
                <p className="f16 md:f20">Jeannie C. Lyons</p>
                <p className="f12 md:f16">M • Surat, India</p>
              </div>
            </div>

            <p className="f16 text-grey grow basis-[16%] md:basis-[29%] flex items-center gap-2 ">
              3.xx
              <Image
                src="/verifiedIcon.svg"
                alt="verified"
                width={20}
                height={20}
              />
            </p>
            <p className="f16 text-grey grow basis-[15%] flex items-center gap-2">
              3.xx
              <Image
                src="/verifiedIcon.svg"
                alt="verified"
                width={20}
                height={20}
              />
            </p>
            <p className=" grow basis-[15%] flex items-center cursor-pointer">
              <Image
                src="/messages.svg"
                alt="messages"
                width={28}
                height={28}
              />
            </p>
          </div>

          <div className="w-full flex py-[10px] my-[10px] shadow-lg rounded-lg">
            <div className="grow basis-[34%] flex gap-2  md:gap-4 md:pl-[20px] ">
              <Image
                className="rounded-full md:w-[50px] md:h-[50px] w-[35px] h-[35px]"
                width={50}
                height={50}
                src="/human.png"
                alt="player icon"
              />
              <div className="flex flex-col ">
                <p className="f16 md:f20">Jeannie C. Lyons</p>
                <p className="f12 md:f16">M • Surat, India</p>
              </div>
            </div>

            <p className="f16 text-grey grow basis-[16%] md:basis-[29%] flex items-center gap-2 ">
              3.xx
              <Image
                src="/verifiedIcon.svg"
                alt="verified"
                width={20}
                height={20}
              />
            </p>
            <p className="f16 text-grey grow basis-[15%] flex items-center gap-2">
              3.xx
              <Image
                src="/verifiedIcon.svg"
                alt="verified"
                width={20}
                height={20}
              />
            </p>
            <p className=" grow basis-[15%] flex items-center cursor-pointer">
              <Image
                src="/messages.svg"
                alt="messages"
                width={28}
                height={28}
              />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Players;
