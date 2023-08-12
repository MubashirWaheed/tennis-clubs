import Image from "next/image";
import EmailField from "@/components/ui/inputFields/EmailField";
import NextButton from "@/components/ui/buttons/PrimaryButton";

const EventDetails = () => {
  return (
    <section className="mt-[40px]">
      <h2 className="my-[10px] f14 fw700  mt-[18px] text-darkPurple">
        Event Administrator (Organizer)
      </h2>
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
          <h2 className="fw700 f16 text-darkPurple">Richard K. McClain</h2>
          <p className="text-grey f14">Surat, India 0.00 (s)</p>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <div className="mt-[30px]">
          <p className="my-[5px] text-darkPurple f14 fw700">Contact Details</p>
          <EmailField label="Email" value="" type="email" />
        </div>

        <div className="flex gap-[10px] items-center w-full bg-white  h-[83px] shadow-sm rounded-[10px]">
          <div className="pl-[15px] ">
            <p className="text-[#000000] fw700 f14">
              Enable PIN for Registration
            </p>
            <p className="text-[#828282] f14 mt-[5px]">
              This would add an extra layer of security to the account, as even
              if someone were to obtain the user&apos;s password
            </p>
          </div>
        </div>
      </div>
      <div className="mt-[20px] flex place-content-end">
        <NextButton size="small">Next</NextButton>
      </div>
    </section>
  );
};

export default EventDetails;
const styles = {
  iconWrapper:
    "w-auto py-[24px] px-[4px] sm:p[0px]  sm:w-[100px] h-[37px] md:w-[60px] md:h-[60px] ml-[20px] flex items-center justify-center rounded-full bg-[#027333] cursor-pointer",
  icon: " w-[40px] h-[40px]",
};
