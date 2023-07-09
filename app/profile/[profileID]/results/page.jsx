import profileData from "../profileData.json";
import ResultCard from "./ResultCard";

const Results = () => {
    return (
        <section>
            <div className="flex flex-col gap-[55px] items-start">
                {
                    profileData?.results?.map((result) => (
                        <ResultCard key={result.id} result={result} />
                    ))
                }
            </div>
        </section>
    )
}

export default Results;