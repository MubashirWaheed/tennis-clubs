import vector1 from "../../(authentication)/assets/vector-1.svg";
import vector2 from "../../(authentication)/assets/vector-2.svg";
import vector3 from "../../(authentication)/assets/vector-3.svg";
import vector4 from "../../(authentication)/assets/vector-4.svg";
import vector5 from "../../(authentication)/assets/vector-5.svg";
import vector6 from "../../(authentication)/assets/vector-6.svg";
import Image from "next/image";
export default function Waves() {
  return (
    <>
      {/* Wave Design on the right side. */}
      <Image
        src={vector4}
        alt="Vector1"
        className="z-10 text-[#828282] pointer-events-none absolute right-0 -translate-y-1/2 top-[50%] w-[350px] h-[480px]"
      />
      <Image
        src={vector1}
        alt="Vector2"
        className="z-10 text-[#828282] pointer-events-none absolute right-0 -translate-y-1/2 top-[50%] w-[400px] h-[540px]"
      />
      <Image
        src={vector2}
        alt="Vector3"
        className="z-10 text-[#828282] pointer-events-none absolute right-0 -translate-y-1/2 top-[50%] w-[450px] h-[600px]"
      />
      <Image
        src={vector3}
        alt="Vector4"
        className="z-10 text-[#828282] pointer-events-none absolute right-0 -translate-y-1/2 top-[50%] w-[500px] h-[660px]"
      />
      <Image
        src={vector5}
        alt="Vector5"
        className="z-10 text-[#828282] pointer-events-none absolute right-0 -translate-y-1/2 top-[50%] w-[550px] h-[890px]"
      />
      <Image
        src={vector6}
        alt="Vector6"
        className="z-10 text-[#828282] pointer-events-none absolute right-0 -translate-y-1/2 top-[50%] w-[600px] h-[900px]"
      />
    </>
  );
}
