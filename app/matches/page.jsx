"use client";

import matchesData from "./findMatches.json";
import FilterContainer from "./components/FilterContainer";
import MatchListing from "./components/MatchListing";

const ListedMatches = () => {

  return (
    <section className="relative -top-[40px] flex flex-col gap-[50px] w-full max-w-[1170px] mx-auto">
      <FilterContainer />
      <MatchListing matches={matchesData?.matches} />
    </section>
  );
};

export default ListedMatches;
