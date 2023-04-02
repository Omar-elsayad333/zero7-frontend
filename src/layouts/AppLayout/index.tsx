import Navbar from 'components/Navbar'
import Footer from 'components/Footer'
import { Outlet } from 'react-router-dom'
import style from './appLayout.module.css'

const AppLayout = () => {
    return (
        <div className={style.App}>
            <header>
                <Navbar />
            </header>
            <main>
                <Outlet />
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    )
}

export default AppLayout;