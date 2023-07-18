import Image from "next/image";


const MatchesLayout = ({children}) => {
    return (
      <main>
        <section className="relative bg-[#3B2273]">
          <h1 className="h2 text-white pt-[64px] pb-[109px] w-full max-w-[1170px] px-5 lg:px-0 mx-auto">
            Find Matches
          </h1>
          {/* <Image
            src="/Ball.svg"
            height={100}
            width={100}
            alt=""
            className="absolute bottom-0 right-0 w-[100px] h-[100px] object-contain"
          />
          <Image
            src="/HorizontalBat.svg"
            height={111}
            width={132}
            alt=""
            className="absolute left-0 bottom-2"
          />
          <Image
            src="/VerticalBat.svg"
            height={111}
              width={132}
            alt=""
            className="absolute left-0 bottom-0"
          /> */}
        </section>
        {children}
      </main>
    );
}

export default MatchesLayout;