import Link from "next/link"
import RegisterForm from "./RegisterForm"

const Register = () => {
    return (
        <section className={styles.formContainer}>
            <div className="px-[37px] py-[32px] w-full flex flex-col gap-[30px]">
                <h1 className="h3 text-[#13013C] w-[412px]">Create your profile, get rated, and <span className="h3 text-[#FFBB34]">start playing!</span></h1>
                <RegisterForm />

                <div className="flex flex-col gap-[106px]">
                    <div className="flex items-center justify-between">
                    <p className="text-center f16 fw700 lh24 text-[#13013C]">Register With :</p>
                        <div className="flex gap=[8px] items-center">
                            <button className="h-[50px] w-[50px] rounded-sm shadow-md">G</button>
                            <button className="h-[50px] w-[50px] rounded-sm shadow-md">F</button>
                        </div>
                    </div>
                    <p className="text-center f18 fw400 lh30 text-[#828282]">Already have an account? 
                    <Link href={"/signin"} className="text-[#13013C]">Sign In</Link></p>
                </div>
            </div>
        </section>
    )
}

const styles = {
    formContainer: "rounded-[10px] bg-[#FFFFFF] w-[581px]",
    formHeader: "h4 text-[#13013C]",
}
export default Register