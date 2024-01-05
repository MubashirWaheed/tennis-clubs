"use client";
import { fetcher } from "@/lib/utils/fetcher";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React from "react";
import useSWR from "swr";

const UpcomingEvents = () => {
  const router = useRouter();

  const currentPage = usePathname();
  const clubId = currentPage.split("/")[2];

  const { data } = useSWR(`/api/club/${clubId}`, fetcher);
  //   console.log("CLUB data: ", data);
  const { events } = data;
  console.log("events in the upcoming:", events);
  // Use the slice method to get the first two events
  const sortedEvents = events.sort(
    (a, b) => new Date(b.publishedDate) - new Date(a.publishedDate)
  );

  // Get the latest two events
  const latestTwoEvents = sortedEvents.slice(0, 2);

  // console.log(firstTwoEvents);

  return (
    // pointer-events-none
    <div className=" flex flex-col lg:flex-row gap-3 pt-[60px] w-full">
      {latestTwoEvents.map((item, index) => {
        return (
          <div
            key={index}
            className="w-[380px] h-[250px] border border-[#fff] bg-[#fff] box py-5 px-8 rounded-[10px] "
          >
            <div className="flex flex-row justify-between items-center pb-3">
              <p className="text-[#828282] f14 fw700 lh24">
                YESTERDAY | 6:30pm
              </p>
              <div className="flex gap-[10px]">
                <button className="px-[16px] py-[2px] rounded-[20px] bg-[#027333] text-[#fff]">
                  <p className="f14 fw700 lh24">In Progress</p>
                </button>
              </div>
            </div>
            <Link
              onClick={() => console.log("hello")}
              href={`/events/displayevent/info/${item.id}`}
            >
              <p className="relative f18 fw400 lh24 text-[#13013C] cursor-pointer ">
                {item.eventName}
                {/* Galileo High School at George Washington High School */}
                <span>
                  <Image
                    width={18}
                    height={18}
                    src="/verifiedIcon.svg"
                    alt="verifiedIcon"
                    className="w-[18px] h-[18px] absolute bottom-1 right-[78px] "
                  />
                </span>
              </p>
            </Link>
            <p className="text-[#828282] f16 fw400 lh24 py-1">
              {item.location}
              {/* Raoul Wallenberg Traditional High School -
              <span>Boys • San Francisco, CA</span> */}
            </p>
            <p className="text-[#828282] f14 fw400 lh24 flex flex-col">
              Free Event
              <span>Men . Singles</span>
            </p>
          </div>
        );
      })}

      {/* card1 */}
      {/* <div className="w-[380px] h-[250px] border border-[#fff] bg-[#fff] box py-5 px-8 rounded-[10px] ">
        <div className="flex flex-row justify-between items-center pb-3">
          <p className="text-[#828282] f14 fw700 lh24">YESTERDAY | 6:30pm</p>
          <div className="flex gap-[10px]">
            <button className="px-[16px] py-[2px] rounded-[20px] bg-[#027333] text-[#fff]">
              <p className="f14 fw700 lh24">In Progress</p>
            </button>
          </div>
        </div>
        <p className="relative f18 fw400 lh24 text-[#13013C]">
          Galileo High School at George Washington High School
          <span>
            <Image
              width={18}
              height={18}
              src="/verifiedIcon.svg"
              alt="verifiedIcon"
              className="w-[18px] h-[18px] absolute bottom-1 right-[78px] "
            />
          </span>
        </p>
        <p className="text-[#828282] f16 fw400 lh24 py-1">
          Raoul Wallenberg Traditional High School -
          <span>Boys • San Francisco, CA</span>
        </p>
        <p className="text-[#828282] f14 fw400 lh24 flex flex-col">
          Free Event
          <span>Men . Singles</span>
        </p>
      </div> */}
      {/* card2 */}
      {/* <div className="w-[380px] h-[250px] border border-[#fff] bg-[#fff] box py-5 px-8 rounded-[10px] ">
        <div className="flex flex-row justify-between items-center pb-3">
          <p className="text-[#828282] f14 fw700 lh24">YESTERDAY | 6:30pm</p>
          <div className="flex gap-[10px]">
            <button className="px-[16px] py-[2px] rounded-[20px] bg-[#027333] text-[#fff]">
              <p className="f14 fw700 lh24">In Progress</p>
            </button>
          </div>
        </div>
        <p className="relative f18 fw400 lh24 text-[#13013C]">
          Galileo High School at George Washington High School
          <span>
            <Image
              width={18}
              height={18}
              src="/verifiedIcon.svg"
              alt="verifiedIcon"
              className="w-[18px] h-[18px] absolute bottom-1 right-[78px] "
            />
          </span>
        </p>
        <p className="text-[#828282] f16 fw400 lh24 py-1">
          Raoul Wallenberg Traditional High School -
          <span>Boys • San Francisco, CA</span>
        </p>
        <p className="text-[#828282] f14 fw400 lh24 flex flex-col">
          Free Event
          <span>Men . Singles</span>
        </p>
      </div> */}
    </div>
  );
};

export default UpcomingEvents;
