
import Image from "next/image";
import ViewAll from "@/components/ui/buttons/PrimaryButton";

const PaidHits = () => {
  return (
    <section className="h-[376px] w-[full] flex flex-col justify-center items-center gap-[70px]">
      <div className="flex flex-col items-center gap-[15px]">
        <h2 className="text-[#13013C] h2 ">Paid Hits</h2>
        <Image
        width={119}
        height={20}
          src="/blueHeaderLine.svg"
          alt="blueHeaderLine"
          className="w-[119px] h-[20px]"
        />
        <p className="f16 fw400 font-sans lh24 text-[#828282]">
          There are no paid hits in your area
        </p>
      </div>
      <ViewAll>View All</ViewAll>
    </section>
  );
};

export default PaidHits;
