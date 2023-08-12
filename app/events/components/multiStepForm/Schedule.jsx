import InputField from "@/components/ui/inputFields/TextField";
import NextButton from "@/components/ui/buttons/PrimaryButton";

const Schedule = () => {
  const handleForm = () => {};
  return (
    <>
      <form className="flex flex-col gap-4 mt-[30px]">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex flex-col gap-2">
            <h2>Tournament Begin</h2>
            <div className="flex  md:flex-row gap-4">
              <InputField
                type="text"
                value="02-10-2023"
                label="Date"
                onChange={handleForm}
              />
              <InputField
                type="text"
                value="05:20"
                label="Time"
                onChange={handleForm}
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h2>Tournament Ends</h2>
            <div className="flex gap-4">
              <InputField
                type="text"
                value="02-10-2023"
                label="Date"
                onChange={handleForm}
              />
              <InputField
                type="text"
                value="05:20"
                label="Time"
                onChange={handleForm}
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex flex-col gap-2">
            <h2>Tournament Begin</h2>
            <div className="flex  md:flex-row gap-4">
              <InputField
                type="text"
                value="02-10-2023"
                label="Date"
                onChange={handleForm}
              />
              <InputField
                type="text"
                value="05:20"
                label="Time"
                onChange={handleForm}
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h2>Tournament Ends</h2>
            <div className="flex gap-4">
              <InputField
                type="text"
                value="02-10-2023"
                label="Date"
                onChange={handleForm}
              />
              <InputField
                type="text"
                value="05:20"
                label="Time"
                onChange={handleForm}
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col md:max-w-[530px]">
          <h2>Draft Published</h2>
          <div className="flex gap-4">
            <InputField
              label="Date"
              type="text"
              onChange={handleForm}
              value="14-02-2023"
            />
            <InputField
              label="Time"
              type="text"
              onChange={handleForm}
              value=""
            />
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
