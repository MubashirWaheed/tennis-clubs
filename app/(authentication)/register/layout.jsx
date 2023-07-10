import Image from "next/image";
import circlesIcon from "../assets/circles.svg";
import headerLineIcon from "../assets/headerLine.svg";
import vector1 from "../assets/vector-1.svg"
import vector2 from "../assets/vector-2.svg"
import vector3 from "../assets/vector-3.svg"
import vector4 from "../assets/vector-4.svg"
import vector5 from "../assets/vector-5.svg"
import vector6 from "../assets/vector-6.svg"

const RegisterLayout = ({ children}) => {
    return (
        <main className="relative bg-[#3B2273] px-[180px] h-[900px] flex items-center gap-[54px]">
            <section className="relative flex flex-col items-start gap-[31px]">
                <h1 className="h2 text-white w-[541px]">Join the Tennis Revolution - The Ultimate Tennis Community Awaits!</h1>
                <div className="flex flex-col gap-[17px] items-start">
                    <Image src={headerLineIcon} alt="headerLine" className="w-[119px] h-[20px]"/>
                    <p className="f16 fw400 lh24 text-white w-[504px]">The game is scored using a system of points, games, and sets. A point is awarded for each time a player wins a rally (a series of back-and-forth shots). Games are won by the first player or team to win four points, with a two-point lead. Sets are won by the first player or team to win six games.</p>
                </div>

                <Image src={circlesIcon} alt={"Circles"} className="absolute -top-[35px] -left-[35px] w-[70px] h-[70px]"/>
            </section>

            {children}

            <Image src={vector4} alt="Vector1" className="pointer-events-none z-10 text-[#828282] absolute right-0 -translate-y-1/2 top-[50%] w-[350px] h-[480px]"/>
            <Image src={vector1} alt="Vector2" className="pointer-events-none z-10 text-[#828282] absolute right-0 -translate-y-1/2 top-[50%] w-[400px] h-[540px]"/>
            <Image src={vector2} alt="Vector3" className="pointer-events-none z-10 text-[#828282] absolute right-0 -translate-y-1/2 top-[50%] w-[450px] h-[600px]"/>
            <Image src={vector3} alt="Vector4" className="pointer-events-none z-10 text-[#828282] absolute right-0 -translate-y-1/2 top-[50%] w-[500px] h-[660px]"/>
            <Image src={vector5} alt="Vector5" className="pointer-events-none z-10 text-[#828282] absolute right-0 -translate-y-1/2 top-[50%] w-[550px] h-[890px]"/>
            <Image src={vector6} alt="Vector6" className="pointer-events-none z-10 text-[#828282] absolute right-0 -translate-y-1/2 top-[50%] w-[600px] h-[900px]"/>
        </main>
    )
}

export default RegisterLayout;