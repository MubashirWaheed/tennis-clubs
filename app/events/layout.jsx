import Image from "next/image";
import clubData from "../clubs/[clubID]/clubData.json";

const EventLayout = ({ children }) => {
  return <main>{children}</main>;
};

export default EventLayout;
