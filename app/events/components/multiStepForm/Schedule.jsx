import InputField from "@/components/ui/inputFields/TextField";
import NextButton from "@/components/ui/buttons/PrimaryButton";
import DateInput from "@/components/ui/inputFields/DateInput";
import TimeInput from "@/components/ui/inputFields/TimeInput";

const Schedule = ({ onNext }) => {
  return (
    <>
      <form className="flex flex-col gap-4 mt-[30px]">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex flex-col gap-2">
            <p className="text-[#13013C] f14 fw700">Tournament Begin</p>
            <div className="flex md:flex-row gap-4">
              <DateInput name="eventStartDate" />
              <TimeInput name="eventBeginTime" />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-[#13013C] f14 fw700">Tournament Ends</p>
            <div className="flex gap-4">
              <DateInput name="eventEndDate" />
              <TimeInput name="eventEndTime" />
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex flex-col gap-2">
            <p className="text-[#13013C] f14 fw700">Registration Begin</p>
            <div className="flex  md:flex-row gap-4">
              <DateInput name="registrationStartDate" />
              <TimeInput name="registrationBeginTime" />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-[#13013C] f14 fw700">Registration Ends</p>
            <div className="flex gap-4">
              <DateInput name="registrationEndDate" />
              <TimeInput name="registrationEndTime" />
            </div>
          </div>
        </div>

        <div className="flex flex-col md:max-w-[530px]">
          <p className="text-[#13013C] f14 fw700">Draft Published</p>
          <div className="flex gap-4">
            <DateInput name="publishedDate" />
            <TimeInput name="publishedTime" />
          </div>
        </div>
      </form>
      <div className="mt-[15px] flex items-center justify-between">
        <p className="text-[#828282]">
          <span className="fw700"> Timezone: </span>
          America/New York (GMT-04:00)
          <span className="text-[#027333]">Change</span>
        </p>
        <NextButton size="small" onClick={onNext}>
          Next
        </NextButton>
      </div>
    </>
  );
};
export default Schedule;
