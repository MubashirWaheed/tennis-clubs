import SearchProfile from "@/components/ui/buttons/PrimaryButton";
import CreateProfile from "@/components/ui/buttons/SecondaryButton";

const ClaimOrCreateProfile = () => {
  const data = {
    heading: "Claim or create your tennis profile.",
    points: [
      "If you played in a tournament or league recently, Universal Tennis may already have a player profile with your results.",
      "Based on your name, we did not find any matching profiles in our system.",
      "Feel free to search for an alternate spelling of your name, or create a new profile below.",
    ],
  };
  return (
    <article className="px-[63px] py-[58px] bg-[#fff] rounded-[10px]">
      <div>
        <h3 className="h3 text-[#13013c] text-center mb-[20px]">
          {data.heading}
        </h3>
        {data.points.map((point, index) => (
          <div key={index} className="w-[493px] flex flex-col mb-[20px]">
            <p className="f14 fw400 lh24 text-[#05192C] ">{point}</p>
          </div>
        ))}
      </div>
      <div className="flex flex-col w-full gap-[15px]">
        <SearchProfile>Search For A Profile</SearchProfile>
        <CreateProfile>Create A New Profile</CreateProfile>
      </div>
    </article>
  );
};

export default ClaimOrCreateProfile;
