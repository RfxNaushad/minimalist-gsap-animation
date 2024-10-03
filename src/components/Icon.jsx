import React from "react";

function Icon() {
  return (
    <div className="flex flex-col gap-4 px-6 py-32 text-[3em]">
      <div className="flex gap-4  justify-center items-center">
        <span className="px-4 py-2  rounded-full border border-gray-500">
          Travel
        </span>
        <span className="px-4 py-2   rounded-full border border-gray-500">
          Home
        </span>
        <span className="px-4 py-2   rounded-full border border-gray-500">
          Office
        </span>
        <span className="px-4 py-2   rounded-full border border-gray-500">
          Kitchen
        </span>
        <span className="px-4 py-2   rounded-full border border-gray-500">
          Fashion
        </span>
      </div>
      <div className="flex  gap-4  justify-center items-center">
        <span className="px-4 py-2   rounded-full border border-gray-500">
          Furniture
        </span>
        <span className="px-4 py-2   rounded-full border border-gray-500">
          Books
        </span>
        <span className="px-4 py-2   rounded-full border border-gray-500">
          Lighting
        </span>
        <span className="px-4 py-2   rounded-full border border-gray-500">
          Tech
        </span>
      </div>
      <div className="flex  gap-4  justify-center items-center">
        <span className="px-4 py-2   rounded-full border border-gray-500">
          Decor
        </span>
        <span className="px-4 py-2   rounded-full border border-gray-500">
          Bath & Bed
        </span>
        <span className="px-4 py-2   rounded-full border border-gray-500">
          More
        </span>
      </div>
    </div>

    
  );
}

export default Icon;
