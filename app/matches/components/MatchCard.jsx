"use client";
import Image from "next/image";
import verifiedIcon from "../assets/verified.svg";

const MatchCard = ({eventName, eventLocation, eventDate, eventMonth, eventYear, tags, noOfRegistrations, otherDetails, isEventVerified, status, dayAndTime, isMatchPlay}) => {

    return(
        <article className="flex items-center rounded-[10px] bg-white shadow-md p-[30px]">
            <div className="flex-1 flex items-center gap-[20px]">
                <div className="flex flex-col items-center justify-center w-[100px] h-[100px] bg-[#3B2273] rounded-[10px] text-white">
                    <h3 className="text-[35px] uppercase fw700 text-center">{eventDate}</h3>
                    <p className="uppercase f14 fw700 lh22 text-center">{eventMonth}</p>
                    <p className="uppercase f14 fw700 lh22 text-center">{eventYear}</p>
                </div>

                <div className="flex flex-col justify-between">
                    
                    <ul className="flex items-center gap-2">
                    {tags?.map((tag, index)=>(
                        <li key={index} className="tag">{tag}</li>
                    ))}
                    </ul>
                    <h4 className="h4">{eventName}</h4>
                    <div className="flex items-center gap-[1px]">
                        <p className="p f16 fw700 text-[#828282] lh24">{eventLocation} {"."}</p>
                        <p className="p f16 fw700 text-[#828282] lh24">{noOfRegistrations} Registrations</p>
                    </div>
                    <ul className="flex items-center gap-[1px]">
                        {otherDetails?.map((detail, index)=>(
                            <p className="p f16 fw700 text-[#828282] lh24" key={index}>
                                {detail}{" . "}
                            </p>      
                        ))}
                    </ul>
                </div>
            </div>

            <div className="flex flex-col items-end">
                <div className="flex items-center gap-1">
                    <p className="py-[2px] px-[16px] rounded-[50px] bg-[#E8EFF7] f12 lh35 text-[#3B2273]">{status}</p>
                    {isEventVerified && <Image src={verifiedIcon} alt="Verified Icon" className="w-[20px] h-[20px]"/>}
                </div>
                <p className="p f16 fw700 text-[#828282] lh24">{dayAndTime}</p>
                <p className="p f16 fw700 text-[#828282] lh24">{isMatchPlay}</p>
            </div>
        </article>
    )
}

export default MatchCard;