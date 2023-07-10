import Point from "./Point";
import GetPower from "@/components/ui/buttons/PrimaryButton";

const YourTennisRating = () => {
  const Rating = [
    {
      heading: "Your Tennis Rating",
      rating: "1.00 - 3.00",
      paragraph:
        "Your provisional UTR rating is 1.00 - 3.00. This rating most closely resembles beginner level players. Advance your rating by playing more matches. See you on the courts!",
    },
    {
      heading: "Power your profile",
      paragraph:
        "Get more out of Universal Tennis with a Power Subscription. Benefits include:",
      points: [
        "See 2 decimal UTR Ratings for everyone",
        "Play in unlimited Verified events at a discount",
        "Get detailed metrics and results analysis",
        "Access priority support",
      ],
    },
  ];

  return (
    <article className="px-[23px] py-[21px] bg-[#fff] rounded-[10px]">
      <div className="flex flex-col ">
        <p className="tag mb-[4px] w-[87px] text-center">TENNIS</p>
        {Rating.map((item, index) => (
          <div key={index} className="mb-[32px]">
            <div className="flex justify-between items-center">
              <h4 className="h4 text-[#13013c]">{item.heading}</h4>
              <h4 className="h4 text-[#13013c]">{item.rating}</h4>
            </div>
            <p className="text-[#828282] f16 fw400 lh24 w-[620px] mt-[7px] ">
              {item.paragraph}
            </p>
            {item.points && (
              <div className="mt-[7px]">
                {item.points.map((point, pointIndex) => (
                  <div key={pointIndex} className="flex items-start">
                    <Point />
                    <p className="text-[#828282] f16 fw400 lh24">{point}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}

        <GetPower>Get Power</GetPower>
      </div>
    </article>
  );
};

export default YourTennisRating;
