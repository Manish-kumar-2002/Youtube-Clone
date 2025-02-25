import Footer from "./Footer"

const Sidebar = () => {
    return (
        <div className="px-3 py-2 flex flex-col justify-between h-[calc(100vh-82px)] overflow-y-auto">
            <div className="capitalize">
                <ul className="flex flex-col min-w-[200px] mb-3">
                    <li><a className="px-3 text-lg py-2 block hover:bg-[#222] rounded-lg" href=""><i className="fa-solid fa-house mr-5"></i>Home</a></li>
                    <li><a className="px-3 text-lg py-2 block hover:bg-[#222] rounded-lg" href=""><i className="fa-solid fa-circle-play mr-5"></i>Shorts</a></li>
                    <li><a className="px-3 text-lg py-2 block hover:bg-[#222] rounded-lg" href=""><i className="fa-brands fa-square-youtube mr-5"></i>subscriptions</a></li>
                    <li><a className="px-3 text-lg py-2 block hover:bg-[#222] rounded-lg" href=""><i className="fa-solid fa-circle-user mr-5"></i>You</a></li>
                </ul>
                <ul className="flex border-t flex-col min-w-[200px] pt-3">
                    <li><a className="px-3 text-lg py-2 block hover:bg-[#222] rounded-lg" href="">You<i className="fa-solid fa-chevron-right ml-3"></i></a></li>
                    <li><a className="px-3 text-lg py-2 block hover:bg-[#222] rounded-lg" href=""><i className="fa-solid fa-clock-rotate-left mr-5"></i>History</a></li>
                    <li><a className="px-3 text-lg py-2 block hover:bg-[#222] rounded-lg" href=""><i className="fa-solid fa-rectangle-list mr-5"></i>Playlists</a></li>
                </ul>
            </div>
            <Footer />
        </div>
    )
}

export default Sidebar