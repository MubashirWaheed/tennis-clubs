import CreateAccount from "@/components/ui/buttons/PrimaryButton";
import Cancel from "@/components/ui/buttons/SecondaryButton";

const Payments = () => {
  const PaymentsData = {
    heading: "Payments Account",
    subheading: "MPR Payments Powered By WePay",
    points: [
      `MPR is proud to partner with WePay, a Chase Company, to facilitate payments for clubs and events on our platform.`,
      `WePay is a secure, customizable payments platform - like Paypal or Stripe - that allows us to provide the best experience for our organizers and players.`,
      `With MPR Payments powered by WePay, club and event organizers can seamlessly set entry fees, collect funds, distribute refunds, and deposit earnings to their bank account.`,
      `It only takes a minute to create your WePay account below and start accepting payments on UTR.`,
    ],
  };
  return (
    <>
      

      {/* Main */}
      <section className="relative -top-[30px] w-full max-w-[1170px] mx-auto bg-[#fff] rounded-[10px] shadow-md">
        <div className="px-[52px] py-[48px]">
          <h2 className="h2 text-[#13013c] mb-[19px]">{PaymentsData.heading}</h2>
          <p className="f18 fw700 lh24 text-[#13013c]">
            {PaymentsData.subheading}
          </p>
          <ul className="flex flex-col gap-[20px] mt-[13px]">
            {PaymentsData.points.map((point, index) => (
              <li key={index} className="text-[#828282] f16 fw400 lh24">
                {point}
              </li>
            ))}
          </ul>
          <div className=" flex w-full gap-[8px] mt-[15px]">
            <CreateAccount>Create WePay Account</CreateAccount>
            <Cancel>Cancel</Cancel>
          </div>
        </div>
      </section>
    </>
  );
};

export default Payments;
