import Image from "next/image";
import cake from "../../assets/cake.svg";
import PostScore from "@/components/ui/buttons/PrimaryButton";

const RecentResults = () => {
  return (
    <section className="max-w-[1174px] w-full">
      <div>
        <h3 className="h3 text-[#13013c] mb-[19px]">Recent Results</h3>

        <div className="flex gap-[33px]">
          <div className="flex justify-center items-center w-[849px] py-[40px] rounded-[10px] shadow-lg">
            <p className="f16 fw700 lh24 text-[#828282] opacity-70">
              No Recent Results Available
            </p>
          </div>
          <div className="py-[28px] px-[21px] w-[288px] relative rounded-[10px] shadow-lg">
            <p className="about">About</p>
            <p className="f16 fw700 lh24 text-[#828282] mt-[10px]">Age : 20</p>
            <Image
              src={cake}
              alt="cake"
              className="absolute bottom-0 right-0"
            />
          </div>
        </div>

        <div className="w-[849px] flex justify-between border border-[#000] border-dashed rounded-[10px] items-center px-[30px] py-[40px] mt-[30px]">
          <div>
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
