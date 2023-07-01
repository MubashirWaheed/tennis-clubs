import Image from "next/image";
import Editor from "./components/editor";
import headerLine from "@/app/assets/headerLine.svg";

const createNewClubEditor = () => {
    return(
        <main>
            <section className="py-14 w-full flex flex-col items-center">
                <h2 className="h2 text-[#13013c]">Create New Club</h2>
                <Image
                    src={headerLine}
                    alt="Header"
                    className="w-[120px]  h-[20px] mt-2"
                />
            </section>
            <Editor />
        </main>
    )
}

export default createNewClubEditor;
