"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

const MatchCard = ({
  eventName,
  eventLocation,
  eventDate,
  eventMonth,
  eventYear,
  tags,
  noOfRegistrations,
  otherDetails,
  isEventVerified,
  status,
  dayAndTime,
  isMatchPlay,
}) => {
  const { push } = useRouter();

  return (
    <article className="flex flex-col md:flex-row items-center rounded-[10px] bg-white shadow-md p-[10px] md:p-[20px] lg:p-[30px]">
      <div className="w-full flex-1 flex items-center justify-start gap-[5px] md:gap-[20px]">
        <div className="flex flex-col items-center justify-center w-[70px] h-[70px] md:w-[100px] md:h-[100px] bg-[#3B2273] rounded-[10px] text-white">
          <h3 className="text-[20px] md:text-[35px] uppercase fw700 text-center">
            {eventDate}
          </h3>
          <p className="uppercase f12 md:f14 fw700 lh22 text-center">
            {eventMonth}
          </p>
          <p className="uppercase f12 md:f14 fw700 lh22 text-center">
            {eventYear}
          </p>
        </div>

        <div className="flex-1 flex flex-col justify-between">
          <ul className="flex items-center gap-2">
            {tags?.map((tag, index) => (
              <li key={index} className="tag">
                {tag}
              </li>
            ))}
          </ul>
          <h4
            onClick={() => {
              push("/events/displayevent/info");
            }}
            className="h4 cursor-pointer"
          >
            {eventName}
          </h4>
          <div className="flex flex-col md:flex-row items-start md:items-center gap-[1px]">
            <p className="p f16 fw700 text-[#828282] lh24">
              {eventLocation} {"."}
            </p>
            <p className="p f16 fw700 text-[#828282] lh24">
              {noOfRegistrations} Registrations
            </p>
          </div>
          <ul className="flex flex-col md:flex-row items-start md:items-center gap-[1px]">
            {otherDetails?.map((detail, index) => (
              <p className="p f16 fw700 text-[#828282] lh24" key={index}>
                {detail}
                {" . "}
              </p>
            ))}
          </ul>
        </div>
      </div>

      <div className="flex flex-col items-end">
        <div className="flex items-center gap-1">
          <p className="py-[2px] px-[16px] rounded-[50px] bg-[#E8EFF7] f12 lh35 text-[#3B2273]">
            {status}
          </p>
          {isEventVerified && (
            <Image
              height={20}
              width={20}
              src="/verifiedIcon.svg"
              alt="Verified Icon"
              className="w-[20px] h-[20px]"
            />
          )}
        </div>
        <p className="p f16 fw700 text-[#828282] lh24">{dayAndTime}</p>
        {isMatchPlay && (
          <p className="p f16 fw700 text-[#828282] lh24">Match Play</p>
        )}
      </div>
    </article>
  );
};

export default MatchCard;
