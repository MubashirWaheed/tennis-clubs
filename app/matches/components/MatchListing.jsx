import MatchCard from "./MatchCard";

const MatchListing = ({matches}) => {
    return(
        <div>
            {matches?.map((match, index)=>(
                <MatchCard key={index} {...match}/>
            ))}
        </div>
    )
}

export default MatchListing;