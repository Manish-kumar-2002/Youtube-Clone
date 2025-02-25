import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/menuToggleSlice";
import { useSearchParams } from "react-router-dom";

const WatchPage = () => {
  const [serchParams] = useSearchParams();
  console.log(serchParams.get("v"));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeMenu());
  }, []);
  return (
    <div className="rounded-xl overflow-hidden h-fit">
      <iframe
        width="960"
        height="520"
        src={"https://www.youtube.com/embed/"+serchParams.get("v")}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default WatchPage;
