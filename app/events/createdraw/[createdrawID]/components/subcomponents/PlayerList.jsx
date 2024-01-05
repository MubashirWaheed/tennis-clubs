"use client";
import Image from "next/image";
import React, { useEffect } from "react";
// import { useForm, useWatch } from "react-hook-form";

const PlayerList = ({ register, useWatch, control, registeredPlayers }) => {
  const state = useWatch({
    control,
    name: "playerSelected",
    defaultValue: false,
  });

  useEffect(() => {
    console.log("state: ", state);
  }, [state]);

  return (
    <div className="flex justify-center items-center">
      <div className="w-full max-w-[1170px]">
        <table className="w-full border-spacing-y-4  border-separate">
          <tbody className="rounded-xl">
            <tr className="bg-white   w-full  border-2  border-separate">
              <th scope="col" className="p-4 rounded-l-xl">
                <div className="flex items-center">
                  <input
                    id="checkbox-all-search"
                    type="checkbox"
                    className="w-5 h-5 text-purple cursor-pointer bg-gray-100 border-gray-300 rounded  focus:ring-2 dark:bg-gray-700"
                  />
                </div>
              </th>
              <th className="w-[23%] py-[20px] my-[10px] text-start text-darkPurple f14">
                <div className="flex items-center gap-2">
                  <p>Name</p>
                  <Image
                    className="cursor-pointer"
                    src="/downarrow.svg"
                    width={12}
                    height={12}
                    alt="down arrow"
                  />
                </div>
              </th>
              <th className="text-darkPurple f14 w-[10%] text-start ">
                <div className="flex items-center gap-2">
                  <p>Singles</p>
                  <Image
                    className="cursor-pointer"
                    src="/downarrow.svg"
                    width={12}
                    height={12}
                    alt="down arrow"
                  />
                </div>
              </th>
              <th className="text-darkPurple f14 w-[10%] text-start">
                <div className="flex items-center gap-2">
                  <p>Doubles</p>
                  <Image
                    className="cursor-pointer"
                    src="/downarrow.svg"
                    width={12}
                    height={12}
                    alt="down arrow"
                  />
                </div>
              </th>
              <th className="text-darkPurple f14 w-[5%] text-start">
                <div className="flex items-center gap-2">
                  <p>Age</p>
                  <Image
                    className="cursor-pointer"
                    src="/downarrow.svg"
                    width={12}
                    height={12}
                    alt="down arrow"
                  />
                </div>
              </th>
              <th className="text-darkPurple f14 w-[15%] text-start">
                <div className="flex items-center gap-2">
                  <p>Contract</p>
                  <Image
                    className="cursor-pointer"
                    src="/downarrow.svg"
                    width={12}
                    height={12}
                    alt="down arrow"
                  />
                </div>
              </th>
              <th className="text-darkPurple f14 w-screen text-start rounded-r-xl">
                Draws
              </th>
            </tr>
            {registeredPlayers.map(({ name, location, id }, index) => {
              return (
                <tr key={index} className="bg-white my-[10px] f14  ">
                  <td scope="col" className="p-4 rounded-l-xl">
                    <div className="flex items-center">
                      <input
                        {...register("playerSelected")}
                        value={id}
                        id="checkbox-all-search"
                        type="checkbox"
                        className="w-5 h-5 text-purple cursor-pointer bg-gray-100 border-gray-300 rounded  focus:ring-2 dark:bg-gray-700"
                      />
                    </div>
                  </td>
                  <td className="text-darkPurple f16 py-[25px]  ">
                    <div>
                      <p className="fw400 f-Abril ">
                        {/* Jeannie at universaltennis */}
                        {name}
                      </p>
                      <p className="fw400 text-grey">
                        {location}
                        India
                      </p>
                    </div>
                  </td>
                  <td className="text-green">
                    <div>
                      <p>
                        4.68 <span className="text-grey">(10%)</span>
                      </p>
                      <div className="flex items-center gap-2">
                        <Image
                          className="cursor-pointer"
                          src="/edit1.svg"
                          alt="edit"
                          width={12}
                          height={12}
                        />
                        <Image
                          className="cursor-pointer"
                          src="/delete.svg"
                          width={12}
                          height={12}
                          alt="delete icon"
                        />
                      </div>
                    </div>
                  </td>
                  <td className="text-grey">
                    <div className="flex gap-1">
                      <p>1.00-3.00</p>
                      <Image
                        className="cursor-pointer"
                        src="/edit1.svg"
                        width={12}
                        height={12}
                        alt="edit"
                      />
                    </div>
                  </td>
                  <td className="text-grey">27</td>
                  <td className="text-grey">
                    <div>
                      <p>ChrisMKuhl@rhyta.com</p>
                      <p>562-666-8181</p>
                    </div>
                  </td>
                  <td className=" text-grey fw400 ">
                    <div className="flex justify-between items-center">
                      <p>Round Robin Singles ad hoc singles, s</p>
                      <Image
                        className="lg:mr-[30px] cursor-pointer"
                        src="/messages.svg"
                        width={32}
                        height={32}
                        alt="message"
                      />
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PlayerList;

const styles = {
  searchContainer:
    "z-30 flex items-center gap-2 w-[300px] md:w-[400px] md:px-1 py-2",
  searchIcon: "text-[#13013C] w-[18px] h-[18px]",
  searchInput:
    "w-[170px] md:flex-1 outline-none border-none text-base text-[#13013C]",
};
