import Navbar from 'components/Navbar'
import Footer from 'components/Footer'
import { Outlet } from 'react-router-dom'
import style from './appLayout.module.css'
import { useUser } from 'contexts/userContext'
import LogoLoading from 'components/Loading/LogoLoading'

const AppLayout = () => {
    const { userState } = useUser()
    return (
        <div className={style.App}>
            <header>
                <Navbar />
            </header>
            <main>
                { userState.userLoading && <LogoLoading />}
                <Outlet />
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    )
}

export default AppLayout;