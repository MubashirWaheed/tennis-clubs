
import Image from "next/image";
import ViewAll from "@/components/ui/buttons/PrimaryButton";

const PaidHits = () => {
  return (
    <section className="w-[full]">
      <div className="py-[20px] md:py-[40px] lg:py-[90px] px-2 lg:px-0 w-full max-w-[1170px] mx-auto flex flex-col justify-center items-center gap-[70px]">
        <div className="flex flex-col items-center gap-[15px]">
          <h2 className="text-[#13013C] h2 text-center lg:text-left">
            Paid Hits
          </h2>
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
      </div>
    </section>
  );
};

export default PaidHits;
