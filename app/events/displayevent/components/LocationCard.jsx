import Image from "next/image";

const LocationCard = ({ eventLocation }) => {
  return (
    // h-[280px]
    <div className="h-full  w-full lg:w-[290px] shadow-md bg-[#fff] rounded-[10px] mt-[20px] ">
      <div className="  flex flex-col">
        <div className="px-[28px] py-[21px]">
          <p className="text-[20px] fw700 lh24 font-Abril Fatface text-[#13013c] mb-[22px]">
            Location
          </p>
          <div className="flex flex-row gap-2 items-center">
            <Image
              width={24}
              height={24}
              src="/mapblue.svg"
              alt="mapblue"
              className="h-[24px] w-[24px]"
            />
            <p className=" text-[#828282] f14 fw700 lh22">
              {eventLocation}
              {/* 3092 Church StreetBrooklyn, NY 11221 */}
            </p>
          </div>
        </div>
        <div>
          <Image
            width={290}
            height={280}
            src="/location.png"
            alt="location"
            className="object-contain pt-[15px] w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default LocationCard;
