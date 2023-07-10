import ProfileView from "../profileView.json";
import Image from "next/image";
const RecentEvents = () => {
  return (
    <section className="mt-[80px] w-full max-w-[1174px]">
      <div>
        <h3 className="h3 text-[#13013c]">Recent Events</h3>
        <div className="border border-[#828282]/20 mt-[20px]"></div>

        <div className="flex flex-row gap-[14px] mt-[43px]">
          {ProfileView.recentEvents.map((event, index) => (
            <article
              key={index}
              className="p-[26px] bg-[#ffffff] rounded-[10px] shadow-lg"
            >
              <div className="flex flex-row justify-between">
                <p className="f14 fw700 font-sans text-[#828282]">
                  {event.DayandTime}
                </p>
                <div className="flex gap-[10px]">
                  <button className="tag">{event.player}</button>
                  <button className="tag">{event.provider}</button>
                </div>
              </div>
              <div className="mt-[13px]">
                <div className="w-[317px] pt-2 flex items-center">
                  <h5 className="h5 text-[#13013C] fw700">
                    {event.SchoolName}
                  </h5>

                  <Image
                  width={17}
                  height={18}
                    src="/verifiedIcon.svg"
                    alt="verification"
                    className="h-[18px] w-[17.114px] relative top-[14px] right-[70px]"
                  />
                </div>
                <h6 className="h6 text-[#828282] w-[294px] h-[48px]">
                  {event.SchoolLocation}
                </h6>
              </div>
              <div className="flex flex-col mt-[15px]">
                {event.isEventFree && (
                  <p className="f14 fw400 font-sans lh24 text-[#828282]">
                    Free Event
                  </p>
                )}
                <div className="flex flex-row gap-[2px]">
                  <p className="f14 fw400 font-sans lh24 text-[#828282]">
                    {event.Registartion}
                  </p>
                  <p className="f14 fw400 font-sans lh24 text-[#828282]">
                    {event.EdType}
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

export default RecentEvents;
