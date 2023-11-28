import LocationCard from "../../../components/LocationCard";
import Aside from "../../../components/aside";
import Card from "../Card";

const Overview = ({ eventData }) => {
  return (
    <div className="flex flex-wrap w-full items-center md:items-start justify-center  ">
      <main className="basis-2/3 grow flex flex-col">
        <h5 className="fw700 text-darkPurple f24">Description</h5>
        <p className="text-grey f16">
          {/* {eventData?.eventDescription} */}
          Join Us for our HRT Legend Series (And become the Ultimate HRT Legend)
          <br />
          Junior Circuit Qualifier Boys/Girls UTR 9.5 and Below
          <br />
          <br />
          Location: Redwood High School: 395 Doherty Drive, Larkspur, CA (or
          alternate locations in Marin if needed)
          <br />
          <br />
          Come play in the HRT Legend Series, a special series of 7 UTR
          tournaments from April through June 2023 sponsored by HRT, the premier
          high-performance junior tennis academy in Marin.
          <br />
          <br />
          HRT will award trophies for each flight winner. The more events you
          win over the full series, the bigger the trophy is:
          <br />1 flight won = Regular Trophy
          <br />
          3 flights won = Super Trophy
          <br />5 flights won = HRT Ultimate Trophy
          <br />
          <br />
          Junior one-day tournaments are designed to guarantee competitive
          matches using UTR to group players according to skill level. The
          Fast4, level-based format provides for 3 usually very close matches in
          about 3 hours.
          <br />
          <br />
          <br />- Get rated or improve your Verified UTR Rating. All scores
          count towards Verified UTR.
          <br />- All players will be placed in a 3-hour window, at least 2
          matches guaranteed. Windows of play will be from 8:00-11:00,
          11:00-2:00, and 2:00-5:00. We will let you know your match time before
          the event.
        </p>

        {/* Cards */}
        <div className="mt-[20px]">
          <h5 className="fw700 text-darkPurple f24">Divisions</h5>
          <div className="flex w-full items-center justify-center md:gap-4 flex-wrap md:flex-nowrap ">
            <Card />
            <Card />
          </div>
        </div>
      </main>
      <div className="md:basis-1/3 flex flex-col justify-start items-center w-full ">
        <Aside />
        <LocationCard />
      </div>
    </div>
  );
};

export default Overview;
