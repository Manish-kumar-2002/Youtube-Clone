const GOOGLE_API_KEY = import.meta.env.VITE_GOOGLE_API_KEY

export const YOUTUBE_VIDEOS_API= "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key="+GOOGLE_API_KEY;



{/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 p-4">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="bg-white shadow-md rounded-lg overflow-hidden"
          >
            <div className="h-48 bg-gray-300"></div>{" "}
            
            <div className="p-3">
              <h2 className="font-semibold text-lg">Video Title {i + 1}</h2>
              <p className="text-gray-500 text-sm">Channel Name</p>
            </div>
          </div>
        ))}
      </div> */}