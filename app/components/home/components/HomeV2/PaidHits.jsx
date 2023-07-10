import Image from "next/image";
import ViewAll from "@/components/ui/buttons/PrimaryButton";
import blueHeaderLine from "../../assets/blueHeaderLine.svg";

const PaidHits = () => {
  return (
    <section className="py-[90px] w-[full] bg-[#fff]">
      <div className=" h-full w-full flex flex-col  items-center justify-center">
        <div className="flex flex-row items-center justify-between w-full">
          <h2 className="text-[#13013c] h2 ">Paid Hits</h2>
          <button className="text-[#027333] fw700 f16 lh24">View All</button>
        </div>
        <div className="border border-[#828282]/20 mt-[20px] w-full"></div>
      </div>
      <div className="mt-[23px]">
        <p className="f16 fw400 font-sans lh24 text-[#828282]">
          There are no paid hits in your area
        </p>
      </div>
    </section>
  );
};

export default PaidHits;
