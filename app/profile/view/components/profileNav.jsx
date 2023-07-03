import Link from "next/link";

const ProfileNavigation = ({navItems}) => {
    return(
        <article className="px-[50px] h-[60px] w-full rounded-[10px] shadow-md bg-white flex justify-start gap-[30px] items-stretch">
            {navItems.map((navItem, index)=>(
                <Link href={navItem?.href} className="h-full border-b-4 border-white focus:border-[#3B2273] rounded-md px-[10px] text-[#828282] focus:text-[#3B2273] flex items-center justify-center" key={index}>
                    <p className="f16 fw700 lh24">{navItem?.title}</p>
                </Link>
            ))}
        </article>
    )
}

export default ProfileNavigation;