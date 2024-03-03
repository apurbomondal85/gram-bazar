import NavBar from "@/app/components/shared/NavBar"
import NavMenu from "@/app/components/shared/NavMenu"
import TopHeader from "@/app/components/shared/TopHeader"

const Header = () => {
    return (
        <>
            <TopHeader />
            <NavBar />
            <NavMenu />
        </>
    )
}

export default Header