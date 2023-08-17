import React from "react";
import Modal from "@/components/ui/Modal/Modal";

const PayementSuccess = () => {
  return (
    <div>
      <Modal heading="Congratulations! Your payment has been successfully processed.">
        <p className="text-grey py-[15px]">
          We have received your payment and would like to confirm that your
          transaction has been completed. You should receive a confirmation
          email shortly with the details of your purchase. Thank you for
          choosing our services, and please do not hesitate to contact us if you
          have any questions
        </p>
      </Modal>
    </div>
  );
};

export default PayementSuccess;
