import Image from "next/image";

const ResultCard = ({ result }) => {
  return (
    <article className="shadow-sm w-full md:w-[500px] lg:min-w-[770px] py-[30px] px-[3px] flex flex-col gap-[36px] border-t border-[#828282]/30">
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
              width={19}
              height={20}
              src="/verifiedIcon.svg"
              alt="Verified Icon"
              className="w-[19px] h-[20px]"
            />
            <Image
              width={24}
              height={20}
              src="/Logo.svg"
              alt="Logo"
              className="w-[24px] h-[20px]"
            />
          </div>
          <div className="flex flex-col gap-[10px]">
            {result.playerData.map((player, index) => (
              <div
                key={index}
                className="w-full flex items-center justify-between"
              >
                <Image
                  src="/France.svg"
                  alt="France Flag Icon"
                  width={20}
                  height={15}
                  className="mr-2"
                />
                <p className="flex items-end gap-1 flex-1">
                  <span className="f18 fw700 lh30 text-[ #13013C]">
                    {player.playerName}
                  </span>
                  <span className="f12 fw700 lh30 text-[#13013C]">
                    {player.playerSuffix}
                  </span>
                </p>
                <p className="flex-[0.5] f20 fw700 lh30 text-[#828282]">
                  {player.MPR}
                </p>
                <p className="flex-[0.5] text-[#828282] f20 fw700 lh30 flex items-center gap-[18px]">
                  {player.score.map((score, index) => (
                    <span key={index}>{score}</span>
                  ))}
                  <span>
                    {player.isWinner && (
                      <Image
                        src="/winnerIcon.svg"
                        width={12}
                        height={20}
                        alt="Winner Icon"
                      />
                    )}
                  </span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
};

export default ResultCard;
