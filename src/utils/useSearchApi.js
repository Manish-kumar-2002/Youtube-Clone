import React, { useEffect, useState } from "react";
import { YOUTUBE_SEARCH_SUGGESTIONS_API } from "../utils/constant";

const useSearchApi = () => {
  const [searchData, setSearchData] = useState([]);

  useEffect(() => {
    getSearchData();
  }, []);

  async function getSearchData() {
    try {
      const response = await fetch(YOUTUBE_SEARCH_SUGGESTIONS_API);
      if (!response.ok) {
        throw new Error(`HTTP error! status ${response.status}`);
      }
      const data = await response.json();
      console.log(data);
      setSearchData(data);
    } catch (error) {
      console.log("Fetching Error:" + error);
    }
  }

  return searchData;
};

export default useSearchApi;
