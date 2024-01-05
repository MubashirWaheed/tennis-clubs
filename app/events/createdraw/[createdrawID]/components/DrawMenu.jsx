import Image from "next/image";
import Link from "next/link";
import useMenuStore from "../hooks/useSideMenuStore";
import { MODAL_TYPES } from "../constants/constants";
import { usePathname } from "next/navigation";
const DrawMenu = ({
  handleDrawSelect,
  showDrawMenu,
  drawsList,
  setShowDrawMenu,
  openModal,
  divisions,
  setSelectedDivision,
}) => {
  const pathname = usePathname();
  const eventId = pathname.split("/")[3];

  const something = useMenuStore();

  return (
    <>
      <div
        className={`${
          showDrawMenu
            ? "bg-purple md:flex bg-opacity-70 z-40 fixed top-0 left-0 bottom-0 right-0"
            : "hidden"
        }  hidden`}
      >
        <div
          className={`overflow-y-auto px-[30px] bg-white md:w-[350px] h-full opacity-[100%]  absolute top-0 z-50 `}
        >
          <div className="flex justify-between  items-center bg-white my-[20px] py-[20px]">
            <p className="text-darkPurple f20 fw700">Draws</p>
            <span
              onClick={() => setShowDrawMenu(!showDrawMenu)}
              className="bg-[#e7e6eb] cursor-pointer rounded-full  p-1"
            >
              <Image src="/close.svg" alt="close" width={14} height={14} />
            </span>
          </div>
          <form className={styles.searchContainer}>
            <label htmlFor="search">
              <Image
                width={18}
                height={18}
                src="/search-icon.svg"
                alt="Add Icon"
                className={styles.searchIcon}
              />
            </label>
            <input
              id="search"
              type="search"
              className={styles.searchInput}
              placeholder="Filter draws"
            />
          </form>

          <div className="mt-[50px] text-grey flex flex-col fw400">
            <p
              onClick={() => openModal(MODAL_TYPES.CREATE_DRAW)}
              className="hover:text-purple cursor-pointer py-[10px] border-b-[1px] border-[#e7e6eb]"
            >
              Draws
            </p>
            {/* if the draw type is compass than create east west north south part as well  */}
            {drawsList?.map((draw, index) => (
              <div key={index}>
                {draw.drawType !== "Compass" ? (
                  <div
                    className="cursor-pointer hover:text-purple"
                    onClick={() => {
                      handleDrawSelect(draw);
                      setShowDrawMenu(!showDrawMenu);
                    }}
                  >
                    {draw?.drawName}
                  </div>
                ) : (
                  <Link
                    href={`/events/createdraw/${eventId}`}
                    onClick={() => {
                      setShowDrawMenu(!showDrawMenu);
                    }}
                  >
                    <p
                      className="hover:text-purple cursor-pointer text-[14px]"
                      onClick={() => handleDrawSelect(draw)}
                    >
                      {draw?.drawName} - EAST
                    </p>
                    <p
                      onClick={() => handleDrawSelect(draw)}
                      className="hover:text-purple cursor-pointer text-[14px]"
                    >
                      WEST
                    </p>
                    <p className="hover:text-purple cursor-pointer text-[14px]">
                      NORTH
                    </p>
                    <p className="hover:text-purple cursor-pointer text-[14px]">
                      SOUTH
                    </p>
                  </Link>
                )}
              </div>
            ))}

            <p className="py-[10px] border-b-[1px] border-[#e7e6eb] fw700 text-purple">
              Level Bases Plays Singles
            </p>
            <p className="py-[10px] border-b-[1px] border-[#e7e6eb]">Players</p>
            <Link
              href={`/events/createdraw/${eventId}/players`}
              className="py-[10px] border-b-[1px] border-[#e7e6eb]"
            >
              All Players
            </Link>
            {divisions &&
              divisions.map((item, index) => {
                return (
                  <Link
                    className="py-[2px]"
                    key={index}
                    href={`/events/createdraw/${eventId}/division/${item.id}`}
                    onClick={() => {
                      setSelectedDivision(item);
                      setShowDrawMenu(!showDrawMenu);
                    }}
                  >
                    {item.divisionName}
                  </Link>
                );
              })}

            <p className="py-[10px] border-b-[1px] border-[#e7e6eb]">
              Not in a Draws
            </p>
          </div>
        </div>
      </div>
      <div
        onClick={() => setShowDrawMenu(!showDrawMenu)}
        className="z-30 transition-all duration-500 ease-in-out cursor-pointer rounded-l-xl md:py-[25px] px-[7px]  lg:py-[30px] gap-2 bg-green absolute  hidden  lg:top-[40%] 2xl:top-[30%] [writing-mode:vertical-rl] rotate-180 lg:flex justify-center items-center"
      >
        <p className="f18 text-white fw700 [writing-mode:vertical-lr]">Draws</p>
        <p>
          <Image
            src="/category.svg"
            alt="draws widget"
            width={20}
            height={20}
          />
        </p>
      </div>
    </>
  );
};

export default DrawMenu;

const styles = {
  searchContainer:
    "z-30 flex items-center gap-2 shadow-lg rounded-lg border-[#828282] px-1 py-2",
  searchIcon: "ml-[10px] text-[#13013C] w-[18px] h-[18px]",
  searchInput: "outline-none w-[240px] border-none text-base text-[#13013C]",
};
