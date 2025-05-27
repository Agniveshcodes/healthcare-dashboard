import React from "react";
import { generalLinks, toolsLinks, settingsLink } from "../AppData/NavData";

const Sidebar = () => {
  return (
    <div className="h-full w-full p-6 flex flex-col justify-between bg-[#F9FBFD] text-sm">
      {/* Top Section */}
      <div>
        <h1 className="text-2xl font-bold text-accent mb-10 text-cyan-400">Health<span className="text-gray-700">care.</span></h1>

        {/* General Links */}
        <div className="mb-6">
          <p className="text-xs uppercase tracking-wide text-gray-200 mb-2">General</p>
          <ul className="flex flex-col gap-3">
            {generalLinks.map((link) => (
              <li key={link.label} className="flex items-center gap-3 text-gray-500 hover:text-black transition-colors cursor-pointer">
                <link.icon size={18} />
                {link.label}
              </li>
            ))}
          </ul>
        </div>

        {/* Tools Links */}
        <div className="mb-6">
          <p className="text-xs uppercase tracking-wide text-gray-200 mb-2">Tools</p>
          <ul className="flex flex-col gap-3">
            {toolsLinks.map((link) => (
              <li key={link.label} className="flex items-center gap-3 text-gray-500 hover:text-black transition-colors cursor-pointer">
                <link.icon size={18} />
                {link.label}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom-aligned Settings */}
      <div>
        <ul className="flex flex-col gap-3">
          <li className="flex items-center gap-3 text-gray-500 hover:text-black transition-colors cursor-pointer">
            <settingsLink.icon size={18} />
            {settingsLink.label}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
