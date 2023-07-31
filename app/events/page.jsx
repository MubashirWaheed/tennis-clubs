"use client";
import Button from "@/components/ui/buttons/PrimaryButton";
import Image from "next/image";
const eventView = () => {
  return (
    <>
      {/* Header */}
      <header className="flex items-center justify-center bg-[#3B2273] h-[113px]">
        <div className="w-full max-w-[1170px] mx-auto flex">
          <div className=" w-full flex items-center  gap-6 ">
            <div className="px-[10px] bg-green-200">
              <p className="text-white">STATUS</p>
              <p className="text-white">Open Registration </p>
            </div>
            <div>
              <p className="text-white">REGISTRATIONS</p>
              <p className="text-white">1</p>
            </div>
            <div className="border-r  border-green-900 ">
              <p className="text-white">PLAYERS</p>
              <p className="text-white">1</p>
            </div>
            <div>
              <p className="text-white">REGISTRATION ENDS</p>
              <p className="text-white">16 April 2023</p>
            </div>
          </div>

          <div className="flex justify-end gap-4 w-full">
            <Button size="small">Create Draws</Button>
            <Button size="small">Edit Event</Button>
          </div>
        </div>
      </header>
      <section className="bg-[#FAFBFF] h-[170px] flex items-center">
        <div className="w-full max-w-[1170px] mx-auto flex justify-between">
          <div className="flex flex-col">
            <div className="flex gap-4">
              <h2>Tennis Doubles Mixed</h2>
              <p className="pt-[3px] bg-[#027333] f12 text-center text-white px-[5px] rounded-xl">
                You're playing
              </p>
            </div>
            <p>
              Apr 20, 10:30 Am | Edt Asda Park Royal Superstore | Free Event
            </p>
          </div>
          <div className="flex items-center gap-4">
            <Button size="small">I'll Pass</Button>
            <button className="border border-[#027333] p-[7px] rounded-md">
              <Image src="/share.svg" alt="" width={30} height={30} />
            </button>
          </div>
        </div>
      </section>
      {/* create main content */}
      <section>
        <h1></h1>
      </section>
    </>
  );
};
export default eventView;
