"use client";
import { useState } from "react";
import BasicInfo from "./components/multiStepForm/BasicInfo";
import BasicInfo2 from "./components/multiStepForm/BasicInfo2";
import EventDetails from "./components/multiStepForm/EventDetails";
import Divisions from "./components/multiStepForm/Divisions";
import Schedule from "./components/multiStepForm/Schedule";
import Stepper from "./components/Stepper";

const eventView = () => {
  const [step, setStep] = useState(4);

  const handleNext = () => {
    setStep(step + 1);
  };

  const handlePrev = () => {
    setStep(step - 1);
  };
  return (
    <>
      <section className="relative -top-[30px] w-full max-w-[1170px] mx-auto bg-[#fff] rounded-[10px] shadow-md">
        <div className="md:px-[52px] md:py-[48px]">
          <h2 className="h2 fw400 text-[#13013C]">Create An Event</h2>
          <Stepper />
          {step === 0 && <BasicInfo onNext={handleNext} />}
          {step === 1 && <BasicInfo2 onNext={handleNext} onPrev={handlePrev} />}
          {step === 2 && <Schedule onNext={handleNext} onPrev={handlePrev} />}
          {step === 3 && (
            <EventDetails onNext={handleNext} onPrev={handlePrev} />
          )}
          {step === 4 && <Divisions onNext={handleNext} onPrev={handlePrev} />}
        </div>
      </section>
    </>
  );
};
export default eventView;
