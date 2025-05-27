import React from "react";

const AppointmentCard = ({ icon, time, type }) => {
  return (
    <div className="flex items-center justify-between text-gray-700 px-4 py-2 rounded-full shadow-sm bg-blue-100">
      <div className=" flex flex-col">
        <div className="flex items-center gap-2">
        <span className="text-sm font-medium text-gray-700">{type}</span>
        <span className="text-lg">{icon}</span>
      </div>
     <div>
         <span className="text-xs text-gray-500">{time}</span>
     </div>
      </div>
    </div>
  );
};

export default AppointmentCard;
