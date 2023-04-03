import Landing from "components/Home/Landing";
import { useUser } from "contexts/userContext";
import Section1 from "components/Home/Section1";
import Section2 from "components/Home/Section2";
import LogoLoading from "components/Loading/LogoLoading";

const Home = () => {
    const { userState } = useUser()
    return (
        <>
            {
                userState.userLoading && <LogoLoading />
            }
            <Landing />
            <Section1 />
            <Section2 />
        </>
    )
}
 
export default Home;