import Image from "next/image";
import PostScore from "@/components/ui/buttons/PrimaryButton";

const RecentResults = () => {
  return (
    <section className="max-w-[1170px] w-full">
      <div className="flex flex-col items-center lg:items-start">
        <h3 className="h3 text-[#13013c] mb-[19px]">Recent Results</h3>

        <div className="flex flex-col lg:flex-row gap-[33px]">
          <div className="flex justify-center items-center w-full lg:w-[849px] py-[40px] rounded-[10px] shadow-lg">
            <p className="f16 fw700 lh24 text-[#828282] opacity-70">
              No Recent Results Available
            </p>
          </div>
          <div className="py-[28px] px-[21px] w-[288px] relative rounded-[10px] shadow-lg">
            <p className="about">About</p>
            <p className="f16 fw700 lh24 text-[#828282] mt-[10px]">Age : 20</p>
            <Image
              width={74}
              height={74}
              src="/cake.svg"
              alt="cake"
              className="absolute bottom-0 right-0 h-[74px] w-[74px] "
            />
          </div>
        </div>

        <div className="w-full lg:w-[849px] flex flex-col lg:flex-row items-center justify-between border border-[#000] border-dashed rounded-[10px] px-[30px] py-[40px] mt-[30px]">
          <div className="flex flex-col items-center lg:items-start">
            <p className="f24 fw700 lh35 text-[#13013c]">Post A Score</p>
            <p className="f16 fw400 lh24 text-[#828282]">
              Self-post scores from your matches.
            </p>
          </div>
          <PostScore>Post A Score</PostScore>
        </div>
      </div>
    </section>
  );
};

export default RecentResults;
