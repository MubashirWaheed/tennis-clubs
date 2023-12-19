"use client";
import { fetcher } from "@/lib/utils/fetcher";
import useSWR from "swr";
import Link from "next/link";
import { useEffect, useLayoutEffect } from "react";
import useProfileLocalStorage from "@/hooks/useProfileLocalStorage";
import { useRouter } from "next/navigation";

const Clubs = () => {
  // const router = useRouter();
  // const profilePresent = useProfileLocalStorage();
  console.log("PROFILE read from the local storage");

  const { data, error } = useSWR("/api/clubmembership", fetcher);
  console.log("data:", data);

  if (error) {
    // Handle error, for example, display an error message
    return <p>Error loading data</p>;
  }

  if (!data) {
    // Data is still loading
    return <p className="text-center text-[20px]">Loading...</p>;
  }

  // Ensure that data is an array before attempting to map over it
  const clubsData = Array.isArray(data) ? data : [];

  return (
    <div className="flex items-start justify-center bg-[#FAFBFF] ">
      <div className="max-w-[900px] flex flex-col items-center w-full">
        <h2 className="text-[24px] py-[20px] text-[#3B2273] ">List of Clubs</h2>
        {data?.length > 0 ? (
          <div className="flex flex-col gap-2 items-center w-full grow">
            {clubsData?.map((item, key) => {
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
        ) : (
          <p>You haven&apos;t joined or created any clubs</p>
        )}
      </div>
    </div>
  );
};

export default Clubs;
