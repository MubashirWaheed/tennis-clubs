import Image from 'next/image'
import React from 'react'
import FindAnEventBTN from "@/components/ui/buttons/PrimaryButton";

const UpcomingEvents = () => {
    return (
      <section className="px-2 lg:px-0 w-full max-w-[1170px] mx-auto py-[90px] flex flex-col items-center gap-[30px] bg-white">
        <div className="flex flex-col gap-[15px] items-center">
          <h1 className="h2 text-[#13013C]">Your Upcoming Events</h1>
          <Image
            width={119}
            height={20}
            src="/blueHeaderLine.svg"
            alt="Blue Header Line"
            className="w-[119px] h-[20px]"
          />
        </div>

        <div className="flex flex-col lg:flex-row lg:h-[232px] gap-[20px] items-stretch">
          <article className="shadow-md rounded-[10px] bg-white p-[25px]">
            <div className="flex items-center gap-[60px]">
              <p className="text-[#828282] f14 fw700 lh24">Apr 20 | 10:30am</p>
              <div className="flex gap-[10px] items-center">
                <p className="px-[16px] f12 fw700 lh20 text-[#FFFFFF] bg-[#027333] rounded-[50px]">
                  Player
                </p>
                <p className="px-[16px] f12 fw700 lh20 text-[#FFFFFF] bg-[#027333] rounded-[50px]">
                  Provider
                </p>
              </div>
            </div>
            <div>
              <h5 className="h5 text-[#13013C] w-[317px]">
                Galileo High School at George Washington High School
                <span>
                  <Image
                    width={17}
                    height={17}
                    src="/verifiedIcon.svg"
                    alt="h-[18px] w-[17px]"
                  />
                </span>
              </h5>
              <h6 className="h6 text-[#828282]">
                Raoul Wallenberg Traditional High School - Boys • San Francisco,
                CA
              </h6>
            </div>
            <div className="f14 fw400  lh18 text-[#828282]">
              <p>Free Event</p>
              <p>1 Registrations • Co-ed • Singles</p>
            </div>
          </article>

          {/* Find An Event Section */}
          <div className="border-2 border-dashed border-[#13013C] p-[25px] flex flex-col gap-[79px]">
            <div className="flex flex-col gap-[1px]">
              <p className="f24 fw700 lh34 text-[#13013C]">Find An Event</p>
              <p className="text-[#828282] f16 fw400 lh24">
                Play in a level-based event near you.
              </p>
            </div>
            <div className="flex items-center justify-end">
              <FindAnEventBTN>Find An Event</FindAnEventBTN>
            </div>
          </div>
        </div>
      </section>
    );
}

export default UpcomingEvents