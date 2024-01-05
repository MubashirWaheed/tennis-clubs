"use client";

import clubData from "./clubData.json";
import Image from "next/image";
import Link from "next/link";
import CreateAnEvent from "@/components/ui/buttons/PrimaryButton";

import PostScores from "@/components/ui/buttons/PrimaryButton";
import CreateEvent from "@/components/ui/buttons/PrimaryButton";
import MoreButton from "./MoreButton";

import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";

import { usePathname } from "next/navigation";
import useSWR from "swr";
import { fetcher } from "@/lib/utils/fetcher";
import UpcomingEvents from "./components/UpcomingEvents";

const ClubView = () => {
  const router = useRouter();

  const searchParams = useSearchParams();

  const currentPage = usePathname();
  const clubId = currentPage.split("/")[2];
  // console.log("CLUB ID:", clubId);

  const { data } = useSWR(`/api/club/${clubId}`, fetcher);
  console.log("data: ", data);

  const handleScorePost = () => {
    router.push(`[clubID]/admin/score`);
  };

  return (
    <div>
      {data && (
        <>
          <section className="lg:h-[230px] bg-[url('/tennis-court.png')] bg-cover bg-no-repeat">
            <div className="h-full w-full bg-gradient-to-b from-transparent to-black/90">
              <div className="px-4 lg:px-0 w-full max-w-[1170px] flex items-center justify-between flex-col lg:flex-row gap-2 lg:gap-0 mx-auto py-[60px]">
                <div className="flex flex-col items-center lg:items-start gap-2 lg:gap-0">
                  <h2 className="h2 text-white text-center">
                    {/* {clubData.clubDetails.name} */}
                    {data.clubName}
                  </h2>

                  <div className="flex items-center flex-col lg:flex-row gap-3 lg:gap-2">
                    <p className="flex items-center gap-1 f14 lh22 fw700 text-white">
                      <span>
                        <Image
                          src="/map.svg"
                          alt="Map Icon"
                          width={24}
                          height={24}
                        />
                      </span>
                      <span>
                        {data.clubLocation}
                        {/* {clubData.clubDetails.location} */}
                      </span>
                    </p>
                    <p className="flex items-center gap-1 f14 lh22 fw700 text-white">
                      <span>
                        <Image
                          src="/Game.svg"
                          alt="Game Icon"
                          width={24}
                          height={24}
                        />
                      </span>
                      <span className="flex items-center">
                        {clubData.clubDetails.noOfEvents} Events
                      </span>
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-1 flex-col lg:flex-row lg:gap-[14px]">
                  <PostScores onClick={handleScorePost}>Post scores</PostScores>
                  <CreateEvent
                    onClick={() =>
                      router.push(`/events/createevent?clubId=${clubId}`)
                    }
                  >
                    Create An Event
                  </CreateEvent>
                  <MoreButton />
                </div>
              </div>
            </div>
          </section>

          {/* Main Section */}
          <section className="relative -top-[30px] w-full flex flex-col gap-3 max-w-[1170px] mx-auto px-4 lg:px-0 pb-[40px]">
            {/* Navigation */}
            <nav className="px-[50px] h-[60px] w-full overflow-x-auto rounded-[10px] shadow-md bg-white flex justify-start gap-[30px] items-stretch">
              {clubData.clubNavBar.map((navItem, index) => (
                <Link
                  href={`/clubs/${clubId}${navItem?.href}`}
                  className="h-full border-b-4 border-white focus:border-[#3B2273] rounded-md px-[10px] text-[#828282] focus:text-[#3B2273] flex items-center justify-center"
                  key={index}
                >
                  <p className="f16 fw700 lh24">{navItem?.title}</p>
                </Link>
              ))}
            </nav>

            <div
              id="about"
              className="w-full flex flex-col lg:flex-row items-center lg:items-start gap-[34px] rounded-[10px] mt-[47px]"
            >
              {/* About Description */}
              <div className="flex flex-col gap-[6px] ">
                <h4 className="h4 text-[#13013c] ">
                  About {data.clubName}
                  {/* {clubData.about.title} */}
                </h4>
                <p className="f16 fw400 lh24 text-[#828282] w-full lg:w-[840px] font-sans">
                  {data.about}

                  {/* {clubData.about.description} */}
                </p>
              </div>

              {/* Organizer Card */}
              <div className="px-[21px] py-[28px] bg-[#fff] shadow-md w-full lg:w-[290px]">
                <p className="text-[20px] fw700 lh24 font-Abril Fatface text-[#13013c]">
                  Organizer
                </p>

                <div className="flex items-center gap mt-[40px] ">
                  <div className="px-[20px]">
                    <Image
                      width={77}
                      height={77}
                      src="/human.png"
                      alt="human"
                      className="w-[77px] h-[77px] rounded-full"
                    />
                  </div>
                  <div className="flex flex-col ">
                    <p className="f16 fw700  text-[#13013c]">
                      {clubData.organizer.name}
                    </p>
                    <p className="text-[#828282] f16 fw400 lh24">
                      {clubData.organizer.designation}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div
              id="events"
              className="flex flex-col lg:flex-row items-center justify-between"
            >
              <div className="mt-3 flex flex-col items-center lg:items-start">
                <h3 className="text-[#13013c] h3">Upcoming Events</h3>

                {/* SHOW Upcoming events for the event */}

                {/* cards */}
                <div className="relative w-full">
                  {/* Dynamically create these cards for events*/}

                  {/* blur when not part if club */}
                  {/* blur */}
                  <UpcomingEvents />

                  <div className="z-10 abolute inset-0 flex items-center justify-center h-full w-full">
                    <CreateAnEvent
                      onClick={() => router.push(`/events/createevent`)}
                    >
                      Create An Event
                    </CreateAnEvent>
                  </div>
                </div>
              </div>

              {/* Aside */}
              <div className="w-full lg:w-[290px] h-[280px] shadow-md bg-[#fff] rounded-[10px] mt-[21px]">
                <div className="flex flex-col">
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
                        {data.clubLocation}
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
                      className="pt-[15px] w-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      )}
    </div>
  );
};

export default ClubView;
