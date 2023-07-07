import homeData from "../../homeData.json";
import Image from 'next/image';
import ViewAll from "@/components/ui/buttons/PrimaryButton";
import backdropImg from "../../assets/manPlaying.png";
import whiteHeaderLine from "../../assets/whiteHeaderLine.svg";
const EventsNearYou = () => {
  return (
    <section className="h-[700px] w-[full] relative ">
      <Image src={backdropImg} alt="Background Image" className="absolute w-full h-full object-cover z-10" />
      
      <div className="h-full w-full z-20 bg-[#3B2273]/95 flex flex-col gap-[50px] items-center">
        <div className="flex flex-col gap-2">
          <h2 className="text-[#fff] h2 ">{homeData.title}</h2>
          <Image src={whiteHeaderLine} alt="Background Image"  />
        </div>
        
        <div>
          {
            homeData.eventsNearYou.map(())
          }
        </div>

      </div>
    </section>
  )
}

export default EventsNearYou