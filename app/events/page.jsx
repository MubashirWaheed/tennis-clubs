"use client";
import Button from "@/components/ui/buttons/PrimaryButton";
import Image from "next/image";
import Link from "next/link";
// import clubData from "../clubData.json";

const eventView = () => {
  return (
    <>
      {/* Header */}
      <header className="flex items-center justify-center bg-[#3B2273] h-full md:h-[113px]">
        <div className="w-full max-w-[1170px] mx-auto flex flex-col md:flex-row items-center">
          <div className="mt-[10px] flex-wrap w-full flex flex-row items-center justify-center gap-2 ">
            <div className="md:px-[15px] border-r border-grey">
              <p className="md:text-md text-xs text-white text-left ">STATUS</p>
              <p className="text-white text-sm md:text-lg">Open Registration</p>
            </div>
            <div className="md:px-[15px] border-r border-grey">
              <p className="text-white md:text-md text-xs">REGISTRATIONS</p>
              <p className="text-white  text-sm md:text-lg">1</p>
            </div>
            {/* bg-red-800 */}
            <div className="md:px-[15px] border-r border-grey">
              <p className="text-white text-center md:text-md text-xs">
                PLAYERS
              </p>
              <p className="text-white  text-sm md:text-lg">1</p>
            </div>
            <div>
              <p className="text-white md:text-md text-xs">REGISTRATION ENDS</p>
              <p className="text-white text-center text-sm md:text-lg">
                16 April 2023
              </p>
            </div>
          </div>

          <div className="mb-[10px] md:mb-[0px] flex justify-center mt-[20px] md:mt-[0px] md:justify-end gap-4 w-full">
            <Button size="small">Create Draws</Button>
            <Button size="small">Edit Event</Button>
          </div>
        </div>
      </header>
      <section className="bg-[#FAFBFF] h-auto flex items-center">
        <div className="bg-[#FAFBFF] py-[50px] w-full max-w-[1170px] mx-auto flex flex-col md:flex-row justify-between">
          <div className="flex flex-col">
            <div className="flex gap-4 items-center">
              <h2 className="text-sm md:text-4xl f-Abril text-[#13013C]  md:mt-[0px] text-center">
                Tennis Doubles Mixed
              </h2>
              <p className="py-[3px] fw700 bg-[#027333] f12 text-center text-white px-[10px] rounded-xl">
                You're playing
              </p>
            </div>
            <p className="text-grey">
              Apr 20, 10:30 Am | Edt Asda Park Royal Superstore | Free Event
            </p>
          </div>
          <div className="flex items-center gap-4">
            <Button size="small">I'll Pass</Button>
            <button className="border border-[#027333] p-[7px] rounded-md">
              <Image
                // add color to the svg
                src="/share.svg"
                color="red"
                alt=""
                width={30}
                height={30}
              />
            </button>
          </div>
        </div>
      </section>
      {/* change margin bottom while making content dynamic  */}
      <section className=" flex flex-col items-center mb-[100px] ">
        <div className="max-w-[1170px] flex justify-center flex-wrap ">
          <main className="md:basis-3/4 grow md:pr-[10px] md:mt-[20px]">
            <h2 className="text-darkPurple fw700 f24">Events Notes</h2>
            <p className="text-grey mt-[30px]">
              Net Generation Tennis Club is a tennis club focused on developing
              and promoting the sport of tennis to the younger generation in the
              United States. The club is an initiative of the United States
              Tennis Association (USTA) that aims to inspire and engage children
              to play tennis, regardless of their age, ability, or background.
            </p>
          </main>
          <aside className="md:mt-[20px] md:basis-1/4 grow ">
            <div className="rounded-lg px-[21px] py-[28px] bg-[#fff] shadow-md w-full lg:w-[290px]">
              <p className="text-[20px] fw700 lh24 font-Abril Fatface text-[#13013c]">
                Organizer
              </p>

              <div className="flex items-center gap mt-[40px] ">
                <div className="px-[20px]">
                  <Image
                    width={77}
                    height={77}
                    src="/human.png"
                    alt="human"
                    className="w-[77px] h-[77px] rounded-full"
                  />
                </div>
                <div className="flex flex-col ">
                  <p className="f16 fw700  text-[#13013c]">Philip B. Simpson</p>
                  <p className="text-[#828282] f16 fw400 lh24">
                    Head organizer
                  </p>
                </div>
              </div>
            </div>
          </aside>
        </div>

        <div className="max-w-[1170px] flex justify-center  w-full flex-wrap">
          <div className="md:basis-3/4  grow w-full md:pr-[20px]">
            <h3 className="text-darkPurple fw700 f24">Players</h3>
            <nav className=" px-[20px] h-[60px] w-full overflow-x-auto rounded-[10px] shadow-md bg-white flex justify-start gap-[30px] items-stretch">
              <Link
                href="#"
                className="h-full border-b-4 border-white focus:border-[#3B2273] rounded-md px-[10px] text-[#828282] focus:text-[#3B2273] flex items-center justify-center"
              >
                <p className="f16 fw700 lh24">Confirmed</p>
              </Link>
              <Link
                href="#"
                className="h-full border-b-4 border-white focus:border-[#3B2273] rounded-md px-[10px] text-[#828282] focus:text-[#3B2273] flex items-center justify-center"
              >
                <p className="f16 fw700 lh24">Invited</p>
              </Link>
              <Link
                href="#"
                className="h-full border-b-4 border-white focus:border-[#3B2273] rounded-md px-[10px] text-[#828282] focus:text-[#3B2273] flex items-center justify-center"
              >
                <p className="f16 fw700 lh24">Declined</p>
              </Link>
            </nav>
            <div className=" md:px-[20px] flex gap-[10px] items-center w-full bg-white mt-[18px] h-[83px] shadow-sm rounded-[10px]">
              <Image
                width={50}
                height={50}
                src="/playerProfile.png"
                alt="Player Profile"
                className="w-[50px] h-[50px] rounded-full"
              />
              <div className="flex  w-full">
                <div className="pr-[20px] ">
                  <h2 className="text-[#13013C] fw700 f16 lh24">
                    Jeannie C. Lyons
                  </h2>
                  <p className="lh24 f14 fw700 text-grey">M • Surat, India</p>
                </div>
                <div className="md:px-[40px] px-[5px]">
                  <p>UTR</p>
                </div>
                <div className="md:px-[40px] px-[5px]">
                  <p>UTR</p>
                </div>
              </div>
            </div>
          </div>
          <div className="md:basis-1/4  grow w-full h-full">
            <div className="  w-full lg:w-[290px] h-[280px] shadow-md bg-[#fff] rounded-[10px] mt-[21px]">
              <div className="  flex flex-col">
                <div className="px-[28px] py-[21px]">
                  <p className="text-[20px] fw700 lh24 font-Abril Fatface text-[#13013c] mb-[22px]">
                    Location
                  </p>
                  <div className="flex flex-row gap-2 items-center">
                    <Image
                      width={24}
                      height={24}
                      src="/mapblue.svg"
                      alt="mapblue"
                      className="h-[24px] w-[24px]"
                    />
                    <p className=" text-[#828282] f14 fw700 lh22">
                      3092 Church StreetBrooklyn, NY 11221
                    </p>
                  </div>
                </div>
                {/* <div>HEllo g</div> */}
                <div>
                  <Image
                    width={290}
                    height={280}
                    src="/location.png"
                    alt="location"
                    className="object-contain pt-[15px] w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default eventView;
