import Results from "./RecentResults";
import Events from "./UpcommingEvents";
import RecentEvents from "./RecentEvents";
import Clubs from "./Clubs";
import Meedia from "./Meedia";

const ProfileBody = () => {
  return (
    <>
      <Results />
      <Events />
      <RecentEvents />
      <Meedia />
      <Clubs />
    </>
  );
};

export default ProfileBody;
