import Image from "next/image";
import PostScoreButton from "@/components/ui/buttons/PrimaryButton";
import ageImg from "../../assets/age.svg";

const Results = () => {
    return (
        <div>
            {/* top */}
            <div className="bg-[#fff] w-[82%] mx-auto">
                <p className="py-2 text-[#13013c] text-[30px] Abril font-medium leading-[30px]">
                Recent Results
                </p>
                <div className="box  flex gap-3 w-full">
                    <div className="flex justify-center items-center  w-[80%]">
                        <p className="text-[#828282] text-[16px] font-sans font-semibold leading-[25px] opacity-70">
                        No Recent Results Available
                        </p>
                    </div>
                    <div className="box w-[20%]">
                        <p className="text-[#13013c] text-[16px] Abril font-medium leading-[30px] px-3">
                        About
                        </p>
                        <p className="text-[#828282] text-[16px] font-sans font-semibold leading-[25px] px-3">
                        Age : 20
                        </p>
                        <Image
                        src={ageImg}
                        alt="Age Image"
                        className="relative left-[180px]"
                        />
                    </div>
                </div>
            </div>
            {/* bottom */}
            <div className="bg-[#fff] w-[82%] mx-auto mt-2">
                <div className="box w-[80%] h-[130px] flex justify-between px-14 items-center">
                    <div className="flex flex-col">
                        <p className="text-[#13013c] text-[30px] Abril font-medium leading-[30px]">
                        Post A Score
                        </p>
                        <p className="text-[#828282] text-[16px] font-sans font-semibold leading-[25px] py-1">
                        Self-post scores from your matches.
                        </p>
                    </div>
                    <div>
                        <PostScoreButton>Post A Score</PostScoreButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Results;
