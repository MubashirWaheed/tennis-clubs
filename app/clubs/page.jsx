"use client";
import { fetcher } from "@/lib/utils/fetcher";
import useSWR from "swr";
import Link from "next/link";

const Clubs = () => {
  // const data = await clubList();
  const { data } = useSWR("/api/clubmembership", fetcher);

  return (
    <div className="flex items-start justify-center bg-[#FAFBFF] ">
      <div className="max-w-[900px] flex flex-col items-center w-full">
        <h2 className="text-[24px] py-[20px] text-[#3B2273] ">List of Clubs</h2>

        <div className="flex flex-col gap-2 items-center w-full grow">
          {data?.map((item, key) => {
            return (
              <Link
                href={`/clubs/${item.club.id}`}
                className="bg-white flex justify-between hover:shadow-lg transition-all cursor-pointer shadow-md my-[10px] rounded-lg px-[26px] py-[15px] w-full"
                key={key}
              >
                <h2 className="hover:text-[#200f47] hover:cursor-pointer font-normal text-[20px] text-[#3B2273]">
                  {item.club.clubName}
                </h2>
                <div className="text-[#3B2273] ">
                  {item.isAdmin ? "Admin" : "Memmber"}
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Clubs;
