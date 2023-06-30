import Image from "next/image";
import Register from "../components/register/register";
import circlesIcon from "./assets/circles.svg";
import headerLineIcon from "./assets/headerLine.svg";

const RegisterAsAPlayer = () => {
    return(
        <main className="bg-[#3B2273] px-[180px] py-[104px] flex items-center gap-[54px]">
            <section className="relative flex flex-col items-start gap-[31px]">
                <h1 className="h2 text-white w-[541px]">Join the Tennis Revolution - The Ultimate Tennis Community Awaits!</h1>
                <div className="flex flex-col gap-[17px] items-start">
                    <Image src={headerLineIcon} alt="headerLine" className="w-[119px] h-[20px]"/>
                    <p className="f16 fw400 lh24 text-white w-[504px]">The game is scored using a system of points, games, and sets. A point is awarded for each time a player wins a rally (a series of back-and-forth shots). Games are won by the first player or team to win four points, with a two-point lead. Sets are won by the first player or team to win six games.</p>
                </div>

                <Image src={circlesIcon} alt={"Circles"} className="absolute -top-[35px] -left-[35px] w-[70px] h-[70px]"/>
            </section>
            <Register />
        </main>
    )
}

export default RegisterAsAPlayer;