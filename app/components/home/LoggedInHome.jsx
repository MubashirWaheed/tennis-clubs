import EventsNearYou from "./components/HomeV1/EventsNearYou";
import UpcomingEvents from "./components/HomeV1/UpcomingEvents";
import PlayersNearYou from "./components/HomeV1/PlayersNearYou";
import MyClubs from "./components/HomeV1/MyClubs";
import PaidHits from "./components/HomeV1/PaidHits";
import PaidHitters from "./components/HomeV1/PaidHitters";
import CollegesNearYou from "./components/HomeV1/CollegesNearYou";
import HighSchoolsNearYou from "./components/HomeV1/HighSchoolsNearYou";
import LocalPlayers from "./components/HomeV1/LocalPlayers";
import GlobalPlayerRankings from "./components/HomeV1/GlobalPlayerRankings";
import Hero from "./components/Hero";

const LoggedInHome = () => {
  return (
    <main>
      <Hero />
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
    </main>
  );
};

export default LoggedInHome;
