"use client";
import circlesIcon from "./(authentication)/assets/circles.svg";
import headerLineIcon from "./(authentication)/assets/headerLine.svg";
import vector1 from "./(authentication)/assets/vector-1.svg";
import vector2 from "./(authentication)/assets/vector-2.svg";
import vector3 from "./(authentication)/assets/vector-3.svg";
import vector4 from "./(authentication)/assets/vector-4.svg";
import vector5 from "./(authentication)/assets/vector-5.svg";
import vector6 from "./(authentication)/assets/vector-6.svg";
import JoinPlayerBTN from "../components/ui/buttons/PrimaryButton";
import JoinClubBTN from "../components/ui/buttons/PrimaryButton";
import Image from "next/image";

import playerImage from "./assets/homePagePlayer.png";
import { useRouter } from "next/navigation";
import LoggedInHomeV2 from "./components/home/LoggedInHomeV2";
// import LoggedInHome from "./components/home/LoggedInHome";

const Home = () => {
  const router = useRouter();
  let isLoggedIn = true;

  return (
    <>
      {isLoggedIn ? (
        <LoggedInHomeV2 />
      ) : (
        <main className="relative bg-[#3B2273] px-[180px] h-[900px] flex items-center gap-[35px]">
          <section className="relative flex flex-col items-start gap-[31px]">
            <h1 className="h2 text-white w-[549px]">
              Your Ultimate Guide to Tennis
            </h1>
            <div className="flex flex-col gap-[17px] items-start">
              <Image
                src={headerLineIcon}
                alt="headerLine"
                className="w-[119px] h-[20px]"
              />
              <p className="f16 fw400 lh24 text-white w-[500px]">
                Another important feature could be profiles of famous tennis
                players from around the world. This could include information on
                their playing style, career highlights, and current ranking.A
                section dedicated to coaching and training can also be included,
                which offers tips on improving tennis skills, such as serving,
                volleying, and footwork.
              </p>
            </div>
            <div className="flex items-center gap-[22px] w-full justify-start">
              <JoinPlayerBTN
                type="button"
                onClick={() => router.push("/register")}
              >
                Join As A Player
              </JoinPlayerBTN>
              <JoinClubBTN
                type="button"
                onClick={() => router.push("/clubs/new2")}
              >
                Join As A Club
              </JoinClubBTN>
            </div>
            <Image
              src={circlesIcon}
              alt={"Circles"}
              className="absolute -top-[35px] -left-[35px] w-[70px] h-[70px]"
            />
          </section>

          {/* Player Image on the right side. */}
          <section className="z-20 w-[751px] h-[501px]">
            <Image
              src={playerImage}
              alt="Player Image On Home page"
              className="rounded-xl z-20 w-full h-full object-cover"
            />
          </section>

          {/* Wave Design on the right side. */}
          <Image
            src={vector4}
            alt="Vector1"
            className="z-10 text-[#828282] absolute right-0 -translate-y-1/2 top-[50%] w-[350px] h-[480px]"
          />
          <Image
            src={vector1}
            alt="Vector2"
            className="z-10 text-[#828282] absolute right-0 -translate-y-1/2 top-[50%] w-[400px] h-[540px]"
          />
          <Image
            src={vector2}
            alt="Vector3"
            className="z-10 text-[#828282] absolute right-0 -translate-y-1/2 top-[50%] w-[450px] h-[600px]"
          />
          <Image
            src={vector3}
            alt="Vector4"
            className="z-10 text-[#828282] absolute right-0 -translate-y-1/2 top-[50%] w-[500px] h-[660px]"
          />
          <Image
            src={vector5}
            alt="Vector5"
            className="z-10 text-[#828282] absolute right-0 -translate-y-1/2 top-[50%] w-[550px] h-[890px]"
          />
          <Image
            src={vector6}
            alt="Vector6"
            className="z-10 text-[#828282] absolute right-0 -translate-y-1/2 top-[50%] w-[600px] h-[900px]"
          />
        </main>
      )}
    </>
  );
};

export default Home;
