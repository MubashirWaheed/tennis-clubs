import EventsNearYou from "./components/HomeV2/EventsNearYou";
import UpcomingEvents from "./components/HomeV2/UpcomingEvents";
import PlayersNearYou from "./components/HomeV2/PlayersNearYou";
import MyClubs from "./components/HomeV2/MyClubs";
import PaidHits from "./components/HomeV2/PaidHits";
import PaidHitters from "./components/HomeV2/PaidHitters";
import CollegesNearYou from "./components/HomeV2/CollegesNearYou";
import HighSchoolsNearYou from "./components/HomeV2/HighSchoolsNearYou";
import LocalPlayers from "./components/HomeV2/LocalPlayers";
import GlobalPlayerRankings from "./components/HomeV2/GlobalPlayerRankings";
import Hero from "./components/Hero";

const LoggedInHomeV2 = () => {
  return (
    <main>
      <Hero />
      <div className="w-full max-w-[1170px] mx-auto px-2 lg:px-0">
        <UpcomingEvents />
        <EventsNearYou />
        <MyClubs />
        <PlayersNearYou />
        <PaidHits />
        <PaidHitters />
        <CollegesNearYou />
        <HighSchoolsNearYou />
        <LocalPlayers />
        <GlobalPlayerRankings />
      </div>
    </main>
  );
};

export default LoggedInHomeV2;
