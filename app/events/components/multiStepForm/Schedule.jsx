import InputField from "@/components/ui/inputFields/TextField";
import NextButton from "@/components/ui/buttons/PrimaryButton";
import DateInput from "@/components/ui/inputFields/DateInput";
import TimeInput from "@/components/ui/inputFields/TimeInput";

const Schedule = () => {
  const handleForm = () => {};
  return (
    <>
      <form className="flex flex-col gap-4 mt-[30px]">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex flex-col gap-2">
            <p className="text-[#13013C] f14 fw700">Tournament Begin</p>
            <div className="flex  md:flex-row gap-4">
              <DateInput />
              <TimeInput />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-[#13013C] f14 fw700">Tournament Ends</p>
            <div className="flex gap-4">
              <DateInput />
              <TimeInput />
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex flex-col gap-2">
            <p className="text-[#13013C] f14 fw700">Tournament Begin</p>
            <div className="flex  md:flex-row gap-4">
              <DateInput />
              <TimeInput />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-[#13013C] f14 fw700">Tournament Ends</p>
            <div className="flex gap-4">
              <DateInput />
              <TimeInput />
            </div>
          </div>
        </div>

        <div className="flex flex-col md:max-w-[530px]">
          <p className="text-[#13013C] f14 fw700">Draft Published</p>
          <div className="flex gap-4">
            <DateInput />
            <TimeInput />
          </div>
        </div>
      </form>
      <div className="mt-[15px] flex items-center justify-between">
        <p className="text-[#828282]">
          <span className="fw700"> Timezone: </span>
          America/New York (GMT-04:00)
          <span className="text-[#027333]">Change</span>
        </p>
        <NextButton size="small">Next</NextButton>
      </div>
    </>
  );
};
export default Schedule;
