
import MatchCard from "./MatchCard";

const MatchListing = ({matches}) => {
    return(
        <div className="flex flex-col gap-[15px]">
            {matches?.map((match, index)=>(
                <MatchCard {...match} key={index}/>
            )
            )}
        </div>
    )
}

export default MatchListing;