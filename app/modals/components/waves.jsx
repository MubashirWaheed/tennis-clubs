
import Image from "next/image";
export default function Waves() {
  return (
    <>
      {/* Wave Design on the right side. */}
      <Image
        src="/vector-4.svg"
        alt="Vector1"
        className="pointer-events-none z-10 text-[#828282] absolute right-0 -translate-y-1/2 top-[50%] w-[350px] h-[480px]"
      />
      <Image
        src="/vector-1.svg"
        alt="Vector2"
        className="pointer-events-none z-10 text-[#828282] absolute right-0 -translate-y-1/2 top-[50%] w-[400px] h-[540px]"
      />
      <Image
        src="/vector-2.svg"
        alt="Vector3"
        className="pointer-events-none z-10 text-[#828282] absolute right-0 -translate-y-1/2 top-[50%] w-[450px] h-[600px]"
      />
      <Image
        src="/vector-3.svg"
        alt="Vector4"
        className="pointer-events-none z-10 text-[#828282] absolute right-0 -translate-y-1/2 top-[50%] w-[500px] h-[660px]"
      />
      <Image
        src="/vector-5.svg"
        alt="Vector5"
        className="pointer-events-none z-10 text-[#828282] absolute right-0 -translate-y-1/2 top-[50%] w-[550px] h-[890px]"
      />
      <Image
        src="/vector-6.svg"
        alt="Vector6"
        className="pointer-events-none z-10 text-[#828282] absolute right-0 -translate-y-1/2 top-[50%] w-[600px] h-[900px]"
      />
    </>
  );
}
