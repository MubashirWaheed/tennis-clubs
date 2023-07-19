"use client";
import { useRouter } from "next/navigation";
import ClubProfile from "@/components/ui/buttons/PrimaryButton";

const ButtonDIV = () => {
    const router = useRouter();
    return (
        <>
            <p className="text-[#828282] f16 fw400 lh24 mt-[20px] mb-[30px]">
            Anytime youd like to view your balance, review transactions, issue
            refunds or withdraw money. WePay is the place to go.
            </p>
            <ClubProfile onClick={() => router.push("/clubs/123")}>
            Return To Club Profile
            </ClubProfile>
        </>
    );
};

export default ButtonDIV;
