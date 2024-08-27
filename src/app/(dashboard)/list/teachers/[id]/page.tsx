import Image from "next/image";
import React from "react";

const singleTeacherPage = () => {
  return (
    <div className="flex flex-1 flex-col xl:flex-row p-4 gap-4">
      {/* left */}
      <div className="w-full md:w-2/3">
        <div className="flex flex-col xl:flex-row gap-4">
          <div className="flex flex-1 bg-lamaSky py-6 px-4 rounded-md gap-4">
            <div className="w-1/3">
              <Image
                src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1200"
                width={144}
                height={144}
                alt=""
                className="w-36 h-36 rounded-full object-cover"
              />
            </div>
            <div className="w-2/3"></div>
          </div>
        </div>
      </div>
      {/* right */}
      <div className="w-full md:w-1/3">r</div>
    </div>
  );
};

export default singleTeacherPage;
