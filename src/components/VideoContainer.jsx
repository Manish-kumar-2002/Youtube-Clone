import Card, { AdsCard } from "./Card";
import useGetVideos from "../utils/useGetVideos";
import VideoCintainerShimmer from "./VideoCintainerShimmer";

const VideoContainer = () => {
  const videos = useGetVideos();

  if (videos.length == 0) {
    return <VideoCintainerShimmer />;
  }
  //
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
      {videos[0] && <AdsCard info={videos[0]} />}
      {videos.map((item) => (
        <Card key={videos.id} info={item} />
      ))}
    </div>
  );
};

export default VideoContainer;
