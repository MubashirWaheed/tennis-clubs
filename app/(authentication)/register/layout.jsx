import Image from "next/image";

const RegisterLayout = ({ children }) => {
  return (
    <main className="relative bg-[#3B2273] lg:px-[180px] md:px-[100px] py-[40px] lg:py-0 lg:h-[900px] flex flex-col lg:flex-row items-center gap-[54px]">
      <section className="relative flex flex-col items-start gap-[31px] px-[20px] lg:p-0">
        <h1 className="h2 text-white w-full lg:w-[541px]">
          Join the Tennis Revolution - The Ultimate Tennis Community Awaits!
        </h1>
        <div className="flex flex-col gap-[17px] items-start">
          <Image
            width={119}
            height={20}
            src="/headerLine.svg"
            alt="headerLine"
            className="w-[119px] h-[20px]"
          />
          <p className="f16 fw400 lh24 text-white w-full lg:w-[504px]">
            The game is scored using a system of points, games, and sets. A
            point is awarded for each time a player wins a rally (a series of
            back-and-forth shots). Games are won by the first player or team to
            win four points, with a two-point lead. Sets are won by the first
            player or team to win six games.
          </p>
        </div>

        <Image
          width={70}
          height={70}
          src="/circles.svg"
          alt={"Circles"}
          className="absolute -top-[35px] -left-[35px] w-[70px] h-[70px]"
        />
      </section>

      {children}

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

export default RegisterLayout;
