import { useEffect, useState } from "react"
import { YOUTUBE_VIDEOS_API } from "./constant";

const useGetVideos = () => {

    const [data,setData] = useState([])

    useEffect(()=>{
        useGetVideos();
    },[])
 
    async function useGetVideos(){
        try{
            const response = await fetch(YOUTUBE_VIDEOS_API);
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
              }
            const data = await response.json();
            setData(data.items)
            // console.log(data.items);
        }
        catch(error){
            console.log("Error fetching videos:",error);
        }
    }

  return data
}

export default useGetVideos