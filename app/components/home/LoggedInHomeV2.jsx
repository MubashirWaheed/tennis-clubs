import Image from "next/image";
import Ball from "../../assets/Ball.svg";
import HorizontalBat from "../../assets/HorizontalBat.svg";
import VerticalBat from "../../assets/VerticalBat.svg";
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

const LoggedInHomeV2 = () => {
  return (
    <main>
      <section className="relative bg-[#3B2273]">
        <h1 className="h2 text-white px-[186px] py-[60px]">Home V2</h1>
        <Image
          src={Ball}
          alt=""
          className="absolute bottom-0 right-0 w-[100px] h-[100px] object-contain"
        />
        <Image
          src={HorizontalBat}
          alt=""
          className="absolute left-0 bottom-2"
        />
        <Image src={VerticalBat} alt="" className="absolute left-0 bottom-0" />
      </section>

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

export default LoggedInHomeV2;
