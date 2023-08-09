import React from "react";
import Image from "next/image";
const Standings = () => {
  return (
    <div>
      <div className=" flex bg-lightPurple py-[20px] md:pl-[20px]">
        <p className="text-darkPurple fw700 md:basis-[23%] basis-[15%] grow">
          Name
        </p>
        <p className="text-darkPurple fw700 md:basis-[15%] basis-[10%] grow">
          UTR
        </p>
        <p className="text-darkPurple fw700 basis-[10%] grow px-[5px]">
          Matches
        </p>
        <p className="text-darkPurple fw700 basis-[10%] grow px-[5px]">
          Record
        </p>
        <p className="text-darkPurple fw700 basis-[10%] grow px-[5px]">Sets</p>
        <p className="text-darkPurple fw700 basis-[10%] grow">Games</p>
      </div>

      <div className="">
        {/* row */}

        <div className="md:pl-[15px] flex w-full my-[10px] rounded-lg shadow-lg py-[10px]">
          <div className=" md:basis-[23.7%] basis-[15%] grow flex gap-2 flex-wrap justify-center md:justify-start">
            <Image
              src="/human.png"
              width={45}
              height={45}
              alt="player icon"
              className="rounded-full w-[28px] h-[28px] md:w-[45px] md:h-[45px]"
            />
            <div>
              <p className="md:f24 f16 text-darkPurple ">Jeannie C. Lyons</p>
              <p className="f16 text-grey">M • Surat, India</p>
            </div>
          </div>
          <div className="md:basis-[16.5%] grow">
            <p className="flex items-center gap-2 text-grey">
              3.xx
              <Image
                src="/verifiedIcon.svg"
                alt="verified"
                width={18}
                height={18}
              />
            </p>
          </div>
          <p className="text-grey basis-[10%] grow text-center md:text-left">
            2
          </p>
          <p className="text-grey basis-[10%] grow text-center md:text-left">
            1-0
          </p>
          <p className="text-grey basis-[10%] grow text-center md:text-left">
            2-0
          </p>
          <p className="text-grey basis-[10%] grow text-center md:text-left">
            8-0
          </p>
        </div>

        <div className="md:pl-[15px] flex w-full my-[10px] rounded-lg shadow-lg py-[10px]">
          <div className=" md:basis-[23.7%] basis-[15%] grow flex gap-2 flex-wrap justify-center md:justify-start">
            <Image
              src="/human.png"
              alt="player icon"
              width={45}
              height={45}
              className="rounded-full w-[28px] h-[28px] md:w-[45px] md:h-[45px]"
            />
            <div>
              <p className="md:f24 f16 text-darkPurple ">Jeannie C. Lyons</p>
              <p className="f16 text-grey">M • Surat, India</p>
            </div>
          </div>
          <div className="md:basis-[16.5%] grow">
            <p className="flex items-center gap-2 text-grey">
              3.xx
              <Image
                src="/verifiedIcon.svg"
                alt="verified"
                width={18}
                height={18}
              />
            </p>
          </div>
          <p className="text-grey basis-[10%] grow text-center md:text-left">
            2
          </p>
          <p className="text-grey basis-[10%] grow text-center md:text-left">
            1-0
          </p>
          <p className="text-grey basis-[10%] grow text-center md:text-left">
            2-0
          </p>
          <p className="text-grey basis-[10%] grow text-center md:text-left">
            8-0
          </p>
        </div>
      </div>
    </div>
  );
};

export default Standings;
