import homeData from "../../homeData.json";
import Image from "next/image";
import ViewAll from "@/components/ui/buttons/PrimaryButton";


const EventsNearYou = () => {
  return (
    <section className="relative ">
      <Image
        width={1540}
        height={700}
        src="/manPlaying.png"
        alt="Background Image"
        className="absolute w-full h-full object-cover -z-10"
      />

      <div className="bg-[#3B2273]/80 z-20">
        <div className="py-[20px] md:py-[40px] lg:py-[90px] px-2 lg:px-0 w-full max-w-[1170px] mx-auto flex flex-col gap-[50px] items-center justify-center">

          <div className="flex flex-col items-center ">
            <h2 className="text-[#ffffff] h2 ">Events Near You</h2>
            <Image
              width={119}
              height={20}
              src="/whiteHeaderLine.svg"
              alt="whiteHeaderLine"
              className="w-[119px] h-[20px]"
            />
          </div>

          <div className="flex flex-col lg:flex-row gap-[14px]">
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
                        width={17}
                        height={18}
                        src="/verifiedIcon.svg"
                        alt="verification"
                        className="h-[18px] w-[17px]"
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

          <ViewAll>View All</ViewAll>
        </div>
      </div>
    </section>
  );
};

export default EventsNearYou;
