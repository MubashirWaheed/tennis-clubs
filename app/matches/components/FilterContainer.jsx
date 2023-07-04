import Image from "next/image";
import FilterIcon from '../assets/filter-icon.svg';
import FilterConfig from "./FilterConfig";
import pointerIcon from "../assets/pointer.svg";
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
        <article className="bg-white rounded-lg shadow-lg h-[80px] w-full px-6 py-5 flex items-center gap-2">
            <div className="flex items-center justify-between flex-1">
                {filters?.map((filter, index) => (
                    <div key={index} className="relative">
                        <button
                            onClick={filter.openFilter}
                            className="text-base text-[#3B2273] cursor-pointer font-semibold border border-[#3B2273] focus:bg-[#3B2273] focus:text-white bg-white rounded-lg px-3 py-2"
                        >
                            {filter.filterTitle}
                        </button>
                        {
                            filter.isFilterOpen && 
                            <>
                                <div className="absolute top-[90px] -left-[20px] p-[30px] bg-white shadow-xl border-t-[3px] border-[#3B2273] rounded-[10px]">
                                    {filter.filterTitle === "Sport" && <SportsFilter />}
                                    {filter.filterTitle === "Location" && <LocationFilter />}
                                    {filter.filterTitle === "Upcoming Events" && <UpcomingEventsFilter />}
                                    {filter.filterTitle === "Event Series" && <EventSeriesFilter />}
                                    {filter.filterTitle === "Type" && <TypeFilter />}
                                    {filter.filterTitle === "Ball Type" && <BallTypeFilter />}
                                    {filter.filterTitle === "Verified Event" && <VerifiedEventFilter />}
                                    {filter.filterTitle === "Prize Money" && <PrizeMoneyFilter />}
                                    {filter.filterTitle === "More..." && <MoreFilter />}
                                </div>
                                <Image src={pointerIcon} alt="Pointer Icon" className="absolute top-[73px] left-7 w-[18px] h-[21px]"/>
                            </>
                        }
                    </div>
                ))}
            </div>
            <div className="flex gap-[5px] items-center">
                <Image src={FilterIcon} alt="" />
                <button className="text-[#3B2273] text-base font-semibold cursor-pointer">Reset Filters</button>
            </div>
        </article>
    )
}

export default FilterContainer;