"use client";
import Image from "next/image";
import clubData from "../../clubs/[clubID]/clubData.json";
import useSWR from "swr";
import { fetcher } from "@/lib/utils/fetcher";
import { useSearchParams } from "next/navigation";
// get the club details and display them dynamically

const EventFormLayout = ({ children }) => {
  const searchParams = useSearchParams();
  const clubid = searchParams.get("clubId");

  const { data, error } = useSWR(`/api/club/${clubid}`, fetcher);
  console.log("data for this club", data);

  if (!data) return <div>laoding...</div>;
  const { clubLocation, clubName, events } = data;

  return (
    <main>
      {/* Header */}
      <section className="lg:h-[230px] bg-[url('/tennis-court.png')] bg-cover bg-no-repeat">
        <div className="h-full w-full bg-gradient-to-b from-transparent to-black/90">
          <div className="px-4 lg:px-0 w-full max-w-[1170px] flex items-center justify-center flex-col lg:flex-row gap-2 lg:gap-0 mx-auto py-[60px]">
            <div className="flex flex-col items-center gap-2 lg:gap-0">
              <h2 className="h2 text-white text-center">{clubName}</h2>

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
                  <span>{clubLocation}</span>
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
                    {events.length} Events
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {children}
    </main>
  );
};

export default EventFormLayout;
