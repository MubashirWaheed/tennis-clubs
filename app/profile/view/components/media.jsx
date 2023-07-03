const Media = () => {
    return (
        <div>
            {/* top */}
            <div className="w-[82%] mx-auto mt-[80px]">
                <div className="flex justify-between items-center">
                    <p className="text-[#13013C] text-[30px] Abril pb-1">Media</p>
                    <p className="text-[16px] text-[#027333] font-semibold leading-[25px]">
                        See All Media
                    </p>
                </div>
                <div className="h-[1px] bg-[#828282] w-full mt-3"></div>
                    <p className="text-[#828282] text-[16px] font-sans font-medium leading-[25px] py-5">
                        No media has been added yet , Check back for photos and videos.
                    </p>
            </div>

            {/* bottom */}
            <div className="w-[82%] mx-auto mt-[80px]">
                <p className="text-[#13013C] text-[30px] Abril pb-1">Clubs</p>
                <div className="h-[1px] bg-[#828282] w-full mt-3"></div>
                <p className="text-[#828282] text-[16px] font-sans font-medium leading-[25px] py-5">
                    No media has been added yet , Check back for photos and videos.
                </p>
            </div>
        </div>
    );
};

export default Media;
