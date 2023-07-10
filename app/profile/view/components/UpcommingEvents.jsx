import Image from "next/image";
import ProfileView from "../profileView.json";
import PlayEvent from "@/components/ui/buttons/PrimaryButton";

const Events = () => {
  return (
    <section className="mt-[80px] w-full max-w-[1174px]">
      <div>
        <h3 className="h3 text-[#13013c]">Your Upcoming Events</h3>
        <div className="border border-[#828282]/20 mt-[20px]"></div>

        <div className="flex flex-row gap-[14px] mt-[43px]">
          {ProfileView.upcomingEvents.map((event, index) => (
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
                  width={17}
                  height={18}
                    src="/verifiedIcon.svg"
                    alt="verification"
                    className="h-[18px] w-[17px] relative top-[14px] right-[70px]"
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

          <div className="relative p-[20px]  w-[416px] h-[277px] border border-[#000] border-dashed rounded-[10px]">
            <Image
            width={416}
            height={277}
              src="/potraitimg.png"
              alt="cardimg"
              className="object-cover w-full h-full absolute top-0 left-0 right-0 bottom-0 -z-10 rounded-[10px]"
            />

            <div className="h-full w-full flex flex-col justify-between">
              <div className="flex flex-col">
                <p className="f24 fw700 lh35 text-[#13013c]">Find An Event</p>
                <p className="f16 fw400 lh24 text-[#828282]">
                  Play in a level-based event near you.
                </p>
              </div>

              <div className="mt-[79px] flex justify-end">
                <PlayEvent>Play An Event</PlayEvent>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;
