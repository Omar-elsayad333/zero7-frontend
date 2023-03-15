import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
    return (
        <div>
            <header>
                dashboard header
            </header>
            <main>
                <Outlet />
            </main>
            <footer>
                dashboard footer
            </footer>
        </div>
    )
}
 
export default DashboardLayout;