"use client";
import LoadMore from "@/components/ui/buttons/SecondaryButton";
import matchesData from "./findMatches.json";
import FilterContainer from "./components/FilterContainer";
import MatchListing from "./components/MatchListing";

const ListedMatches = () => {

  return (
    <section className="relative -top-[40px] flex flex-col items-center gap-[50px] w-full max-w-[1170px] mx-auto">
      <FilterContainer />
      <MatchListing matches={matchesData?.matches} />
      <LoadMore>Load More</LoadMore>
    </section>
  );
};

export default ListedMatches;
