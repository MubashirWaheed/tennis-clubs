import Image from "next/image";
const Aside = () => {
  return (
    <aside className="md:mt-[20px] md:basis-1/4  justify-center flex items-start ">
      <div className="rounded-lg px-[21px] py-[28px] bg-[#fff] shadow-md w-full lg:w-[290px]">
        <p className="text-[20px] fw700 lh24 font-Abril Fatface text-[#13013c]">
          Organizer
        </p>

        <div className="flex items-center gap mt-[40px] ">
          <div className="px-[20px]">
            <Image
              width={77}
              height={77}
              src="/human.png"
              alt="human"
              className="w-[77px] h-[77px] rounded-full"
            />
          </div>
          <div className="flex flex-col ">
            <p className="f16 fw700  text-[#13013c]">Philip B. Simpson</p>
            <p className="text-[#828282] f16 fw400 lh24">Head organizer</p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Aside;
