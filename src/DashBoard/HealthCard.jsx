import React from "react";

const HealthCard = ({ icon, title, date, color }) => {
  const bgColors = {
    red: "bg-red-100 text-red-600",
    green: "bg-green-100 text-green-600",
    orange: "bg-orange-100 text-orange-600",
  };

  const barColors = {
    red: "bg-red-500",
    green: "bg-green-500",
    orange: "bg-orange-500",
  };

  return (
    <div className={`bg-[#EDF5FF] rounded-xl shadow-md p-4 w-full `}>
      {/* icon */}
      <div className=" flex gap-2 items-center">
        <div className="text-3xl mb-2">{icon}</div>

        {/* Title */}
        <div className="text-sm font-semibold mb-1 text-gray-700">{title}</div>
      </div>

      {/* Date */}
      <div className="text-xs text-gray-600">{date}</div>

      {/* Status bar */}
      <div className={`h-2 mt-4 rounded-full ${barColors[color]}`} />
    </div>
  );
};

export default HealthCard;
