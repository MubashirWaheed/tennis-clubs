"use client";

const MatchCard = ({eventName, eventLocation, eventDate, eventMonth, eventYear, tags, noOfRegistrations, otherDetails, isEventVerified, status, dayAndTime, isMatchPlay}) => {
    return(
        <article className="flex gap-2 px-6 py-5 rounded-lg bg-white shadow-md">
            <div className="flex-1 flex flex-col items-center justify-center gap-1"></div>
            <div className="flex-1 flex flex-col justify-between"></div>
            <div className="flex-1 flex flex-col justify-between"></div>
        </article>
    )
}

export default MatchCard;