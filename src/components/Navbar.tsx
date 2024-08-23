import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-4">
      {/* search bar */}
      <div className="hidden md:flex items-center gap-2 text-sm rounded-full ring-[1.5px] ring-gray-300 px-2">
        <Image src="/search.png" width={14} height={14} alt="" />
        <input
          type="text"
          placeholder="Search..."
          className="w-[200px] p-2 bg-transparent outline-none"
        />
      </div>

      {/* icons */}
      <div className="flex items-center gap-6 w-full justify-end">
        <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer">
          <Image src="/message.png " width={20} height={20} alt="message" />
        </div>

        <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center relative cursor-pointer">
          <Image
            src="/announcement.png"
            width={20}
            height={20}
            alt="annoucement"
          />
          <div className="absolute -top-3 -right-3 bg-red-500 rounded-full w-5 h-5 text-white text-xs flex items-center justify-center">
            1
          </div>
        </div>

        <div className="flex flex-col">
          <span className="text-sm leading-3 font-medium">John Doe</span>
          <span className="text-[10px] text-gray-500 text-right">Admin</span>
        </div>

        <Image
          src="/avatar.png"
          width={36}
          height={36}
          alt="avatar"
          className="rounded-full"
        />
      </div>
    </div>
  );
};

export default Navbar;