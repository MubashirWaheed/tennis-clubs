import profileData from "../profileData.json";
import Image from "next/image";

export default function EventsNearYou() {
    return (
        <div className=" w-full mt-[80px]">
        <h3 className="h3 text-[#13013c]">Events Near You</h3>
        <div className="border border-[#828282]/20 mt-[20px]"></div>
        <div className="flex flex-row gap-[14px] mt-[47px]">
            {profileData.overview.eventsNearYou.map((event, index) => (
            <article
                key={index}
                className="p-[25px] bg-[#ffffff] rounded-[10px] shadow-lg"
            >
                <div className="flex flex-row justify-between">
                <p className="f14 fw700 font-sans text-[#828282]">
                    {event.dateAndTime}
                </p>
                <button className="tag">{event.type}</button>
                </div>
                <div>
                <h5 className="relative h5 text-[#13013C] w-[317px] pt-2  flex items-center ">
                    <span>{event.hostSchool}</span>

                    <Image
                    width={17}
                    height={18}
                    src="/verifiedIcon.svg"
                    alt="verification"
                    className="h-[18px] w-[17px] relative top-[16px] right-[70px]"
                    />
                </h5>
                <h6 className="h6 text-[#828282] w-[294px] h-[48px]">
                    {event.location}
                </h6>
                </div>
                <div className="flex flex-col mt-[15px]">
                <div className="flex flex-row gap-[2px]">
                    <p className="f14 fw400 font-sans lh24 text-[#828282]">
                    {event.prizeMoney}
                    </p>
                    <p className="f14 fw400 font-sans lh24 text-[#828282]">
                    {event.entryFee}
                    </p>
                </div>
                <div className="flex flex-row gap-[2px]">
                    <p className="f14 fw400 font-sans lh24 text-[#828282]">
                    {event.registration}
                    </p>
                    <p className="f14 fw400 font-sans lh24 text-[#828282]">
                    {event.gender}
                    </p>
                    <p className="f14 fw400 font-sans lh24 text-[#828282]">
                    {event.matchType}
                    </p>
                </div>
                </div>
            </article>
            ))}
        </div>
        </div>
    );
}
