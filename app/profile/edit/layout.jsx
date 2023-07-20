import Image from "next/image";

const EditProfileLayout = ({children}) => {
    return (
      <main>
        <section className="relative bg-[#3B2273]">
          <div className="flex flex-row justify-between items-center h-full w-full max-w-[1170px] px-2 lg:px-0 mx-auto pt-[50px] pb-[160px]">
            <h1 className="text-white h2">Edit Profile</h1>
          </div>

          <Image
            width={100}
            height={100}
            src="/Ball.svg"
            alt="Ball"
            className="pointer-events-none absolute bottom-0 right-0 w-[100px] h-[100px] object-contain"
          />
          <Image
            src="/HorizontalBat.svg"
            height={100}
            width={100}
            alt=""
            className="absolute left-0 bottom-2"
          />
          <Image
            src="/VerticalBat.svg"
            height={50}
            width={50}
            alt=""
            className="absolute left-0 bottom-0"
          />
        </section>

        {children}
      </main>
    );
}

export default EditProfileLayout;