import Image from "next/image";
import EmailField from "@/components/ui/inputFields/EmailField";
import NextButton from "@/components/ui/buttons/PrimaryButton";

const EventDetails = () => {
  return (
    <section>
      <h2 className="mt-[18px]">Event Administrator (Organizer)</h2>
      <div className="flex gap-[10px] items-center w-full bg-white  h-[83px] shadow-sm rounded-[10px]">
        <div className={styles.iconWrapper}>
          <Image
            src="/user-icon.svg"
            alt="User Icon"
            width={40}
            height={40}
            className={styles.icon}
          />
        </div>
        <div>
          <h2>Richard K. McClain</h2>
          <p>Surat, India • 0.00 (s)</p>
        </div>
      </div>
      <dix>
        <p>Contact Details</p>
        <EmailField
          label="Email"
          value="RichardKMcClain@jourrapide.com"
          type="email"
        />
      </dix>

      <div className="flex gap-[10px] items-center w-full bg-white  h-[83px] shadow-sm rounded-[10px]">
        <div>
          <p className="text-[#000000]">Enable PIN for Registration</p>
          <p className="text-[#828282]">
            This would add an extra layer of security to the account, as even if
            someone were to obtain the user's password
          </p>
          {/* add toggle here */}
        </div>
      </div>
      <div className="flex place-content-end">
        <NextButton size="small">Next</NextButton>
      </div>
    </section>
  );
};

export default EventDetails;
const styles = {
  iconWrapper:
    "w-[100px] h-[37px] md:w-[60px] md:h-[60px] ml-[20px] flex items-center justify-center rounded-full bg-[#027333] cursor-pointer",
  icon: "w-[40px] h-[40px]",
};
