const Card = ({ division }) => {
  console.log("inside the card:", division);
  const { divisionName, entryFee, format, gender } = division;
  return (
    <div className=" max-w-[370px] w-full flex flex-col bg-white shadow-lg my-[20px] rounded-2xl">
      <div className="p-[25px]">
        <div className="flex justify-between items-center">
          <h4 className="fw700 f20 text-darkPurple">
            {divisionName}
            {/* Coed Singles UTR 3-4.99 */}
          </h4>
          <p className="text-darkPurple fw700">
            <span className="text-grey line-through">$72 </span>/ ${entryFee}
          </p>
        </div>
        <div className="mt-[10px]">
          <p className="text-grey f400 f16">
            {format}
            {/* First Match Backdraw, Two Sets W/ Match Tiebreaker */}
            <br />
            Officials
            <br />
            Singles
          </p>
        </div>
      </div>
      <div className="py-[20px] flex w-full bg-[#FAFBFF] justify-around items-center">
        <div>
          <p className="text-grey f14 f700">Players</p>
          <p className="text-darkPurple f14 fw700">10/12</p>
        </div>
        <div>
          <p className="text-grey f14 f700">UTR</p>
          <p className="text-darkPurple f14 fw700">5.0 - 7.0</p>
        </div>
        <div>
          <p className="text-grey f14 f700">Age</p>
          <p className="text-darkPurple f14 fw700">U 18</p>
        </div>
        <div>
          <p className="text-grey f14 f700">Gender</p>
          <p className="text-darkPurple f14 fw700">
            {gender}
            {/* Co-ed */}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
