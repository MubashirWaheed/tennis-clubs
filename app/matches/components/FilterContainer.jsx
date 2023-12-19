"use client";

import Image from "next/image";
import FilterConfig from "./FilterConfig";
import SportsFilter from "./filters/SportsFilter";
import LocationFilter from "./filters/LocationFilter";
import UpcomingEventsFilter from "./filters/UpcomingEventsFilter";
import EventSeriesFilter from "./filters/EventSeriesFilter";
import TypeFilter from "./filters/TypeFilter";
import BallTypeFilter from "./filters/BallTypeFilter";
import VerifiedEventFilter from "./filters/VerifiedEventFilter";
import PrizeMoneyFilter from "./filters/PrizeMoneyFilter";
import MoreFilter from "./filters/MoreFilter";

const FilterContainer = () => {
  const filters = FilterConfig();

  return (
    <article className="bg-white rounded-lg shadow-lg lg:h-[80px] w-full px-6 py-5 flex items-center gap-2">
      <div className="flex flex-wrap gap-[15px] lg:gap-[0px] items-center lg:justify-between flex-1">
        {filters?.map((filter, index) => (
          <div key={index} className="relative">
            <button
              onClick={filter.openFilter}
              className="text-base text-[#3B2273] cursor-pointer font-semibold border border-[#3B2273] focus:bg-[#3B2273] focus:text-white bg-white rounded-lg px-3 py-2"
            >
              {filter.filterTitle}
            </button>
            {filter.isFilterOpen && (
              <>
                <div className="z-10 absolute lg:top-[90px] top-[58px] -left-[20px] sm:-left-[100px] lg:p-[30px] p-[5px] bg-white shadow-xl border-t-[3px] border-[#3B2273] rounded-[10px]">
                  {filter.filterTitle === "Sport" && <SportsFilter />}
                  {filter.filterTitle === "Location" && <LocationFilter />}
                  {filter.filterTitle === "Upcoming Events" && (
                    <UpcomingEventsFilter />
                  )}
                  {filter.filterTitle === "Event Series" && (
                    <EventSeriesFilter />
                  )}
                  {filter.filterTitle === "Type" && <TypeFilter />}
                  {filter.filterTitle === "Ball Type" && <BallTypeFilter />}
                  {filter.filterTitle === "Verified Event" && (
                    <VerifiedEventFilter />
                  )}
                  {filter.filterTitle === "Prize Money" && <PrizeMoneyFilter />}
                  {filter.filterTitle === "More..." && (
                    <div className="">
                      <MoreFilter />
                    </div>
                  )}
                </div>
                <Image
                  src="/pointer.svg"
                  height={21}
                  width={18}
                  alt="Pointer Icon"
                  className="absolute lg:top-[73px] top-[40px] z-10 left-7 w-[18px] h-[21px]"
                />
              </>
            )}
          </div>
        ))}
      </div>
      <div className="flex gap-[5px] items-center">
        <Image height={24} width={24} src="/filter-icon.svg" alt="" />
        <button className="text-[#3B2273] text-base font-semibold cursor-pointer">
          Reset Filters
        </button>
      </div>
    </article>
  );
};

export default FilterContainer;
