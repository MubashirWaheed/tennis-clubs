"use client";
import CreateDrawBtn from "@/components/ui/buttons/PrimaryButton";
import { usePathname, useRouter } from "next/navigation";

const data = [
  { title: "STATUS", value: "Open Registration" },
  { title: "REGISTRATIONS", value: "1" },
  { title: "PLAYERS", value: "1" },
  { title: "REGISTRATION ENDS", value: "16 April 2023" },
];

const EventInfoLayout = ({ children }) => {
  const patheName = usePathname();
  console.log("patheName: ", patheName.split("/")[4]);
  const eventId = patheName.split("/")[4];
  // fetch data using the swr
  // here get the id of the draw
  // get the event details and display here dynamically from the database
  const testid = 356;
  const router = useRouter();
  return (
    <div>
      <header className="flex items-center py-[20px] md:py-[0px] justify-start bg-[#3B2273] h-full md:h-[113px]">
        <div className=" w-full max-w-[1170px] mx-auto flex flex-col md:flex-row items-center">
          <div className="mt-[10px] flex-wrap w-full flex flex-row items-center justify-center md:justify-start gap-6 md:gap-2 ">
            {data.map((item, index) => (
              <div
                key={index}
                className={`pr-[10px] md:px-[15px] border-r border-grey ${
                  index === data.length - 1 ? "border-r-0" : ""
                }`}
              >
                <p className="md:text-md text-xs text-white text-left">
                  {item.title}
                </p>
                <p className="text-white text-sm md:text-lg">{item.value}</p>
              </div>
            ))}
          </div>
          <div className="flex gap-3 items-center justify-center">
            <CreateDrawBtn
              className="flex-nowrap"
              size="small"
              // here the id of event will go
              onClick={() =>
                router.push(`/events/createdraw?eventId=${eventId}`)
              }
            >
              Create Draw
            </CreateDrawBtn>
            <CreateDrawBtn
              size="small"
              onClick={() => router.push("/events/createdraw/123")}
            >
              Edit Draw
            </CreateDrawBtn>
          </div>
        </div>
      </header>
      {children}
    </div>
  );
};

export default EventInfoLayout;
