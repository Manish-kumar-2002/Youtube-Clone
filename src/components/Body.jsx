import { Outlet } from "react-router-dom"
import Sidebar from "./Sidebar"

const Body = () => {
    return (
        <div className="flex mt-[81.5px] relative">
            <Sidebar />
            <Outlet />
        </div>
    )
}

export default Body