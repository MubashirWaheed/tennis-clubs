import ProfileBody from "./components/profileBody";
import ProfileNavigation from "./components/profileNav";
import profileViewData from "./profileView.json";

const ProfileView = () => {
    return(
        <section className="relative -top-[30px] flex flex-col gap-[50px] max-w-[1200px] mx-auto">
            <ProfileNavigation navItems = {profileViewData?.profileNavBar}/>
            <ProfileBody />
        </section>
    )
}

export default ProfileView;