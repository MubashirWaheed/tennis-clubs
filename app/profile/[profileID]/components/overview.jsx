import RecentResults from "./RecentResults";
import EventsNearYou from "./EventsNearYou";
import Media from "./Media";

const Overview = () => {
  return (
    <section className="w-full bg-[#fff]">
      <RecentResults />
      <EventsNearYou />
      <Media />
    </section>
  );
};

export default Overview;
