import { Outlet } from "react-router-dom"
import Header from "../components/Header"
import CardAbout from "../components/CardAbout"

function DefaultLayout() {
    return (
        <>
            <div className="dark:bg-boxdark-2 bg-stroke">
                <Header />
                <div className="flex flex-col p-4 gap-4 mx-auto max-w-100">
                    <Outlet />
                </div>
            </div>
        </>
    )
}

export default DefaultLayout