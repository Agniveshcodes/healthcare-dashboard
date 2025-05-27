import React from "react";
import { calendarDays, appointments } from "../AppData/CalederData";

const Calendar = () => {
  const badgeColors = {
    blue: "bg-blue-500",
    purple: "bg-purple-500",
    // add more as needed
  };

  const bgVariants = {
    light: "bg-[#F9FBFD]",
    dark: "bg-[#3734A9] text-white",
  };

  return (
    <div className="pt-2 w-full">
      {/* Calendar Title */}
      <h2 className="text-lg font-semibold text-gray-800 mb-4">October 2021</h2>

      {/* Calendar Grid */}
      <div className="grid grid-cols-7 gap-4 mb-6">
        {calendarDays.map((day) => (
          <div
            key={day.day}
            className="bg-[#EDF5FF] p-3 rounded-lg text-center"
          >
            <div className="text-sm font-medium text-gray-700">{day.day}</div>
            <div className="text-sm text-gray-500">{day.date}</div>

            <div className="mt-2 flex flex-col gap-1">
              {day.times.map((time, idx) => (
                <div className="flex items-center justify-center">
                  <span
                    key={idx}
                    className="text-[11px] bg-accent text-gray-400  px-2 py-0.5 rounded-full"
                  >
                    {time}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Appointment Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {appointments.map((appt, index) => (
          <div
            key={index}
            className={`rounded-3xl p-3 flex justify-between shadow-sm border border-gray-200 text-sm text-gray-500 ${
              bgVariants[appt.color]
            }`}
          >
            <div>
              <div className="text-sm font-semibold mb-2 ">{appt.title}</div>
              <div className="text-sm mb-1">{appt.time}</div>
              <div className="text-sm">{appt.doctor}</div>
            </div>

            <div className="">
              <span className="text-xl">{appt.icon}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
