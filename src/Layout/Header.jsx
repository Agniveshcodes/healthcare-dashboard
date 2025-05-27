import React from "react";
import { Search, Bell, Plus } from "lucide-react";

const Header = () => {
  return (
    <header className="w-full h-[72px] flex">
      {/* Left half: Search + Bell (white background) */}
      <div className="w-1/2 bg-white flex items-center justify-between px-6 ">
        {/* Search Bar */}
        <div className="relative w-full max-w-md">
          <Search className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400" size={18} />
          <input
            type="text"
            placeholder="Search"
            className="w-full pl-10 pr-4 py-2 bg-[#F9FBFD] text-sm rounded-lg border border-gray-200 focus:outline-none placeholder:text-gray-400 shadow-sm"
            readOnly
          />
        </div>

        {/* Notification Bell */}
        <button className="p-2 ml-3 rounded-full hover:bg-gray-100 transition">
          <Bell size={20} className="text-gray-600"  />
        </button>
      </div>

      {/* Right half: Add + Profile (blue tint background) */}
      <div className="w-1/2 bg-[#E8F1FF] flex items-center justify-end px-10 gap-2">
        {/* Add Button */}
        <button className="flex items-center py-2 bg-accent text-white rounded-lg text-sm font-medium hover:bg-blue-600 transition">
          <Plus size={28} className="text-bold bg-blue-900 rounded-md" />
        </button>

        {/* User Profile */}
        <div className="flex items-center">
          <img
            src="https://i.pravatar.cc/40?img=12"
            alt="User Avatar"
            className="w-9 h-9 rounded-full object-cover border"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
