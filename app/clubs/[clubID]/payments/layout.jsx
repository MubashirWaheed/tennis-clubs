import Image from "next/image";
import clubData from "../clubData.json";

const PaymentsLayout = ({ children }) => {
  return (
    <main>
      {/* Header */}
      <section className="lg:h-[230px] bg-[url('/tennis-court.png')] bg-cover bg-no-repeat">
        <div className="h-full w-full bg-gradient-to-b from-transparent to-black/90">
          <div className="px-4 lg:px-0 w-full max-w-[1170px] flex items-center justify-center flex-col lg:flex-row gap-2 lg:gap-0 mx-auto py-[60px]">
            <div className="flex flex-col items-center gap-2 lg:gap-0">
              <h2 className="h2 text-white text-center">
                {clubData.clubDetails.name}
              </h2>

              <div className="flex items-center flex-col lg:flex-row gap-3 lg:gap-2">
                <p className="flex items-center gap-1 f14 lh22 fw700 text-white">
                  <span>
                    <Image
                      src="/map.svg"
                      alt="Map Icon"
                      width={24}
                      height={24}
                    />
                  </span>
                  <span>{clubData.clubDetails.location}</span>
                </p>
                <p className="flex items-center gap-1 f14 lh22 fw700 text-white">
                  <span>
                    <Image
                      src="/Game.svg"
                      alt="Game Icon"
                      width={24}
                      height={24}
                    />
                  </span>
                  <span className="flex items-center">
                    {clubData.clubDetails.noOfEvents} Events
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {children}
    </main>
  );
};

export default PaymentsLayout;
