import homeData from "../../homeData.json";
import Image from "next/image";
import blueHeaderLine from "../../assets/blueHeaderLine.svg";
const GlobalPlayerRankings = () => {
  return (
    <section className="bg-[#FAFBFF] py-[95px]  w-full flex flex-col items-center">
      <div className="flex flex-col w-full">
        {/* Header */}
        <div className="flex flex-row items-center justify-between w-full">
          <h2 className="h2 text-[#13013C]">Global player rankings</h2>
          <button className="text-[#027333] fw700 f16 lh24">View All</button>
        </div>
        <div className="border border-[#828282]/20 mt-[20px] w-full"></div>

        {/* Tags */}
        <div className="flex items-center gap-[10px] mt-[29px]">
          {homeData.globalPlayerRankings.filters.map((filter, index) => (
            <button
              key={index}
              className="px-[20px] py-[8px] rounded-[8px] f14 fw700 lh24 uppercase border border-[#3B2273] bg-white cursor-pointer text-[#3B2273] focus:text-white focus:bg-[#3B2273]"
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Data */}
        <ul className="flex flex-col gap-[15px] mt-[51px]">
          {homeData.globalPlayerRankings.filteredData.map((data) => (
            <li
              key={data.id}
              className="flex items-center bg-white rounded-[10px] gap-[150px] shadow-lg px-[39px] py-[16px]"
            >
              <div className="flex-1 flex gap-[60px] items-center">
                <p className="f20 fw700 lh28 text-[#13013C]">{data.id}</p>
                <p className="f20 fw700 lh28 text-[#13013C]">
                  {data.playerName}
                </p>
              </div>
              <p className="f20 fw700 lh28 text-[#828282]">{data.gender}</p>
              <p className="f20 fw700 lh28 text-[#828282]">{data.place}</p>
              <p className="f20 fw700 lh28 text-[#828282]">
                {data.randomData1}
              </p>
              <p className="f20 fw700 lh28 text-[#13013C]">
                {data.randomData2}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default GlobalPlayerRankings;
