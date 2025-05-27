import React from "react";

const activityData = [
  { day: "M", level: 2 },
  { day: "T", level: 3 },
  { day: "W", level: 0 },
  { day: "T", level: 1 },
  { day: "F", level: 2 },
  { day: "S", level: 3 },
  { day: "S", level: 0 },
];

const PatientActivityFeed = () => {
  return (
    <div className="bg-blue-50 rounded-xl shadow-md p-6 w-full">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-800">Activity</h2>
        <p className="text-sm text-gray-500">3 appointments on this week</p>
      </div>

      {/* Bar Chart */}
      <div className="flex items-end gap-4 h-40">
        {activityData.map((item, idx) => {
          const height = `${item.level * 20}px`;
          const barColor = item.level > 0 ? "bg-blue-500" : "bg-gray-300";

          return (
            <div key={idx} className="flex flex-col items-center gap-1">
              <div
                className={`w-3 rounded-full ${barColor}`}
                style={{
                  height: height,
                  minHeight: item.level > 0 ? "20px" : "4px",
                }}
              />
              <span className="text-xs text-gray-500">{item.day}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PatientActivityFeed;
