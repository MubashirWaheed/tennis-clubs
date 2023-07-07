import Image from "next/image";
import Ball from "../../assets/Ball.svg";
import HorizontalBat from "../../assets/HorizontalBat.svg";
import VerticalBat from "../../assets/VerticalBat.svg";
import EventsNearYou from "./components/HomeV1/EventsNearYou";
import UpcomingEvents from "./components/HomeV1/UpcomingEvents";

const LoggedInHome = () => {
    return(
        <main>
            <section className="relative bg-[#3B2273]">
                <h1 className="h2 text-white px-[186px] py-[60px]">Home V1</h1>
                <Image src={Ball} alt="" className="absolute bottom-0 right-0 w-[100px] h-[100px] object-contain"/>
                <Image src={HorizontalBat} alt="" className="absolute left-0 bottom-2"/>
                <Image src={VerticalBat} alt="" className="absolute left-0 bottom-0"/>
            </section>
            <UpcomingEvents />
            <EventsNearYou />
        </main>
    )
}

export default LoggedInHome;