// "use client";
import LoadMore from "@/components/ui/buttons/SecondaryButton";
import matchesData from "./findMatches.json";
import FilterContainer from "./components/FilterContainer";
import MatchListing from "./components/MatchListing";
import { getProfile } from "@/lib/services/getProfile";
import { getCurrentUser } from "@/lib/services/getCurrentUser";
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";

const ListedMatches = async () => {
  // const user = await getCurrentUser();
  // get the profile from the global storage
  const session = await getServerSession(authOptions);
  console.log("session:", session);

  if (!session || !session?.user) {
    return redirect("/signin");
  }
  const profile = await getProfile(session.user.id);

  if (!profile) return redirect("/register/profile");

  return (
    <section className="relative -top-[40px] flex flex-col items-center gap-[50px] w-full max-w-[1170px] mx-auto">
      <FilterContainer />
      <MatchListing matches={matchesData?.matches} />
      <LoadMore>Load More</LoadMore>
    </section>
  );
};

export default ListedMatches;
