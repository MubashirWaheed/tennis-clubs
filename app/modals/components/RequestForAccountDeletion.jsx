import Image from "next/image";
import HeaderLine from "../../temp/assets/Header Line.svg";
import ModalClose from "@/components/ui/buttons/ModalClose";
import Deletion from "@/components/ui/buttons/SecondaryButton";

const RequestForAccountDeletion = () => {
  const details = [
    `Look for the "Account Settings" or "Profile Settings" option. This is usually located in the top right corner of the screen or in the dropdown menu under your account name.`,
    `Once you are in the account settings, locate the "Delete Account" or "Close Account" option. This option may be found under a sub-menu or in a separate section on the page.`,
    `You may be asked to confirm your decision to delete your account by entering your password or by clicking a confirmation button.`,
    `After confirming your decision, your account may be deactivated immediately, or there may be a waiting period before the account is fully deleted. Some websites or platforms may also send you an email confirmation of the account deletion.`,
  ];

  return (
    <article className="px-[48px] py-[46px] bg-[#fff] rounded-[10px] border-t-4 border-t-[#FFBB34]">
      <div className="flex items-start justify-between">
        <h2 className="h2 text-[#13013c] w-[454px]">
          Request for account deletion
        </h2>
        <ModalClose />
      </div>
      <Image
        src={HeaderLine}
        alt="Header Line"
        className="mt-[15px] w-[120px] h-[20px] mb-[15px]"
      />
      <div className="w-[552px]">
        {details.map((point, index) => (
          <p key={index} className="f16 fw400 lh24 text-[#828282] mb-[22px]">
            {point}
          </p>
        ))}
      </div>
      <Deletion>Request for account deletion</Deletion>
    </article>
  );
};

export default RequestForAccountDeletion;
