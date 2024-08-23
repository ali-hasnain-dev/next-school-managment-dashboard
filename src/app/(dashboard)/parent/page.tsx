import Annoucements from "@/components/Annoucements";
import BigCalendar from "@/components/BigCalendar";
import EventCalendar from "@/components/EventCalendar";
import React from "react";

const ParentPage = () => {
  return (
    <div className="flex-1 p-4 gap-4 flex flex-col xl:flex-row">
      {/* left */}
      <div className="w-full xl:w-2/3 ">
        <div className="p-4 bg-white h-full rounded-md">
          <h1 className="text-lg font-semibold">Schedule (John Doe)</h1>
          <BigCalendar />
        </div>
      </div>
      {/* right */}
      <div className="w-full xl:w-1/3 flex flex-col gap-8">
        <Annoucements />
      </div>
    </div>
  );
};

export default ParentPage;
