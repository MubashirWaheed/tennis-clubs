"use client";
import CreateAccount from "@/components/ui/buttons/PrimaryButton";
import Cancel from "@/components/ui/buttons/SecondaryButton";
import { useRouter } from "next/navigation";

const ButtonsDIV = () => {
    

    const router = useRouter();

    return (
        <div className="flex flex-col items-center lg:flex-row w-full gap-[8px] mt-[15px]">
            <CreateAccount onClick={() => router.push("/clubs/123/payments/confirm")}>
                Create WePay Account
            </CreateAccount>
            <Cancel onClick={() => router.push("/clubs/123")}>Cancel</Cancel>
        </div>
    );
};

export default ButtonsDIV;
