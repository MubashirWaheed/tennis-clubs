const Stepper = () => {
  return (
    <>
      <ol class="my-[45px] flex items-center justify-center md:ml-[30px] ">
        <div className="flex flex-col items-center w-full">
          <li class="flex w-full items-center text-white after:content-[''] after:w-full after:h-1 after:border-b-0 after:border-[#E8EFF7] after:border-[2px] after:inline-block">
            <span class="flex items-center justify-center w-10 h-10 bg-[#027333] rounded-full lg:h-12 lg:w-12  shrink-0">
              <p className="fw700">1</p>
            </span>
          </li>
          <li className="flex  w-full items-center ml-[-10px]">
            <span className="fw700 text-[#13013C]">
              <p>Basic Info</p>
            </span>
          </li>
        </div>
        <div className="flex flex-col items-center w-full">
          <li class="flex w-full items-center text-[#13013C]  after:content-[''] after:w-full after:h-1 after:border-b-0 after:border-[#E8EFF7] after:border-[2px] after:inline-block">
            <span class="flex  items-center justify-center w-10 h-10 bg-[#E8EFF7] rounded-full lg:h-12 lg:w-12 dark:bg-blue-800 shrink-0">
              <p className="fw700">2</p>
            </span>
          </li>
          <li className="flex  w-full items-center ml-[-20px]">
            <span className="fw700 text-[#13013C]">
              <p>Schedule</p>
            </span>
          </li>
        </div>

        <div className="flex flex-col items-center  w-full">
          <li class="flex  w-full items-center text-[#13013C] after:content-[''] after:w-full after:h-1 after:border-b-0 after:border-[#E8EFF7] after:border-[2px] after:inline-block">
            <span class="flex  items-center justify-center w-10 h-10 bg-[#E8EFF7] rounded-full lg:h-12 lg:w-12  shrink-0">
              <p className="fw700">3</p>
            </span>
          </li>
          <li className="flex  w-full items-center ml-[-25px]">
            <span>
              <p className="fw700 text-[#13013C]">Event Details</p>
            </span>
          </li>
        </div>
        <div className="flex flex-col items-center w-full">
          <li class="flex  w-full items-center text-[#13013C] after:content-[''] after:w-full after:h-1 after:border-b-0 after:border-[#E8EFF7] after:border-[2px] after:inline-block">
            <span class="flex  items-center justify-center w-10 h-10 bg-blue-100 rounded-full lg:h-12 lg:w-12  shrink-0">
              <p className="fw700">4</p>
            </span>
          </li>
          <li className="flex  w-full items-center ml-[-20px]">
            <span className="fw700 text-[#13013C]">
              <p>Divisions</p>
            </span>
          </li>
        </div>
        <div className="flex flex-col justify-center items-center w-[100px] ">
          <li class="flex w-[100px]   items-center text-[#13013C]">
            <span class="flex  items-center justify-center w-10 h-10 bg-[#E8EFF7] rounded-full lg:h-12 lg:w-12 dark:bg-blue-800 shrink-0">
              <p className="fw700">5</p>
            </span>
          </li>
          <li className="flex w-full items-center ml-[-10px]">
            <span className="fw700 text-[#13013C]">
              <p>Event Page</p>
            </span>
          </li>
        </div>
      </ol>
    </>
  );
};

export default Stepper;
