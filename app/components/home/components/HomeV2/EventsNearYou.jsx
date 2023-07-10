import homeData from "../../homeData.json";
import Image from "next/image";

const EventsNearYou = () => {
  return (
    <section className="h-[700px] w-[full]">
      <div className=" h-full w-full flex flex-col  items-center justify-center">
        <div className="flex flex-row items-center justify-between w-full">
          <h2 className="text-[#13013c] h2 ">Events Near You</h2>
          <button className="text-[#027333] fw700 f16 lh24">View All</button>
        </div>
        <div className="border border-[#828282]/20 mt-[20px] w-full"></div>
        <div className="flex flex-row gap-[14px] mt-[47px]">
          {homeData.eventsNearYou.map((event, index) => (
            <article
              key={index}
              className="p-[25px] bg-[#ffffff] rounded-[10px] shadow-lg"
            >
              <div className="flex flex-row justify-between">
                <p className="f14 fw700 font-sans text-[#828282]">
                  {event.dateAndTime}
                </p>
                <button className="tag">{event.matchStatus}</button>
              </div>
              <div>
                <h5 className="relative h5 text-[#13013C] w-[317px] pt-2">
                  <span>{event.hostSchool}</span>
                  <span className="abolute bottom-0 left-4 right-0">
                    <Image
                      width={18}
                      height={18}
                      src="/verifiedIcon.svg"
                      alt="verification"
                      className="h-[18px] w-[17.114px]"
                    />
                  </span>
                </h5>
                <h6 className="h6 text-[#828282] w-[294px] h-[48px]">
                  {event.participantSchool}
                </h6>
              </div>
              <div className="flex flex-col">
                {event.isEventFree && (
                  <p className="f14 fw400 font-sans lh24 text-[#828282]">
                    Free Event
                  </p>
                )}
                <div className="flex flex-row gap-[2px]">
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
    </section>
  );
};

export default EventsNearYou;
