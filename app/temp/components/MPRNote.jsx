import Image from "next/image";
import HeaderLine from "../../temp/assets/Header Line.svg";
import ModalClose from "@/components/ui/buttons/ModalClose";

const MPRNote = () => {
  const details = [
    `However, in general, tennis organizations or clubs may require more details about you for various reasons, such as to register you as a member, to verify your identity, to participate in tournaments or events, or to provide personalized coaching or training. Providing additional information may also help tennis organizations better understand your needs and preferences, and therefore offer you a better experience. It is recommended that you contact the specific tennis organization or club directly to inquire about why more details may be needed.`,
    `Tennis is a sport played between two players (singles) or between two teams of two players each (doubles), using rackets to hit a ball over a net and into the opponent's court. The objective of the game is to hit the ball in such a way that the opponent is not able to return it properly, thus scoring points.`,
    `Tennis can be played on various surfaces such as grass, clay, or hard courts, and each surface has its own unique characteristics and playing style. The game is popular all over the world and is played at both amateur and professional levels. It is also one of the four major Grand Slam tournaments, which includes the Australian Open, French Open, Wimbledon, and US Open.`,
    `Tennis requires a combination of physical and mental skills, including hand-eye coordination, agility, endurance, and strategic thinking. Players must also be able to quickly react to the movements and shots of their opponent. The game has a rich history and tradition, with many famous players having achieved great success and acclaim in the sport.`,
  ];

  return (
    <article className="px-[48px] py-[46px] bg-[#fff] rounded-[10px] border-t-4 border-t-[#FFBB34] relative top-[150px]">
      <div className="flex items-start justify-between">
        <h2 className="h2 text-[#13013c] w-[454px]">
          Why does MPR Tennis need more details about me?
        </h2>
        <ModalClose />
      </div>
      <Image
        src={HeaderLine}
        alt="Header Line"
        className="mt-[15px] w-[120px] h-[20px] mb-[15px]"
      />
      <div className="w-[552px]">
        {details.map((point, index) => (
          <p key={index} className="f16 fw400 lh24 text-[#828282] mb-[22px]">
            {point}
          </p>
        ))}
      </div>
    </article>
  );
};

export default MPRNote;
