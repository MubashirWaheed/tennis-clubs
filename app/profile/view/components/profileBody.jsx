import Results from "./RecentResults";
import Events from "./UpcommingEvents";
import Media from "./Media";
import RecentEvents from "./RecentEvents";
import Clubs from "./Clubs";

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
