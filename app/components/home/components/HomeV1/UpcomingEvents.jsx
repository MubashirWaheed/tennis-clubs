import Image from 'next/image'
import FindAnEventBTN from "@/components/ui/buttons/PrimaryButton";
import homeData from "../../homeData.json";
const UpcomingEvents = () => {
    return (
      <section className="px-2 lg:px-0 w-full max-w-[1170px] mx-auto py-[90px] flex flex-col items-center gap-[30px] bg-white">
        <div className="flex flex-col gap-[15px] items-center">
          <h1 className="h2 text-[#13013C] text-center lg:text-left">
            Your Upcoming Events
          </h1>
          <Image
            width={119}
            height={20}
            src="/blueHeaderLine.svg"
            alt="Blue Header Line"
            className="w-[119px] h-[20px]"
          />
        </div>

        <div className="flex flex-col lg:flex-row gap-[14px] mt-[43px]">
          {homeData.upcomingEvents.map((event, index) => (
            <article
              key={index}
              className="p-[25px] bg-[#ffffff] rounded-[10px] shadow-lg"
            >
              <div className="flex flex-row justify-between">
                <p className="f14 fw700 font-sans text-[#828282]">
                  {event.DateandTime}
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
                    width={18}
                    height={17}
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

          <div className="z-20 relative p-[20px] w-full lg:w-[416px] h-[277px] border border-[#000] border-dashed rounded-[10px]">
            <Image
              width={416}
              height={277}
              src="/upComingEventsCard.png"
              alt="upComingEventsCard"
              className="object-cover w-full h-full absolute inset-0 -z-10 rounded-[10px] pointer-events-none"
            />

            <div className="h-full w-full flex flex-col justify-between z-20">
              <div className="flex flex-col">
                <p className="f24 fw700 lh35 text-[#13013c]">Find An Event</p>
                <p className="f16 fw400 lh24 text-[#828282]">
                  Play in a level-based event near you.
                </p>
              </div>

              <div className="mt-[79px] flex justify-end">
                <FindAnEventBTN>Play An Event</FindAnEventBTN>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}

export default UpcomingEvents