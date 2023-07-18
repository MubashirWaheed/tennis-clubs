
import Image from "next/image";
import LogIn from "./components/LogIn";

const LogInPage = () => {
  return (
    <main className="relative bg-[#3B2273] lg:px-[180px] md:px-[100px] py-[40px] lg:py-0 lg:h-[900px] flex flex-col lg:flex-row items-center gap-[54px]">
      <section className="relative flex flex-col items-start gap-[31px] px-[20px] lg:p-0">
        <h1 className="h2 text-white w-full lg:w-[541px]">
          Welcome back!
          <br /> Please log in.
        </h1>
        <div className="flex flex-col gap-[17px] items-start">
          <Image
            height={20}
            width={119}
            src="/headerLine.svg"
            alt="headerLine"
            className="w-[119px] h-[20px]"
          />
          <p className="f16 fw400 lh24 text-white w-full lg:w-[504px]">
            access their personalized account on a website. It is a necessary
            step for users to view their personal information, settings, and
            perform various actions related to their account.
          </p>
        </div>
        <Image
          src="/circles.svg"
          height={70}
          width={70}
          alt={"Circles"}
          className="absolute -top-[35px] -left-[35px] w-[70px] h-[70px]"
        />
      </section>

      <LogIn />

      <Image
        src="/vector-4.svg"
        width={350}
        height={480}
        alt="Vector1"
        className="pointer-events-none z-10 text-[#828282] absolute right-0 -translate-y-1/2 top-[50%] w-[350px] h-[480px]"
      />
      <Image
        src="/vector-1.svg"
        width={400}
        height={540}
        alt="Vector2"
        className="pointer-events-none z-10 text-[#828282] absolute right-0 -translate-y-1/2 top-[50%] w-[400px] h-[540px]"
      />
      <Image
        src="/vector-2.svg"
        width={450}
        height={600}
        alt="Vector3"
        className="pointer-events-none z-10 text-[#828282] absolute right-0 -translate-y-1/2 top-[50%] w-[450px] h-[600px]"
      />
      <Image
        width={500}
        height={660}
        src="/vector-3.svg"
        alt="Vector4"
        className="pointer-events-none z-10 text-[#828282] absolute right-0 -translate-y-1/2 top-[50%] w-[500px] h-[660px]"
      />
      <Image
        src="/vector-5.svg"
        width={550}
        height={890}
        alt="Vector5"
        className="pointer-events-none z-10 text-[#828282] absolute right-0 -translate-y-1/2 top-[50%] w-[550px] h-[890px]"
      />
      <Image
        src="/vector-6.svg"
        alt="Vector6"
        width={600}
        height={900}
        className="pointer-events-none z-10 text-[#828282] absolute right-0 -translate-y-1/2 top-[50%] w-[600px] h-[900px]"
      />
    </main>
  );
};

export default LogInPage;
