import React from "react";
import Modal from "@/components/ui/Modal/Modal";
import Button from "@/components/ui/buttons/SecondaryButton";

const AccountDelete = () => {
  return (
    <div>
      <Modal heading="Reguest for account deletion">
        <p className="text-[#828282] f16 fw400">
          Look for the "Account Settings" or "Profile Settings" option. This is
          usually located in the top right corner of the screen or in the
          dropdown menu under your account name. Once you are in the account
          settings, look for the "Delete Account" or "Close Account" option.
          This may be located under a sub-menu or in a separate section on the
          page. You may be asked to confirm your decision to delete your account
          by entering your password or by clicking a confirmation button. After
          confirming your decision, your account may be deactivated immediately,
          or there may be a waiting period before the account is fully deleted.
          Some websites or platforms may also send you an email confirmation of
          the account deletion.
        </p>
        <div className="mt-[20px]">
          <Button>Request For Account Deletion</Button>
        </div>
      </Modal>
    </div>
  );
};

export default AccountDelete;
