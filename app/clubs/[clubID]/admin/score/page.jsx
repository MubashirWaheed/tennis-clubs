import Image from "next/image";
import Sets from "./components/Sets";
import SubmitButton from "@/components/ui/buttons/PrimaryButton";

const PostScore = () => {
  return (
    <>
      <section className="relative -top-[30px] w-full max-w-[1170px] mx-auto bg-[#fff] rounded-[10px] shadow-md">
        <div className="px-[52px] py-[48px]">
          <h2 className="h2 text-[#13013c] mb-[19px]">Post A score</h2>
          <p className="f16 fw400 lh16 md:lh24 text-[#828282] ">
            Post results for club members
          </p>
          <div className="flex gap-[10px] items-center w-full bg-white mt-[28px] h-[83px] shadow-sm rounded-[10px]">
            <div className={styles.iconWrapper}>
              <Image
                src="/Logo.svg"
                alt="Logo "
                width={40}
                height={40}
                className={styles.icon}
              />
            </div>
            <div>
              <h2 className="text-[#13013C] fw700 f16 lh24">
                Net Smashers Tennis Club
              </h2>
              <p className="text-[#027333] lh10 f14 fw700 ">Winner!</p>
            </div>
          </div>

          <Sets />
          <div className="flex gap-[10px] items-center w-full bg-white mt-[18px] h-[83px] shadow-sm rounded-[10px]">
            <Image
              width={50}
              height={50}
              src="/playerProfile.png"
              alt="Player Profile"
              className="w-[50px] h-[50px] rounded-full"
            />
            <div>
              <h2 className="text-[#13013C] fw700 f16 lh24">
                Net Smashers Tennis Club
              </h2>
              <p className="lh24 f14 fw700 text-[#027333]">Player 2</p>
            </div>
          </div>
          <div className="mt-[15px]">
            <div className=" w-full flex justify-between">
              <h2 className="text-[#3B2273] fw700 lh24 f16">
                Add doubles players
              </h2>
              <h2 className="text-[#13013C] fw700 f16">Match Outcome</h2>
            </div>
            <h2 className="text-[#3B2273] fw700 f16 lh24 mt-[10px]">
              Learn about scoring
            </h2>
          </div>
          <div className="flex gap-[10px] items-center w-full bg-white mt-[28px] h-[83px] shadow-sm rounded-[10px]">
            <h2 className="text-[#13013C] fw700">Counts For Rating</h2>
            {/* add toggle buttton here */}
          </div>
          <SubmitButton>Submit</SubmitButton>
        </div>
      </section>
    </>
  );
};
export default PostScore;

const styles = {
  iconWrapper:
    "w-[100px] h-[37px] md:w-[50px] md:h-[50px] ml-[20px] flex items-center justify-center rounded-full  cursor-pointer",
  icon: "w-[40px] h-[40px]",
};
