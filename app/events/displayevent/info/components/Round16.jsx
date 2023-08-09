import React from "react";
import Image from "next/image";

const Round16 = () => {
  return (
    <>
      <div className="bg-lightPurple py-[20px] my-[10px] rounded-lg f14 lh22 text-white flex justify-around md:px-[30px]">
        <p className="text-darkPurple fw700">Round Of 32</p>
        <p className="text-darkPurple fw700">Round Of 16</p>
        <p className="text-darkPurple fw700">Quaterfinals</p>
      </div>
      <div className="flex flex-row gap-3">
        {/* Columns */}
        <div className="basis-1/3 grow">
          <div className=" bg-white  my-[10px] px-[10px] py-[10px] flex flex-col shadow-xl">
            <p className="mt-[20px]">SAT APR 29 AT 11:30AM</p>
            <div className="flex gap-2 mb-[50px] mt-[20px]">
              <Image
                src="/France.svg"
                width={20}
                height={20}
                alt="country flag"
              />
              <p>Kris Alessandro Hernandez 9.xx</p>
            </div>
            <p>QF • Match 1</p>
          </div>
          <div className=" bg-white  my-[10px] px-[10px] py-[10px] flex flex-col shadow-xl">
            <p className="mt-[20px]">SAT APR 29 AT 11:30AM</p>
            <div className="flex gap-2 mb-[50px] mt-[20px]">
              <Image
                src="/France.svg"
                width={20}
                height={20}
                alt="country flag"
              />
              <p>Kris Alessandro Hernandez 9.xx</p>
            </div>
            <p>QF • Match 1</p>
          </div>
          <div className=" bg-white  my-[10px] px-[10px] py-[10px] flex flex-col shadow-xl">
            <p className="mt-[20px]">SAT APR 29 AT 11:30AM</p>
            <div className="flex gap-2 mb-[50px] mt-[20px]">
              <Image
                src="/France.svg"
                alt="country flag"
                width={20}
                height={20}
              />
              <p>Kris Alessandro Hernandez 9.xx</p>
            </div>
            <p>QF • Match 1</p>
          </div>
          <div className=" bg-white  my-[10px] px-[10px] py-[10px] flex flex-col shadow-xl">
            <p className="mt-[20px]">SAT APR 29 AT 11:30AM</p>
            <div className="flex gap-2 mb-[50px] mt-[20px]">
              <Image
                src="/France.svg"
                width={20}
                height={20}
                alt="country flag"
              />
              <p>Kris Alessandro Hernandez 9.xx</p>
            </div>
            <p>QF • Match 1</p>
          </div>
        </div>

        <div className=" basis-1/3 grow">
          <div className="mt-[35px]">
            <Image
              src="/upperline.svg"
              className="mt-[20px]"
              width={250}
              height={60}
              alt="upperline"
            />
            <div className="shadow-xl bg-white px-[10px]">
              <p className="text-grey fw400 py-[10px]">SAT APR 29 AT 11:30AM</p>
              <div className="flex justify-between items-center mt-[25px]">
                <p className="flex gap-2">
                  <Image
                    src="/France.svg"
                    alt="country flag"
                    width={20}
                    height={20}
                  />
                  K. Hernandez Mari... 11.21
                </p>
                <div className="flex gap-4">
                  <p>6</p>
                  <p>4</p>
                  <p>6</p>
                  <Image src="/arrow.svg" alt="arrow" width={10} height={10} />
                </div>
              </div>
              <div className="flex justify-between items-center mb-[40px]">
                <p className="flex gap-2">
                  <Image
                    src="/France.svg"
                    alt="country flag"
                    width={20}
                    height={20}
                  />
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
              alt="lowerline"
              // className="mt-[20px]"
              width={250}
              height={60}
            />
          </div>
          <div className="mt-[65px]">
            <Image
              src="/upperline.svg"
              alt="line"
              className="mt-[20px]"
              width={250}
              height={60}
            />
            <div className="shadow-xl bg-white px-[10px]">
              <p className="text-grey fw400 py-[10px]">SAT APR 29 AT 11:30AM</p>
              <div className="flex justify-between items-center mt-[25px]">
                <p className="flex gap-2">
                  <Image
                    src="/France.svg"
                    alt="country flag"
                    width={20}
                    height={20}
                  />
                  K. Hernandez Mari... 11.21
                </p>
                <div className="flex gap-4">
                  <p>6</p>
                  <p>4</p>
                  <p>6</p>
                  <Image src="/arrow.svg" alt="arrow" width={10} height={10} />
                </div>
              </div>
              <div className="flex justify-between items-center mb-[40px]">
                <p className="flex gap-2">
                  <Image
                    src="/France.svg"
                    alt="country flag"
                    width={20}
                    height={20}
                  />
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
              alt="lowerline"
              // className="mt-[20px]"
              width={250}
              height={60}
            />
          </div>
        </div>

        <div className=" basis-1/3 grow">
          <div className="mt-[160px]">
            <Image
              src="/upperline.svg"
              alt="upperline"
              className="mt-[20px]"
              width={250}
              height={60}
            />
            <div className="shadow-xl bg-white px-[10px]">
              <p className="text-grey fw400 py-[20px] ">
                SAT APR 29 AT 11:30AM
              </p>
              <div className="flex justify-between items-center mt-[15px]">
                <p className=" text-darkPurple fw700 flex gap-2">
                  <Image
                    src="/France.svg"
                    alt="country flag"
                    width={20}
                    height={20}
                  />
                  K. Hernandez Mari... 11.21
                </p>
                <div className="flex gap-4">
                  <p>6</p>
                  <p>4</p>
                  <p>6</p>
                  <Image src="/arrow.svg" alt="arrow" width={10} height={10} />
                </div>
              </div>
              <div className="flex justify-between items-center mb-[40px]">
                <p className="text-darkPurple fw700  flex gap-2">
                  <Image
                    src="/France.svg"
                    alt="country flag"
                    width={20}
                    height={20}
                  />
                  L. Mendoza 11.21
                </p>
                <div className="flex gap-4 mr-[25px]">
                  <p>6</p>
                  <p>4</p>
                  <p>6</p>
                </div>
              </div>
              <p className="py-[15px] fw700 text-grey">
                R16 • Match 1 • HATA, Court 6
              </p>
            </div>
            <Image
              src="/lowerline.svg"
              alt=""
              className="mt-[20px]"
              width={250}
              height={60}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Round16;
