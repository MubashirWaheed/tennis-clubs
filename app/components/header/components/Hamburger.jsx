import "../navbar.css";

const Hamburger = ({ profileMenu, updateMenu, burger_class }) => {
  return (
    <div
      className={`${
        profileMenu ? "hidden" : "block"
      } nav z-50 md:hidden px-[2px]`}
    >
      <div className="w-[20px] h-[20px] burger-menu" onClick={updateMenu}>
        <div className={burger_class}></div>
        <div className={burger_class}></div>
        <div className={burger_class}></div>
      </div>
    </div>
  );
};

export default Hamburger;
