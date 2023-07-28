import Image from "next/image";
const Sets = () => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-12">
      <div className="flex flex-col gap-4">
        <div className="flex gap-4">
          <div className="bg-blue-300 inline-block ">
            <p className="text-center">SET 1</p>
            <input
              className="text-center fw700 f24 lh35 text-[#828282] w-[75px] h-[75px] rounded-lg outline-none  border-2 border-dashed border-[#828282]"
              type="number"
              value="5"
              placeholder="6"
            />
          </div>
          <div className="bg-blue-300 inline-block ">
            <p className="text-center">SET 2</p>
            <input
              className="text-center fw700 f24 lh35 text-[#828282] w-[75px] h-[75px] rounded-lg outline-none  border-2 border-dashed border-[#828282]"
              type="number"
              value=""
              placeholder="6"
            />
          </div>
          <div className="bg-blue-300 inline-block ">
            <p className="text-center">SET 3</p>
            <input
              className="text-center fw700 f24 lh35 text-[#828282] w-[75px] h-[75px] rounded-lg outline-none  border-2 border-dashed border-[#828282]"
              type="number"
              value=""
              placeholder="0"
            />
          </div>
        </div>
        <div className="flex gap-4">
          <div className="bg-blue-300 inline-block ">
            <input
              className="text-center fw700 f24 lh35 text-[#828282] w-[75px] h-[75px] rounded-lg outline-none  border-2 border-dashed border-[#828282]"
              type="number"
              value=""
              placeholder="7"
            />
          </div>
          <div className="bg-blue-300 inline-block ">
            <input
              className="text-center fw700 f24 lh35 text-[#828282] w-[75px] h-[75px] rounded-lg outline-none  border-2 border-dashed border-[#828282]"
              type="number"
              value=""
              placeholder="3"
            />
          </div>
          <div className="bg-blue-300 inline-block ">
            <input
              className="text-center fw700 f24 lh35 text-[#828282] w-[75px] h-[75px] rounded-lg outline-none  border-2 border-dashed border-[#828282]"
              type="number"
              value=""
              placeholder="1"
            />
          </div>
        </div>
      </div>
      <div className="inline-block">
        <button className="bg-red-200 px-[40px] py-[30px] rounded-lg">
          <Image src="/switch-arrow.svg" width={24} height={24} />
        </button>
      </div>
    </div>
  );
};

export default Sets;
