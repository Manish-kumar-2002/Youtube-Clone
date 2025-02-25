const Header = () => {
    return (
        <header className="py-5 border-b">
            <div className="container flex items-center gap-5 justify-between">
                <div className="flex gap-8">
                    <button className="rounded-full cursor-pointer relative"><i className="fa-solid fa-bars text-2xl"></i><span className="block absolute w-11 h-11 rounded-full top-[-8px] left-[-11px] hover:bg-[rgba(255,255,255,0.1)] "></span></button>
                    <a href="#" className="flex items-center whitespace-nowrap gap-1 text-2xl"><i className="fa-brands fa-youtube text-red-500"></i>YouTube Clone</a>
                </div>
                <div className="w-[50%]">
                    <div className="flex items-center border rounded-full">
                        <i className="fa-solid fa-magnifying-glass text-gray-400 ml-4"></i>
                        <input
                            type="text"
                            placeholder="Search..."
                            className="w-full bg-transparent text-white px-4 py-2 focus:outline-none placeholder-gray-400"
                        />
                        <button className="px-6 py-2 bg-[rgba(255,255,255,0.1)] cursor-pointer border-l text-white rounded-r-full transition-colors">
                            <i className="fa-solid fa-magnifying-glass text-gray-400 text-xl"></i>
                        </button>
                    </div>
                </div>
                <div className="">
                    <button className="cursor-pointer text-4xl"><i className="fa-solid fa-circle-user"></i></button>
                </div>
            </div>
        </header>
    )
}

export default Header