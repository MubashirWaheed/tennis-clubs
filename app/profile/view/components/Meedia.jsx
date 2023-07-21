export default function Meedia(){
    return (
        <section id="media" className="w-[full] mt-[80px] max-w-[1174px]">
        <div className=" h-full w-full flex flex-col  items-center justify-center">
            <div className="flex flex-row items-center justify-between w-full">
            <h3 className="text-[#13013c] h3 ">Media</h3>
            <button className="text-[#027333] fw700 f16 lh24">
                See All Media
            </button>
            </div>
            <div className="border border-[#828282]/20 mt-[20px] w-full"></div>
        </div>
        <p className="f16 fw400 lh24 text-[#828282] mt-[23px]">
            No media has been added yet , Check back for photos and videos.
        </p>
        </section>
    );
};


