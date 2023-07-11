import Link from "next/link"
import RegisterForm from "./components/RegisterForm"
import Image from "next/image";

const RegisterAsAPlayer = () => {
    return (
      <section className={styles.formContainer}>
        <div className="px-[37px] py-[32px] w-full flex flex-col gap-[30px]">
          <h1 className="h3 text-[#13013C] w-[412px]">
            Create your profile, get rated, and{" "}
            <span className="h3 text-[#FFBB34]">start playing!</span>
          </h1>

          <RegisterForm />

          <div className="flex flex-col gap-[106px]">
            <div className="flex items-center justify-between">
              <p className="text-center f16 fw700 lh24 text-[#13013C]">
                Register With :
              </p>
              <div className="flex gap=[8px] items-center">
                <button className="h-[50px] w-[50px] rounded-sm shadow-md flex items-center justify-center">
                  <Image
                    src="/google.png"
                    alt="Social Icons"
                    width={30}
                    height={30}
                  />
                </button>
                <button className="h-[50px] w-[50px] rounded-sm shadow-md flex items-center justify-center">
                  <Image
                    src="/facebook.png"
                    alt="Social Icons"
                    width={30}
                    height={30}
                  />
                </button>
              </div>
            </div>
            <p className="text-center f18 fw400 lh30 text-[#828282]">
              Already have an account?
              <Link href={"/signin"} className="text-[#13013C]">
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </section>
    );
}
const styles = {
    formContainer: "rounded-[10px] bg-[#FFFFFF] w-[581px] z-20",
    formHeader: "h4 text-[#13013C]",
}

export default RegisterAsAPlayer;