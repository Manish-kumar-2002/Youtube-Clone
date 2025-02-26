import React from "react";

const VideoCintainerShimmer = () => {
  return (
    // <div className="flex flex-wrap">
    //   {[...Array(20)].map((_, i) => (
    //     <div key={i} className="h-[243px] w-96 bg-gray-700 shadow-md rounded-lg animate-pulse"></div>
    //   ))}
    // </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
    {Array(20).fill(0).map((_, index) => (
      <div key={index} className=" animate-pulse p-4 rounded-lg w-[250px]">
      <div className="w-full h-40 bg-gray-700 rounded-md"></div>
      <div className="mt-4 flex space-x-4">
        <div className="w-9 h-9 bg-gray-700 rounded-full flex-none"></div>
        <div className="w-full">
          <div className="h-4 bg-gray-700 w-1/2 rounded"></div>
          <div className="mt-2 h-4 bg-gray-700 w-3/4 rounded"></div>
        </div>
      </div>
       
    </div>
    ))}
  </div>
  );
};

export default VideoCintainerShimmer;
