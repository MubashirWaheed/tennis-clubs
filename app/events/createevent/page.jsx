"use client";
import { useState } from "react";
import BasicInfo from "../components/multiStepForm/BasicInfo";
import BasicInfo2 from "../components/multiStepForm/BasicInfo2";
import EventDetails from "../components/multiStepForm/EventDetails";
import Divisions from "../components/multiStepForm/Divisions";
import Schedule from "../components/multiStepForm/Schedule";
import Stepper from "../components/Stepper";
import EventPage from "../components/multiStepForm/EventPage";
import { FormProvider, useForm } from "react-hook-form";
import useFormPersist from "react-hook-form-persist";
import dayjs from "dayjs";
import axios from "axios";
import { useSearchParams, useRouter } from "next/navigation";

const EventForm = () => {
  const [step, setStep] = useState(0);
  const searchParams = useSearchParams();
  const [eventId, setEventId] = useState();
  const [disableBtn, setDisableBtn] = useState(false);
  const router = useRouter();
  const test = searchParams.get("clubId");

  const methods = useForm({
    defaultValues: {
      eventStartDate: dayjs(),
      eventEndDate: dayjs(),
      eventBeginTime: dayjs(),
      eventEndTime: dayjs(),
      registrationStartDate: dayjs(),
      registrationEndDate: dayjs(),
      registrationBeginTime: dayjs(),
      registrationEndTime: dayjs(),
      publishedDate: dayjs(),
      publishedTime: dayjs(),
    },
    shouldUnregister: false,
  });

  useFormPersist("event-form", {
    watch: methods.watch,
    setValue: methods.setValue,
    storage: window.localStorage,
  });

  const handleSubmit = async () => {
    setDisableBtn(true);
    const data = methods.getValues();

    const result = await axios.post("/api/event", { data, clubId: test });
    const { id } = result.data;
    setEventId(id);
    router.push(`/events/displayevent/info/${id}`);
    setDisableBtn(false);
  };

  const handleNext = () => {
    setStep(step + 1);
  };

  const handlePrev = () => {
    setStep(step - 1);
  };

  return (
    <section className="relative -top-[30px] w-full max-w-[1170px] mx-auto bg-[#fff] rounded-[10px] shadow-md">
      <div className="p-[10px] md:mx-[52px] md:my-[48px]">
        <h2 className="h2 fw400 text-[#13013C]">Create An Event</h2>
        <Stepper step={step} setStep={setStep} />
        <FormProvider {...methods}>
          {step === 0 && <BasicInfo onNext={handleNext} />}
          {/* {step === 1 && <BasicInfo2 onNext={handleNext} onPrev={handlePrev} />} */}
          {step === 1 && <Schedule onNext={handleNext} onPrev={handlePrev} />}
          {step === 2 && (
            <EventDetails onNext={handleNext} onPrev={handlePrev} />
          )}
          {step === 3 && <Divisions onNext={handleNext} onPrev={handlePrev} />}
          {step === 4 && (
            <EventPage disableBtn={disableBtn} handleSubmit={handleSubmit} />
          )}
        </FormProvider>
      </div>
    </section>
  );
};
export default EventForm;
