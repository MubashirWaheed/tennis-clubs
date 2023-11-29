import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/" className="cursor-pointer">
      <Image src="/Logo.svg" width={85} height={70} alt="Logo" />
    </Link>
  );
};

export default Logo;
