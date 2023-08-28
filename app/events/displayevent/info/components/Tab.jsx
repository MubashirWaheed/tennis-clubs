import React, { useState } from "react";
import Overview from "./Tabs/Overview";
import Players from "./Tabs/Players";
import Draws from "./Tabs/Draws";
import Schedule from "./Tabs/Schedule";
import infodata from "../info.json";

const Tab = () => {
  const [tab, setTab] = useState(0);

  const handleTabClick = (value) => {
    setTab(value);
  };
  return (
    <div>
      <div className="p-[10px] w-full max-w-[1170px] mx-auto">
        <nav className="sm:px-[50px] h-[60px] w-full overflow-x-auto rounded-[10px] shadow-md bg-white flex justify-start gap-[30px] items-stretch mb-[30px]">
          {infodata.infonNavbar.map((item, index) => {
            return (
              <button
                onClick={() => handleTabClick(index)}
                key={index}
                className={`h-full ${
                  tab === index
                    ? "border-b-4 border-[#3B2273] focus:border-[#3B2273] focus:text-[#3B2273]"
                    : "border-b-4 border-white focus:border-[#3B2273]"
                } rounded-md px-[10px] text-[#828282] flex items-center justify-center`}
              >
                <p className="f16 fw700 lh24">{item.title}</p>
              </button>
            );
          })}
        </nav>

        {/* switching between tabs */}
        {tab === 0 && <Overview />}
        {tab === 1 && <Players />}
        {tab === 2 && <Draws />}
        {tab === 4 && <Schedule />}
      </div>
    </div>
  );
};

export default Tab;
