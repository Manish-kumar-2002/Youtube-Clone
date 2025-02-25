import React from "react";

const VideoCintainerShimmer = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4">
      {[...Array(20)].map((_, i) => (
        <div key={i} className="h-[243px] bg-gray-700 shadow-md rounded-lg animate-pulse"></div>
      ))}
    </div>
  );
};

export default VideoCintainerShimmer;
