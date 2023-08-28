"use client";
import RegisterButton from "@/components/ui/buttons/PrimaryButton";
import Image from "next/image";
import Tab from "./components/Tab";
import UpgradeToPower from "./components/paymentWorkFlow/UpgradeToPower";
import SelectDivision from "./components/paymentWorkFlow/SelectDivision";
import { useEffect, useState } from "react";
import DivisionInfo from "./components/paymentWorkFlow/DivisionInfo";
import DivisionInfo2 from "./components/paymentWorkFlow/DvisionInfo2";

const EventInfo = () => {
  const [togglePaymentbar, setTogglePaymentbar] = useState(false);
  const [panelStack, setPanelStack] = useState(["updgradeToPower"]);

  const pushPanel = (panel) => {
    setPanelStack([...panelStack, panel]);
  };

  const popPanel = () => {
    if (panelStack.length > 1) {
      const newStack = panelStack.slice(0, -1);
      setPanelStack(newStack);
    }
  };

  const currentPanel = panelStack[panelStack.length - 1];

  const renderPanel = () => {
    switch (currentPanel) {
      case "updgradeToPower":
        return (
          <UpgradeToPower
            onClose={() => setTogglePaymentbar(!togglePaymentbar)}
            onSwitch={(panel) => pushPanel(panel)}
          />
        );
      case "selectdivision":
        return (
          <SelectDivision
            onClose={() => {
              setTogglePaymentbar(!togglePaymentbar);
              setPanelStack(["updgradeToPower"]);
            }}
            onSwitch={(panel) => pushPanel(panel)}
          />
        );
      case "divisioninfo":
        return (
          <DivisionInfo
            onClose={() => {
              setTogglePaymentbar(!togglePaymentbar);
              setPanelStack(["updgradeToPower"]);
            }}
            onSwitch={(panel) => pushPanel(panel)}
            onBack={popPanel}
          />
        );
      case "divisioninfo2":
        return (
          <DivisionInfo2
            onClose={() => {
              setTogglePaymentbar(!togglePaymentbar);
              setPanelStack(["updgradeToPower"]);
            }}
            onSwitch={(panel) => pushPanel(panel)}
            onBack={popPanel}
          />
        );
      default:
        return null;
    }
  };

  useEffect(() => {
    if (togglePaymentbar) {
      document.body.classList.add("fixed", "overflow-hidden");
    } else {
      document.body.classList.remove("fixed", "overflow-hidden");
    }
  }, [togglePaymentbar]);

  return (
    <div>
      <section className="p-[10px] bg-[#FAFBFF] h-auto flex items-center ">
        <div className=" bg-[#FAFBFF] py-[20px] md:py-[30px] w-full max-w-[1170px] mx-auto flex flex-col md:flex-row justify-between">
          <div className=" flex flex-col">
            <div className="flex gap-4 items-center">
              <div className="flex flex-col">
                <p className="text-green fw700">HRT ACADEMIA DE TENIS</p>
                <h2 className="text-start text-[24px] md:text-4xl f-Abril text-[#13013C]  md:mt-[10px] ">
                  HRT Spring Legend Series 2/7 - Junior Circuit Boys/girls
                </h2>
              </div>
            </div>
            <p className="text-grey text-[14px] my-[7px] sm:text-[16px] md:mt-[20px] ">
              Apr 16, 8:00 Am Pdt | Larkspur, Ca | $75–$87 Entry Fees | Outdoor
              | Hardcourt | Singles
            </p>
          </div>
          <div className="flex items-center gap-4">
            <button className="border border-[#027333] p-[7px] rounded-md flex items-center md:gap-3 px-[15px] text-green">
              <Image
                // add color to the svg
                src="/share.svg"
                color="red"
                alt="share"
                width={26}
                height={26}
              />
              Share
            </button>
          </div>
        </div>
      </section>

      <section className="p-[10px] md:mt-[25px] flex items-center justify-center w-full">
        <div className="max-w-[1170px]  w-full flex gap-6 flex-wrap md:flex-nowrap">
          <div className="basis-2/3 grow  w-full rounded-lg">
            <Image
              className="w-full h-auto rounded-xl"
              src="/tennischampionship.png"
              alt="cover"
              width={0}
              height={0}
              sizes="100vw"
            />
          </div>

          <div className="basis-1.5/3 grow flex flex-col gap-2">
            <h5 className="fw700 text-darkPurple f24">2 Divisions</h5>
            {/* card */}
            <div className="flex justify-between px-[20px] gap-[10px] items-center w-full bg-white mt-[0px] md:mt-[18px] h-[83px] shadow-md rounded-[10px]">
              <div className="flex flex-col">
                <p className="fw700 text-lg text-darkPurple">
                  Coed Singles UTR 3-4.99
                </p>
                <p className="text-grey fw700 mt-[3px]">10/12 registered</p>
              </div>
              <p className="text-darkPurple fw700">
                <span className="line-through text-grey">$72</span> / $60
              </p>
            </div>

            <div className="md:mb-[100px] flex justify-between px-[20px] gap-[10px] items-center w-full bg-white mt-[0px] md:mt-[18px] h-[83px] shadow-md rounded-[10px]">
              <div className="flex flex-col">
                <p className="fw700 text-lg text-darkPurple">
                  Coed Singles UTR 3-4.99
                </p>
                <p className="text-grey fw700 mt-[3px]">10/12 registered</p>
              </div>
              <p className="text-darkPurple fw700">
                <span className="line-through text-grey">$72</span> / $60
              </p>
            </div>

            <RegisterButton
              onClick={() => setTogglePaymentbar(true)}
              className="mt-[100px]"
            >
              Register
            </RegisterButton>

            <p className="text-grey f16 fw700 text-center my-[10px]">
              You can still <span className="text-darkPurple"> register </span>
              for this event. Registration ends on May 8, 5:30pm ACST
            </p>
          </div>
        </div>
      </section>

      {togglePaymentbar && <div>{renderPanel()}</div>}
      <Tab />
    </div>
  );
};

export default EventInfo;
