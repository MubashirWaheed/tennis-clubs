import JoinPlayerBTN from "../components/ui/buttons/PrimaryButton";
import JoinClubBTN from "../components/ui/buttons/PrimaryButton";
import Image from "next/image";
import LoggedInHomeV2 from "./components/home/LoggedInHomeV2";
import LoggedInHome from "./components/home/LoggedInHome";
import { redirect } from "next/navigation";
import { getCurrentUser } from "@/lib/services/getCurrentUser";
import { getProfile } from "@/lib/services/getProfile";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";

const Home = async () => {
  const user = await getCurrentUser();

  const session = await getServerSession(authOptions);
  console.log("session in the home route:".session);

  if (!session || !session.user) return redirect("/signin");

  const profile = await getProfile(session.user.id);

  if (!profile) return redirect("/register/profile");

  return (
    <div>
      {user ? (
        <LoggedInHome />
      ) : (
        // <LoggedInHomeV2 /> //uncomment either one to see the both versions of HOME Page.
        <main className="relative bg-[#3B2273] py-[100px] w-full flex items-center justify-center">
          <div className="h-full w-full max-w-[1170px] mx-auto flex flex-col gap-[30px] lg:flex-row lg:gap-0 items-center justify-between">
            <section className="relative flex flex-col items-start gap-[31px] px-[10px] md:px-0">
              <h1 className="h2 text-white w-full md:w-[549px]">
                Your Ultimate Guide to Tennis
              </h1>
              <div className="flex flex-col gap-[17px] items-start">
                <Image
                  width={119}
                  height={20}
                  src="/headerLine.svg"
                  alt="headerLine"
                  className="w-[119px] h-[20px]"
                />
                <p className="f16 fw400 lh24 text-white w-full md:w-[500px]">
                  Another important feature could be profiles of famous tennis
                  players from around the world. This could include information
                  on their playing style, career highlights, and current
                  ranking.A section dedicated to coaching and training can also
                  be included, which offers tips on improving tennis skills,
                  such as serving, volleying, and footwork.
                </p>
              </div>
              <div className="flex flex-col lg:flex-row items-center gap-[22px] w-full justify-start">
                <JoinPlayerBTN
                  type="button"
                  // onClick={
                  //   () => redirect("/register")
                  //   // router.push("/register")
                  // }
                >
                  Join As A Player
                </JoinPlayerBTN>
                <JoinClubBTN
                  type="button"
                  // onClick={
                  //   () => redirect("clubs/new2")
                  // router.push("/clubs/new2")
                  // }
                >
                  Join As A Club
                </JoinClubBTN>
              </div>
              <Image
                width={70}
                height={70}
                src="/circles.svg"
                alt={"Circles"}
                className="absolute -top-[35px] -left-[35px] w-[70px] h-[70px]"
              />
            </section>

            {/* Player Image on the right side. */}
            <section className="z-20 px-[10px] w-full lg:px-0 lg:w-[751px] lg:h-[501px]">
              <Image
                width={751}
                height={501}
                src="/homePagePlayer.png"
                alt="Player Image On Home page"
                className="rounded-xl z-20 w-full lg:h-full lg:object-cover object-contain"
              />
            </section>
          </div>

          {/* Wave Design on the right side. */}
          <Image
            src="/vector-4.svg"
            width={350}
            height={480}
            alt="Vector1"
            className="z-0 hidden md:inline-block pointer-events-none  text-[#828282] absolute right-0 -translate-y-1/2 top-[50%] w-[350px] h-[480px]"
          />
          <Image
            src="/vector-1.svg"
            width={400}
            height={540}
            alt="Vector2"
            className="hidden md:inline-block pointer-events-none z-0 text-[#828282] absolute right-0 -translate-y-1/2 top-[50%] w-[400px] h-[540px]"
          />
          <Image
            src="/vector-2.svg"
            width={450}
            height={600}
            alt="Vector3"
            className="hidden md:inline-block pointer-events-none z-0 text-[#828282] absolute right-0 -translate-y-1/2 top-[50%] w-[450px] h-[600px]"
          />
          <Image
            width={500}
            height={660}
            src="/vector-3.svg"
            alt="Vector4"
            className="hidden md:inline-block pointer-events-none z-0 text-[#828282] absolute right-0 -translate-y-1/2 top-[50%] w-[500px] h-[660px]"
          />
          <Image
            src="/vector-5.svg"
            width={550}
            height={890}
            alt="Vector5"
            className="hidden md:inline-block pointer-events-none z-0 text-[#828282] absolute right-0 -translate-y-1/2 top-[50%] w-[550px] h-[890px]"
          />
          <Image
            src="/vector-6.svg"
            alt="Vector6"
            width={600}
            height={900}
            className="hidden md:inline-block pointer-events-none z-10 text-[#828282] absolute right-0 -translate-y-1/2 top-[50%] w-[600px] h-[900px]"
          />
        </main>
      )}
    </div>
  );
};

export default Home;
