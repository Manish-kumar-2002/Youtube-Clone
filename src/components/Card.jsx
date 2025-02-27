import { useState } from "react";
import { Link } from "react-router-dom";

const Card = ({ info }) => {

  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;
  const { viewCount } = statistics;

  const [openPopUp,setOpenPopUp] = useState(false)


  function convertISOToTime(isoDuration) {
    const match = isoDuration.match(/PT(\d+H)?(\d+M)?(\d+S)?/);

    const hours = match[1] ? parseInt(match[1]) : 0;
    const minutes = match[2] ? parseInt(match[2]) : 0;
    const seconds = match[3] ? parseInt(match[3]) : 0;

    // Agar hour hai to `hh:mm:ss`, warna `mm:ss` format me convert karega
    return hours > 0
      ? `${hours}:${String(minutes).padStart(2, "0")}:${String(
          seconds
        ).padStart(2, "0")}`
      : `${minutes}:${String(seconds).padStart(2, "0")}`;
  }

  // console.log(convertISOToTime("PT1M36S")); // Output: "1:36"
  // console.log(convertISOToTime("PT2H15M5S")); // Output: "2:15:05"
  // console.log(convertISOToTime("PT45S")); // Output: "0:45"

  return (
    <Link to={`/watch?v=${info.id}`} className="w-full">
      <div className="rounded-xl shadow-md  overflow-hidden mb-2 h-[160px] relative">
        <img className="w-full h-full object-cover" src={thumbnails?.medium?.url} alt="thumbnail" />
        <span className="block absolute px-2 text-[12px] rounded-sm bottom-1 right-1 bg-[rgba(0,0,0,0.7)]">
          {convertISOToTime(info?.contentDetails?.duration)}
        </span>
      </div>
      <div className="flex gap-2 px-1">
        <div className="flex gap-2">
          <img
            className="w-10 h-10 rounded-full"
            src={thumbnails?.default?.url}
            alt="img"
          />
          <div className="flex flex-col text-sm">
            <p className=" line-clamp-2">{title}</p>
            <span className="text-gray-400 text-[12px]">{channelTitle}</span>
            <div className="flex gap-1 text-[12px] text-gray-400">
              <span>{viewCount} views</span>
              <span>•</span>
              <span>15 minutes ago</span>
            </div>
          </div>
        </div>
        <div className="relative cursor-pointer z-1">
          <span className="block absolute w-7 h-7 rounded-full top-[-2px] left-[-12px] hover:bg-[rgba(255,255,255,0.1)] z-0"></span>
          <button className="mr-3" onClick={()=>setOpenPopUp(!openPopUp)}><i className="fa-solid fa-ellipsis-vertical"></i></button>
          {
            openPopUp && <h1>hi</h1>
          }
        </div>
      </div>
    </Link>
  );
};

// HOC
export const AdsCard = ({info}) => {
  return <div className="border rounded-lg"><Card info={info} /></div>
} 

export default Card;
