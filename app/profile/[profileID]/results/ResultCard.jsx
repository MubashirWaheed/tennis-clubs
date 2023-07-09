import verifiedIcon from "./assets/verifiedIcon (2).svg";
import logo from "./assets/logo (2).svg";
import Image from "next/image";

const ResultCard = ({ result }) => {
  return (
    <article className="shadow-sm min-w-[770px] py-[30px] px-[3px] flex flex-col gap-[36px] border-t border-[#828282]/30">
      <div className="w-full flex flex-col">
        <div className="flex items-center w-full justify-between">
          <h4 className="f-Abril f24 fw400 lh50 text-[#13013C]">
            {result?.matchName}
          </h4>
          <p className="f16 fw700 lh24 text-[#828282]">{result?.date}</p>
        </div>
        <p className="f16 fw700 lh24 text-[#828282]">{result?.matchType}</p>
      </div>
      <div className="w-full px-[26px] flex flex-col gap-[50px]">
        <div className="w-full flex items-center justify-around">
          <p className="flex-1 f16 fw700 lh24 text-[#828282]">Players</p>
          <p className="flex-[0.5] f16 fw700 lh24 text-[#828282]">MPR</p>
          <p className="flex-[0.5] f16 fw700 lh24 text-[#828282]">Score</p>
        </div>
        <div className="flex flex-col gap-[10px]">
          <div className="flex items-center gap-[10px]">
            <p className="f16 fw400 lh22 text-[#828282]">
              {result?.matchDateAndTime}
            </p>
            <Image
              src={verifiedIcon}
              alt="Verified Icon"
              className="w-[19px] h-[20px]"
            />
            <Image src={logo} alt="Logo" className="w-[24px] h-[20px]" />
          </div>
          <div></div>
        </div>
      </div>
    </article>
  );
};

export default ResultCard;
