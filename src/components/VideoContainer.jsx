import Card from "./Card";
import useGetVideos from "../utils/useGetVideos";
import VideoCintainerShimmer from "./VideoCintainerShimmer";

const VideoContainer = () => {

    const videos = useGetVideos()
    console.log(videos);

    if(videos.length==0){
        return <VideoCintainerShimmer />
    }
    
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4">
      
     { videos.map((item)=><Card key={videos.id} info={item} />)}

    </div>
  );
};

export default VideoContainer;
