"use client";

import matchesData from "./findMatches.json";
import FilterContainer from "./components/FilterContainer";
import MatchListing from "./components/MatchListing";

// MetaData for the SEO for this page...
export const metadata = {
  title: "All Matches . MPR",
  description: "This page consists of 9 filters and a list of matches.",
};

const ListedMatches = () => {

  return (
    <section className="relative -top-[40px] flex flex-col gap-[50px] max-w-[1200px] mx-auto">
      <FilterContainer />
      <MatchListing matches={matchesData?.matches} />
    </section>
  );
};

export default ListedMatches;
