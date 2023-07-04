import ApplyButton from "@/components/ui/buttons/PrimaryButton";

export default function SportsFilter(){
    return(
        <div className="w-[400px] flex flex-col items-stretch gap-[20px]">
            <div className="w-full flex items-center justify-between">
                <h5 className="h5 text-[#13013C]">Sport</h5>
                <button className="f14 fw700 lh30 text-[#13013C]">Clear</button>
            </div>

            <form className="flex flex-col items-stretch gap-[40px]">
                <div className="flex flex-col items-stretch gap-[10px]">

                </div>
                <ApplyButton>Apply</ApplyButton>
            </form>
        </div>
    )
}