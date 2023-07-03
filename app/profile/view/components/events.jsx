import Image from "next/image";
import FindEventButton from "@/components/ui/buttons/PrimaryButton";

const Events = () => {
    return (
        <div>
            {/* top */}
            <div className="w-[82%] mx-auto mt-[80px]">
                <p className="text-[#13013C] text-[30px] Abril pb-1">
                Your Upcoming Events
                </p>
                <div className="h-[1px] bg-[#828282] w-full mt-2"></div>

                <div className="flex flex-row gap-2 py-[80px]">
                    {/* card1 */}
                    <div className="w-[380px] h-[250px] border border-[#fff] bg-[#fff] box py-10 px-8 rounded-[10px]">
                        <div className="flex flex-row justify-between items-center pb-3">
                            <p className="text-[#828282] font-sans font-semibold leading-[25px] text-[14px]">
                                Apr 20 | 10:30am
                            </p>
                            <div className="flex gap-[10px]">
                                <button className="px-[16px] py-[2px] rounded-[20px] bg-[#027333] text-[#fff]">
                                <p className="text-[14px] font-sans font-semibold leading-[25px]">
                                    Player
                                </p>
                                </button>
                                <button className="px-[16px] py-[2px] rounded-[20px] bg-[#027333] text-[#fff]">
                                <p className="text-[14px] font-sans font-semibold leading-[25px]">
                                    Provider
                                </p>
                                </button>
                            </div>
                        </div>
                        <p className="relative text-[18px] font-sans font-semibold leading-[25px] text-[#13013C]">
                        Galileo High School at George Washington High School
                        <span>
                            <Image
                            src="./src/assets/correct.png"
                            alt="aarrow"
                            className="w-[18px] h-[18px] absolute bottom-1 right-[78px] "
                            />
                        </span>
                        </p>
                        <p className="text-[#828282] text-[16px] font-sans leading-[25px] py-1">
                        Raoul Wallenberg Traditional High School -
                        <span>Boys • San Francisco, CA</span>
                        </p>

                        <p className="text-[#828282] text-[14px] font-sans leading-[20px]">
                        <p>Free Event</p>
                        <span>1 Registrations • Co-ed • Singles</span>
                        </p>
                    </div>
                    {/* card2 */}
                    <div className="bg w-[380px] h-[250px] px-10 border-2 border-[#000] border-dashed rounded-md">
                        <div className="h-full flex flex-col justify-around">
                            <div className="">
                                <p className="text-[#13013C] text-[24px] font-sans font-semibold leading-[25px]">
                                Find An Event
                                </p>
                                <p className="text-[#828282] text-[16px] font-sans  leading-[25px] py-2">
                                Play in a level-based event near you.
                                </p>
                            </div>
                            <div className="w-full flex justify-end">
                                <FindEventButton>Find A Event</FindEventButton>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* bottom */}

            <div className="w-[82%] mx-auto mt-[30px]">
                <p className="text-[#13013C] text-[40px] Abril pb-1">Recent Events</p>
                <div className="h-[1px] bg-[#828282] w-full mt-2"></div>
                {/* card */}
                <div className="w-[380px] h-[250px] border border-[#fff] bg-[#fff] box py-10 px-8 rounded-[10px] my-[40px]">
                <div className="flex flex-row justify-between items-center pb-3">
                    <p className="text-[#828282] font-sans font-semibold leading-[25px] text-[14px]">
                    Apr 20 | 10:30am
                    </p>
                    <div className="flex gap-[10px]">
                    <button className="px-[16px] py-[2px] rounded-[20px] bg-[#027333] text-[#fff]">
                        <p className="text-[14px] font-sans font-semibold leading-[25px]">
                        Player
                        </p>
                    </button>
                    <button className="px-[16px] py-[2px] rounded-[20px] bg-[#027333] text-[#fff]">
                        <p className="text-[14px] font-sans font-semibold leading-[25px]">
                        Provider
                        </p>
                    </button>
                    </div>
                </div>
                <p className="relative text-[18px] font-sans font-semibold leading-[25px] text-[#13013C]">
                    Galileo High School at George Washington High School
                    <span>
                    <Image
                        src="./src/assets/correct.png"
                        alt="aarrow"
                        className="w-[18px] h-[18px] absolute bottom-1 right-[78px] "
                    />
                    </span>
                </p>
                <p className="text-[#828282] text-[16px] font-sans leading-[25px] py-1">
                    San Francisco, CA
                </p>
                <p className="text-[#828282] text-[14px] font-sans leading-[20px]">
                    <p>Free Event</p>
                    <span>1 Registrations • Co-ed • Singles</span>
                </p>
                </div>
            </div>
        </div>
    );
};

export default Events;
