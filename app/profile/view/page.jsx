import ProfileBody from "./components/profileBody";
import ProfileNavigation from "./components/profileNav";
import profileViewData from "./profileView.json";

const ProfileView = () => {
    return (
        <section className="relative -top-[30px] flex flex-col gap-[50px] max-w-[1170px] mx-auto px-4 lg:px-0">
            <ProfileNavigation navItems={profileViewData?.profileNavBar} />
            <ProfileBody />
        </section>
    );
}

export default ProfileView;