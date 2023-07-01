import Header from "@/app/components/header/homeHeader";

const createNewClubLayout = ({children}) => {
    return(
        <>
            <Header />
            {children}
        </>
    )
}

export default createNewClubLayout;