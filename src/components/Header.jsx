import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/menuToggleSlice";
import { Link } from "react-router-dom";
import { use, useEffect, useState } from "react";
import { YOUTUBE_SEARCH_SUGGESTIONS_API } from "../utils/constant";
// import useSearchApi from "../utils/useSearchApi";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestionsData,setSuggestionsData] = useState([])
  const [showSuggestions, setShowSuggestions] = useState(false);

  useEffect(() => {
    const apiWithQuery =
      YOUTUBE_SEARCH_SUGGESTIONS_API + searchQuery.toLowerCase().trim();
    const timer = setTimeout(() => getSearchData(apiWithQuery), 200);

    return () => clearTimeout(timer);
  }, [searchQuery]);

  async function getSearchData(apiWithQuery) {
    try {
      console.log(searchQuery);

      const response = await fetch(apiWithQuery);
      if (!response.ok) {
        throw new Error(`HTTP error! status ${response.status}`);
      }
      const data = await response.json();
      setSuggestionsData(data[1])
      console.log(data);
    } catch (error) {
      console.log("Fetching Error:" + error);
    }
  }

  const dispatch = useDispatch();

  const handlerClick = () => {
    dispatch(toggleMenu());
    console.log("click");
  };

  return (
    <header className="py-5 top-0 left-0 fixed w-full bg-black z-10">
      <div className="container flex items-center gap-5 justify-between">
        <div className="flex gap-8">
          <button
            className="rounded-full cursor-pointer relative z-1"
            onClick={() => handlerClick()}
          >
            <i className="fa-solid fa-bars text-2xl"></i>
            <span className="block absolute w-11 h-11 rounded-full top-[-8px] left-[-11px] hover:bg-[rgba(255,255,255,0.1)] z-0"></span>
          </button>
          <a
            to="/"
            className="flex items-center whitespace-nowrap gap-1 text-2xl"
          >
            <i className="fa-brands fa-youtube text-red-500"></i>YouTube Clone
          </a>
        </div>
        <div className="w-[50%]">
          <div className="flex items-center border rounded-full relative">
            <i className="fa-solid fa-magnifying-glass text-gray-400 ml-4"></i>
            <input
              type="text"
              placeholder="Search"
              className="w-full bg-transparent text-white px-4 py-2 focus:outline-none placeholder-gray-400"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setShowSuggestions(true)}
              onBlur={() => setShowSuggestions(false)}
            />
            <button className="px-6 py-2 bg-[rgba(255,255,255,0.1)] cursor-pointer border-l text-white rounded-r-full transition-colors">
              <i className="fa-solid fa-magnifying-glass text-gray-400 text-xl"></i>
            </button>
            {(showSuggestions && suggestionsData.length!=0) && (
              <ul className="w-[calc(100%-68.8px)] py-2 absolute bg-gray-800 top-[105%] rounded-xl z-20">
                {
                    suggestionsData.map((results)=><li className="px-5 hover:bg-gray-700 py-2" key={results}><i className="fa-solid fa-magnifying-glass text-gray-400 mr-4"></i>{results}</li>)
                }
              </ul>
            )}
          </div>
        </div>
        <div className="">
          <button className="cursor-pointer text-4xl">
            <i className="fa-solid fa-circle-user"></i>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
