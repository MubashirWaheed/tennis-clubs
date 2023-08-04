import React from "react";
import Image from "next/image";
const Round16 = () => {
  return (
    <>
      <div className="bg-purple">HEllo</div>
      <div className="flex flex-row">
        <div className=" bg-red-100 basis-1/3 grow">
          {/* card */}
          <div className=" bg-white mx-[10px] my-[10px] px-[10px] py-[10px] flex flex-col shadow-xl">
            <p className="mt-[20px]">SAT APR 29 AT 11:30AM</p>
            <div className="flex gap-2 mb-[50px] mt-[20px]">
              <Image src="/France.svg" width={20} height={20} />
              <p>Kris Alessandro Hernandez 9.xx</p>
            </div>
            <p>QF • Match 1</p>
          </div>
          {/* next  */}
          <div className=" bg-white mx-[10px] my-[10px] px-[10px] py-[10px] flex flex-col shadow-xl">
            <p className="mt-[20px]">SAT APR 29 AT 11:30AM</p>
            <div className="flex gap-2 mb-[50px] mt-[20px]">
              <Image src="/France.svg" width={20} height={20} />
              <p>Kris Alessandro Hernandez 9.xx</p>
            </div>
            <p>QF • Match 1</p>
          </div>
        </div>
        <div className="bg-pink-100 basis-1/3 grow">
          {/* card */}
          <Image
            src="/upperline.svg"
            className="mt-[20px]"
            width={250}
            height={60}
          />
          <div className="bg-white px-[10px]">
            <p className="text-grey fw400 py-[10px]">SAT APR 29 AT 11:30AM</p>
            <div className="flex justify-between items-center mt-[25px]">
              <p className="flex gap-2">
                <Image src="/France.svg" width={20} height={20} />
                K. Hernandez Mari... 11.21
              </p>
              <div className="flex gap-4">
                <p>6</p>
                <p>4</p>
                <p>6</p>
                <Image src="/arrow.svg" width={10} height={10} />
              </div>
            </div>
            <div className="flex justify-between items-center mb-[40px]">
              <p className="flex gap-2">
                <Image src="/France.svg" width={20} height={20} />
                L. Mendoza 11.21
              </p>
              <div className="flex gap-4 mr-[25px]">
                <p>6</p>
                <p>4</p>
                <p>6</p>
              </div>
            </div>
            <p className="fw700 text-grey">R16 • Match 1 • HATA, Court 6</p>
          </div>
          <Image
            src="/lowerline.svg"
            // className="mt-[20px]"
            width={250}
            height={60}
          />
        </div>
        <div className="bg-teal-200 basis-1/3 grow">hello</div>
      </div>
    </>
  );
};

export default Round16;
