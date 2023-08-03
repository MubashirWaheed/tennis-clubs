const eventInfoLayout = ({ children }) => {
  return (
    <div>
      <header className="flex items-center py-[20px] md:py-[0px] justify-start bg-[#3B2273] h-full md:h-[113px]">
        <div className=" w-full max-w-[1170px] mx-auto flex flex-col md:flex-row items-center">
          <div className="mt-[10px] flex-wrap w-full flex flex-row items-center justify-center md:justify-start gap-6 md:gap-2 ">
            <div className="pr-[10px] md:px-[15px] border-r border-grey">
              <p className="md:text-md text-xs text-white text-left ">STATUS</p>
              <p className="text-white text-sm md:text-lg">Open Registration</p>
            </div>
            <div className=" pr-[10px] md:px-[15px] border-r border-grey">
              <p className="text-white md:text-md text-xs">REGISTRATIONS</p>
              <p className="text-white  text-sm md:text-lg">1</p>
            </div>
            <div className="pr-[10px] md:px-[15px] border-r border-grey">
              <p className="text-white text-center md:text-md text-xs">
                PLAYERS
              </p>
              <p className="text-white  text-sm md:text-lg">1</p>
            </div>
            <div>
              <p className="text-white md:text-md text-xs">REGISTRATION ENDS</p>
              <p className="text-white text-center text-sm md:text-lg">
                16 April 2023
              </p>
            </div>
          </div>
        </div>
      </header>

      {children}
    </div>
  );
};

export default eventInfoLayout;
