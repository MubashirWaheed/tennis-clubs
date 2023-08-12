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
            <p className="text-[12px] text-grey sm:text-[16px] mt-[20px]">
              SAT APR 29 AT 11:30AM
            </p>
            <div className="flex-col sm:flex-row mb-[15px] flex gap-2  sm:mb-[50px] mt-[20px]">
              <Image
                src="/France.svg"
                width={20}
                height={20}
                alt="country flag"
                className="w-[14px] h-[14px] sm:w-[20px] sm:h-[20px]"
              />
              <p className="text-darkPurple fw700  text-[12px] sm:text-[16px]">
                Kris Alessandro Hernandez 9.xx
              </p>
            </div>
            <p className="text-grey fw700 text-[12px] sm:text-[16px]">
              QF • Match 1
            </p>
          </div>
          <div className=" bg-white  my-[10px] px-[10px] py-[10px] flex flex-col shadow-xl">
            <p className="text-[12px] text-grey sm:text-[16px] mt-[20px]">
              SAT APR 29 AT 11:30AM
            </p>
            <div className="flex-col sm:flex-row mb-[15px] flex gap-2 sm:mb-[50px] mt-[20px]">
              <Image
                src="/France.svg"
                width={20}
                height={20}
                alt="country flag"
                className="w-[14px] h-[14px] sm:w-[20px] sm:h-[20px]"
              />
              <p className="text-darkPurple fw700  text-[12px] sm:text-[16px]">
                Kris Alessandro Hernandez 9.xx
              </p>
            </div>
            <p className="text-grey fw700 text-[12px] sm:text-[16px]">
              QF • Match 1
            </p>
          </div>
          <div className=" bg-white  my-[10px] px-[10px] py-[10px] flex flex-col shadow-xl">
            <p className="text-[12px] text-grey sm:text-[16px] mt-[20px]">
              SAT APR 29 AT 11:30AM
            </p>
            <div className="flex-col sm:flex-row mb-[15px] flex gap-2 sm:mb-[50px] mt-[20px]">
              <Image
                src="/France.svg"
                alt="country flag"
                width={20}
                height={20}
                className="w-[14px] h-[14px] sm:w-[20px] sm:h-[20px]"
              />
              <p className="text-darkPurple fw700  text-[12px] sm:text-[16px]">
                Kris Alessandro Hernandez 9.xx
              </p>
            </div>
            <p className="text-grey fw700 text-[12px] sm:text-[16px]">
              QF • Match 1
            </p>
          </div>
          <div className=" bg-white  my-[10px] px-[10px] py-[10px] flex flex-col shadow-xl">
            <p className="text-[12px] text-grey sm:text-[16px] mt-[20px]">
              SAT APR 29 AT 11:30AM
            </p>
            <div className="flex gap-2 flex-col sm:flex-row mb-[15px] sm:mb-[50px] mt-[20px]">
              <Image
                src="/France.svg"
                width={20}
                height={20}
                alt="country flag"
                className="w-[14px] h-[14px] sm:w-[20px] sm:h-[20px]"
              />
              <p className="text-darkPurple fw700  text-[12px] sm:text-[16px]">
                Kris Alessandro Hernandez 9.xx
              </p>
            </div>
            <p className="text-grey fw700 text-[12px] sm:text-[16px]">
              QF • Match 1
            </p>
          </div>
        </div>

        <div className=" basis-1/3 grow">
          <div className="mt-[100px] sm:mt-[35px]">
            <Image
              src="/upperline.svg"
              className="w-[80px] sm:w-[250px] mt-[20px]"
              width={250}
              height={60}
              alt="upperline"
            />
            <div className="shadow-xl bg-white px-[10px]">
              <p className="text-[12px] text-grey sm:text-[16px]  fw400 py-[10px]">
                SAT APR 29 AT 11:30AM
              </p>
              <div className="xsm:items-start flex flex-col sm:flex-row justify-between items-center mt-[5px] sm:mt-[25px]">
                <p className="text-darkPurple fw700  text-[12px] sm:text-[16px] flex-col sm:flex-row flex gap-2">
                  <Image
                    src="/France.svg"
                    alt="country flag"
                    width={20}
                    height={20}
                    className="w-[14px] h-[14px] sm:w-[20px] sm:h-[20px]"
                  />
                  K. Hernandez Mari... 11.21
                </p>
                <div className="text-grey fw700 text-[12px] sm:text-[16px] items-center flex gap-4">
                  <p>6</p>
                  <p>4</p>
                  <p>6</p>
                  <Image
                    src="/arrow.svg"
                    alt="arrow"
                    className="w-[10px] h-[10px] sm:w-[16px] sm:h-[16px]"
                    width={10}
                    height={10}
                  />
                </div>
              </div>
              <div className=" xsm:items-start flex flex-col sm:flex-row justify-between items-center mb-[5px] sm:mb-[40px]">
                <p className="  text-darkPurple fw700  text-[12px] sm:text-[16px] flex-col sm:flex-row  flex gap-2">
                  <Image
                    src="/France.svg"
                    alt="country flag"
                    width={20}
                    height={20}
                    className="w-[14px] h-[14px] sm:w-[20px] sm:h-[20px]"
                  />
                  L. Mendoza 11.21
                </p>
                <div className=" items-center text-grey fw700 text-[12px] sm:text-[16px] flex gap-4 mr-[25px] lg:mr-[31px]">
                  <p className="text-purple">6</p>
                  <p>4</p>
                  <p className="text-purple">6</p>
                </div>
              </div>
              <p className="fw700 text-grey fw700 text-[12px] sm:text-[16px]">
                R16 • Match 1 • HATA, Court 6
              </p>
            </div>
            <Image
              src="/lowerline.svg"
              alt="lowerline"
              className="w-[80px] sm:w-[250px] "
              width={250}
              height={60}
            />
          </div>
          <div className="mt-[100px] sm:mt-[65px]">
            <Image
              src="/upperline.svg"
              alt="line"
              className=" w-[80px] sm:w-[250px] mt-[20px]"
              width={250}
              height={60}
            />
            <div className="shadow-xl bg-white px-[10px]">
              <p className="text-[12px] text-grey sm:text-[16px] fw400 py-[10px]">
                SAT APR 29 AT 11:30AM
              </p>
              <div className="xsm:items-start flex flex-col sm:flex-row justify-between items-center mt-[5px] sm:mt-[25px]">
                <p className="text-darkPurple fw700  text-[12px] sm:text-[16px] flex-col sm:flex-row  flex gap-2">
                  <Image
                    src="/France.svg"
                    alt="country flag"
                    width={20}
                    height={20}
                    className="w-[14px] h-[14px] sm:w-[20px] sm:h-[20px]"
                  />
                  K. Hernandez Mari... 11.21
                </p>
                <div className=" text-grey fw700 text-[12px] sm:text-[16px]  items-center flex gap-4">
                  <p>6</p>
                  <p>4</p>
                  <p>6</p>
                  <Image
                    src="/arrow.svg"
                    alt="arrow"
                    className="w-[10px] h-[10px] sm:w-[16px] sm:h-[16px]"
                    width={10}
                    height={10}
                  />
                </div>
              </div>
              <div className="xsm:items-start flex flex-col sm:flex-row justify-between items-center mb-[5px] sm:mb-[40px]">
                <p className="text-darkPurple fw700  text-[12px] sm:text-[16px] flex-col sm:flex-row flex gap-2">
                  <Image
                    src="/France.svg"
                    alt="country flag"
                    width={20}
                    height={20}
                    className="w-[14px] h-[14px] sm:w-[20px] sm:h-[20px]"
                  />
                  L. Mendoza 11.21
                </p>
                <div className="items-center text-grey fw700 text-[12px] sm:text-[16px]  flex gap-4 mr-[25px] lg:mr-[31px]">
                  <p className="text-purple">6</p>
                  <p>4</p>
                  <p className="text-purple">6</p>
                </div>
              </div>
              <p className="fw700 text-grey fw700 text-[12px] sm:text-[16px] ">
                R16 • Match 1 • HATA, Court 6
              </p>
            </div>
            <Image
              src="/lowerline.svg"
              alt="lowerline"
              className="w-[80px] sm:w-[250px] mt-[10px] sm:mt-[0px]"
              width={250}
              height={60}
            />
          </div>
        </div>

        <div className=" basis-1/3 grow">
          <div className="mt-[250px] sm:mt-[160px]">
            <Image
              src="/upperline.svg"
              alt="upperline"
              className=" w-[80px] sm:w-[250px] mt-[20px]"
              width={250}
              height={60}
            />
            <div className="shadow-xl bg-white px-[10px]">
              <p className="text-[12px] text-grey sm:text-[16px] fw400 py-[10px] sm:py-[20px] ">
                SAT APR 29 AT 11:30AM
              </p>
              <div className="xsm:items-start  pb-[5px] flex-col sm:flex-row flex justify-between items-center mt-[5px] sm:mt-[15px]">
                <p className="text-darkPurple fw700  text-[12px] sm:text-[16px]  fw700 flex-col sm:flex-row flex gap-[5px] sm:gap-2">
                  <Image
                    src="/France.svg"
                    alt="country flag"
                    width={20}
                    height={20}
                    className="w-[14px] h-[14px] sm:w-[20px] sm:h-[20px]"
                  />
                  K. Hernandez Mari... 11.21
                </p>
                <div className="xsm:items-start items-center text-grey fw700 text-[12px] sm:text-[16px] flex gap-4">
                  <p>6</p>
                  <p>4</p>
                  <p>6</p>
                  <Image
                    src="/arrow.svg"
                    alt="arrow"
                    className="w-[10px] h-[10px] sm:w-[16px] sm:h-[16px]"
                    width={10}
                    height={10}
                  />
                </div>
              </div>
              <div className="xsm:items-start flex-col sm:flex-row flex justify-between items-center mb-[10px] sm:mb-[40px]">
                <p className=" fw700  text-[12px] sm:text-[16px] flex-col sm:flex-row  text-darkPurple fw700  flex gap-[3px] sm:gap-2">
                  <Image
                    src="/France.svg"
                    alt="country flag"
                    width={20}
                    height={20}
                    className="w-[14px] h-[14px] sm:w-[20px] sm:h-[20px]"
                  />
                  L. Mendoza 11.21
                </p>
                <div className=" items-center text-grey fw700 text-[12px] sm:text-[16px]  flex gap-4 mr-[25px] lg:mr-[31px]">
                  <p className="text-purple">6</p>
                  <p>4</p>
                  <p className="text-purple">6</p>
                </div>
              </div>
              <p className="fw700 text-[12px] sm:text-[16px] py-[7px] sm:py-[15px] fw700 text-grey">
                R16 • Match 1 • HATA, Court 6
              </p>
            </div>
            <Image
              src="/lowerline.svg"
              alt="lowerline"
              className="w-[80px] sm:w-[250px] mt-[20px]"
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
