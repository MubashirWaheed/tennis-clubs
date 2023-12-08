import Image from "next/image";

const PlayerBank = ({ registeredPlayers, showMenu }) => {
  console.log("registeredPlayers in the playerBank: ", registeredPlayers);
  return (
    <div
      className={`${
        showMenu ? "max-h-full" : "max-h-0 invisible"
      } z-50 bg-white text-sm text-center transition-all duration-500 ease-in-out overflow-hidden`}
    >
      {registeredPlayers?.map((player, index) => {
        return (
          <div
            key={index}
            className="border-b border-1 border-purple px-[20px]"
          >
            <div className="flex gap-2 items-center py-[20px]">
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  className="w-5 h-5 cursor-pointer text-purple border-1 border-purple rounded-md focus:ring-0"
                  //   checked
                />
              </label>
              <div className="flex justify-between w-full">
                <div className="flex flex-col items-start ">
                  <p className="text-darkPurple">{player.name}</p>
                  <p className="text-grey">
                    {player.location}
                    <span className="text-red-600"> • Not Placed </span>
                  </p>
                </div>

                <Image
                  className="cursor-pointer"
                  src="/more_ic.svg"
                  width={25}
                  height={25}
                  alt="more"
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PlayerBank;
