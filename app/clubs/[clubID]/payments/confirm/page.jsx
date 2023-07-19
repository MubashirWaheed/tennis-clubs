import ButtonDIV from "./ButtonDIV";


const PaymentCofirmation = () => {
  const PaymentConfirmation = {
    heading: "Payments Account",
    subheading: "Confirmation and Next Steps",
    points: [
      `Log into your new account at WePay.com with the details you just created.`,
      `Bookmark the page so its easily accessible. (CMD+D or CTRL+D on your keyboard)`,
      `Update and verify your company or personal information`,
      `Add a bank account for withdrawing funds you collect on MPR.`,
    ],
  };

  
  
  return (
    <section className="relative -top-[30px] w-full max-w-[1170px] mx-auto bg-[#fff] rounded-[10px] shadow-md">
      <div className="px-[52px] py-[48px]">
        <h2 className="h2 text-[#13013c] mb-[19px]">
          {PaymentConfirmation.heading}
        </h2>
        <p className="f18 fw700 lh24 text-[#13013c]">
          {PaymentConfirmation.subheading}
        </p>
        <div className="flex flex-col gap-[25px] mt-[15px]">
          <p className="text-[#828282] f16 fw400 lh24">
            Your WePay payments account has been created and you can start
            accepting entry fees for events on UTR immediately!
          </p>
          <p className="text-[#828282] f16 fw400 lh24">
            Important: In order to fully activate your WePay payments account,
            please follow these quick steps:
          </p>
        </div>
        <ul className="flex flex-col  mt-[20px]">
          {PaymentConfirmation.points.map((point, index) => (
            <li key={index} className="text-[#828282] f16 fw400 lh24">
              {index + 1}. {point}
            </li>
          ))}
        </ul>
        <ButtonDIV />
      </div>
    </section>
  );
};
export default PaymentCofirmation;
