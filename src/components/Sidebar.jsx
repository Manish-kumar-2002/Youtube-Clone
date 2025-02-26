import { useSelector } from "react-redux"
import Footer from "./Footer"
import { Link } from "react-router-dom"

const Sidebar = () => {

    const value = useSelector((store=>store.menu.menuToggle))

    return (
        <div className={`px-3 flex flex-col flex-none sticky justify-between h-[calc(100vh-82px)] top-[81.5px] overflow-y-auto ${value ? "w-auto" : "w-[240px]"}`}
>
            <div className={`capitalize ${value?"":"max-w-[200px]"}`}>
                <ul className="flex flex-col mb-3">
                    <li><Link to='/' className="flex items-center px-3 text-lg py-2 block hover:bg-gray-800 rounded-lg" ><i className={`fa-solid fa-house ${value?"my-2":"mr-5"}`}></i>{value?null:<span className="line-clamp-1">Home</span>}</Link></li>
                    <li><Link to='/' className="flex items-center px-3 text-lg py-2 block hover:bg-gray-800 rounded-lg" ><i className={`fa-solid fa-circle-play ${value?"my-2":"mr-5"}`}></i>{value?null:<span className="line-clamp-1">Shorts</span>}</Link></li>
                    <li><Link to='/' className="flex items-center px-3 text-lg py-2 block hover:bg-gray-800 rounded-lg" ><i className={`fa-brands fa-square-youtube ${value?"my-2":"mr-5"}`}></i>{value?null:<span className="line-clamp-1">subscriptions</span>}</Link></li>
                    <li><Link to='/' className="flex items-center px-3 text-lg py-2 block hover:bg-gray-800 rounded-lg" ><i className={`fa-solid fa-circle-user ${value?"my-2":"mr-5"}`}></i>{value?null:<span className="line-clamp-1">You</span>}</Link></li>
                </ul>
                <ul className={`flex border-t flex-col pt-3 ${value?"hidden":"block"}`}>
                    <li><Link to='/' className="flex items-center px-3 text-lg py-2 block hover:bg-gray-800 rounded-lg" >You<i className="fa-solid fa-chevron-right ml-3"></i></Link></li>
                    <li><Link to='/' className="flex items-center px-3 text-lg py-2 block hover:bg-gray-800 rounded-lg" ><i className="fa-solid fa-clock-rotate-left mr-5"></i>History</Link></li>
                    <li><Link to='/' className="flex items-center px-3 text-lg py-2 block hover:bg-gray-800 rounded-lg" ><i className="fa-solid fa-rectangle-list mr-5"></i>Playlists</Link></li>
                </ul>
            </div>
            <div className={`${value?"hidden":"block"}`}>
            <Footer />
            </div>
        </div>
    )
}

export default Sidebar