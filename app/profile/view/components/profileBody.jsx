import Results from "./RecentResults";
import Events from "./UpcommingEvents";
import RecentEvents from "./RecentEvents";
import Clubs from "./Clubs";
import Media from "./Media";

const ProfileBody = () => {
  return (
    <>
      <Results />
      <Events />
      <RecentEvents />
      <Media />
      <Clubs />
    </>
  );
};

export default ProfileBody;
