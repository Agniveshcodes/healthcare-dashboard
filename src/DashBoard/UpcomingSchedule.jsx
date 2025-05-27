import React from "react";
import { patientScheduleData } from "../AppData/patientScheduleData";
import AppointmentCard from "../DashBoard/AppointmentCard";

const UpcomingSchedule = () => {
  return (
    <div>
      <h2 className="text-lg font-semibold text-gray-800 mb-4">The Upcoming Schedule</h2>
      <div className="flex flex-col gap-6">
        {patientScheduleData.map((group, idx) => (
          <div key={idx}>
            <h3 className="text-sm font-semibold text-gray-600 mb-2">{group.day}</h3>
            <div className="flex gap-3">
              {group.appointments.map((appt, i) => (
                <AppointmentCard
                  key={i}
                  icon={appt.icon}
                  type={appt.type}
                  time={appt.time}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingSchedule;
