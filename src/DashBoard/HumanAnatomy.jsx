import React from "react";
import { MoreVertical } from "lucide-react";

//ComponentDescription
function HumanAnatomy() {
  return (
    <>
      <div className="relative bg-white rounded-xl p-6 shadow-md w-full max-w-md mx-auto">
         <div className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 cursor-pointer">
        <MoreVertical size={20} />
      </div>
        {/* Anatomy image */}
        <img
          src="HumanAnatomy.jpg"
          alt="Human Anatomy"
          className="w-full h-auto object-contain"
        />

        <div className="absolute top-[28%] left-[65%] -translate-x-1/2 -translate-y-1/2 bg-purple-700 text-white text-xs px-1 py-2 rounded-lg shadow">
          ❤️ Healthy Heart
        </div>

        {/* Healthy Leg */}
        <div className="absolute bottom-[30%] left-[20%] -translate-x-1/2 bg-blue-100 text-blue-700 text-xs px-3 py-1 rounded-lg shadow">
          🦵 Healthy Leg
        </div>
      </div>
    </>
  );
}

export default HumanAnatomy;
