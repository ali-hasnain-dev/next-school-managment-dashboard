import Image from "next/image";
import React from "react";

const UserCard = ({ type }: { type: string }) => {
  return (
    <div className="rounded-2xl odd:bg-lamaPurple even:bg-lamaYellow p-4 flex-1 min-w-[139px]">
      <div className="flex items-center justify-between">
        <span className="rounded-full bg-white text-[10px] px-2 py-1 text-green-600">
          12/05/2258
        </span>

        <Image src="/more.png" alt="" width={20} height={20} />
      </div>
      <h1 className="text-2xl py-4 font-semibold">1235000</h1>
      <h2 className="text-gray-500 capitalize text-sm font-medium">{type}</h2>
    </div>
  );
};

export default UserCard;
