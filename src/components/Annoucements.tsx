import React from "react";

const Annoucements = () => {
  return (
    <div className="bg-white rounded-md p-4">
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-semibold">Annoucements</h1>
        <span className="text-sm text-gray-400">View All</span>
      </div>

      <div className="flex flex-col gap-4 mt-4">
        <div className="bg-lamaSky p-4 rounded-md">
          <div className="flex items-center justify-between">
            <h2 className="font-semibold">First annoucement</h2>
            <span className="text-gray-400 text-xs bg-white rounded-md px-1 py-1">
              12/05/2258
            </span>
          </div>
          <p className="text-sm text-gray-400 mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
            fugiat veniam suscipit odit id impedit
          </p>
        </div>
        <div className="bg-lamaPurple p-4 rounded-md">
          <div className="flex items-center justify-between">
            <h2 className="font-semibold">First annoucement</h2>
            <span className="text-gray-400 text-xs bg-white rounded-md px-1 py-1">
              12/05/2258
            </span>
          </div>
          <p className="text-sm text-gray-400 mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
            fugiat veniam suscipit odit id impedit
          </p>
        </div>
        <div className="bg-lamaYellow p-4 rounded-md">
          <div className="flex items-center justify-between">
            <h2 className="font-semibold">First annoucement</h2>
            <span className="text-gray-400 text-xs bg-white rounded-md px-1 py-1">
              12/05/2258
            </span>
          </div>
          <p className="text-sm text-gray-400 mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
            fugiat veniam suscipit odit id impedit
          </p>
        </div>
      </div>
    </div>
  );
};

export default Annoucements;
