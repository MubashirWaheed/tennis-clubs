import DescriptionInput from "@/components/ui/inputFields/TextArea";
import PublishButton from "@/components/ui/buttons/PrimaryButton";
import DrawftButton from "@/components/ui/buttons/SecondaryButton";

const EventPage = ({ disableBtn, handleSubmit }) => {
  return (
    <>
      <div className="mt-[30px]">
        <h5 className="h5 fw700 f18 text-[#13013C]">Event Details</h5>
        <p className="text-[#828282]">
          This message will appear publicly on the tournamnet event page.
        </p>
        <div className="mt-[30px]">
          <DescriptionInput id="eventDescription" label="Event Description" />
        </div>
      </div>
      <div className="my-[20px]  sm:mt-[120px] flex place-content-end gap-4">
        <DrawftButton size="small">Save As A Draft</DrawftButton>
        <PublishButton
          disabled={disableBtn}
          onClick={handleSubmit}
          size="small"
        >
          Save & Publish
        </PublishButton>
      </div>
    </>
  );
};

export default EventPage;
