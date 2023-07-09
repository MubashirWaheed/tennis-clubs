import Image from "next/image";
import tenniscourt from "../assets/tennis-court.png";
import clubData from "../clubData.json";
import map from "../assets/map.svg";
import Game from "../assets/Game.svg";

const PaymentsLayout = ({ children }) => {
  return (
    <main>
      {/* Header */}
      <section className="relative h-[223px]">
        <div className="absolute h-full  bg-gradient-to-b from-transparent to-black/90 w-full  mx-auto flex justify-center items-center px-[185px] py-[61px]">
          <div className="flex flex-col gap-[5px]">
            <h2 className="h2 text-[#fff]">{clubData.clubDetails.name}</h2>
            <div className="flex gap-[10px]">
              <div className="flex items-center gap-[5px]">
                <Image src={map} alt="map" className="w-[24px]" />
                <p className="f14 fw700 lh22 text-[#fff]">
                  {clubData.clubDetails.location}
                </p>
              </div>
              <div className="flex items-center gap-[5px]">
                <Image src={Game} alt="Game" className="w-[24px]" />
                <p className="f14 fw700 lh22 text-[#fff] flex gap-[5px]">
                  {clubData.clubDetails.noOfEvents}
                  <span>Events</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <Image
          src={tenniscourt}
          alt="Header Background Image"
          className="absolute -z-10 top-0 insext-x-0 w-full h-full object-cover object-bottom"
        />
      </section>
      {children}
    </main>
  );
};

export default PaymentsLayout;
